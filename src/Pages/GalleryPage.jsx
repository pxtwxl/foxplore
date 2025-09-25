
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar"; // keep your navbar import
import Footer from "../Components/Footer";

export default function GalleryPage({ apiKey }) {
  const key = "YGrGK2InxCEFvvdzJmVkUZRwwUc92dcCYjXeJmILiJxlZ6E2pahRW11K"
  const containerRef = useRef(null);

  const [items, setItems] = useState([]); // { id, type: "photo"|"video", src, poster?, alt }
  const [loading, setLoading] = useState(true);
  const [loadedMap, setLoadedMap] = useState({}); // id -> true when that item finished loading
  const [error, setError] = useState(null);

  // Trusted fallback assets (already compressed CDN links). Add more here if you want.
  const FALLBACK = [
    { id: "p-210186", type: "photo", src: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Cityscape" },
    { id: "p-338504", type: "photo", src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Beach" },
    { id: "p-460672", type: "photo", src: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Eiffel Tower" },
    { id: "p-210547", type: "photo", src: "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Harbor" },
    { id: "p-2356059", type: "photo", src: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Mountains" },
    // working Pexels video files (direct mp4 links)
    { id: "v-3018533", type: "video", src: "https://videos.pexels.com/videos/3018533/pexels-video-3018533.mp4", alt: "Waves" },
    { id: "v-3002384", type: "video", src: "https://videos.pexels.com/videos/3002384/pexels-video-3002384.mp4", alt: "Drone" },
    // add a few more fallback photos as needed...
  ];

  // helper: set loaded flag
  const markLoaded = (id) => {
    setLoadedMap((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: true };
    });
  };

  // fetch from Pexels API if key provided; else use repeat of fallback to fill up to 100
  useEffect(() => {
    let mounted = true;
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    async function fetchPexels() {
      if (!key) {
        // no key => fill with repeated fallback to create long feed
        const repeated = [];
        while (repeated.length < 100) repeated.push(...FALLBACK);
        if (mounted) {
          setItems(repeated.slice(0, 100));
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        // Fetch photos and videos in parallel
        const photosResp = await fetch("https://api.pexels.com/v1/search?query=travel&per_page=80&page=1", {
          headers: { Authorization: key },
        });
        const videosResp = await fetch("https://api.pexels.com/videos/search?query=travel&per_page=20&page=1", {
          headers: { Authorization: key },
        });

        if (!photosResp.ok || !videosResp.ok) {
          throw new Error("Pexels API returned an error");
        }

        const photosJson = await photosResp.json();
        const videosJson = await videosResp.json();

        // Normalize photo items (choose a robust size)
        const photoItems = (photosJson.photos || []).map((p) => ({
          id: `p-${p.id}`,
          type: "photo",
          // use large2x when available, else large, else medium
          src: (p.src && (p.src.large2x || p.src.large || p.src.medium)) || null,
          alt: p.alt || p.photographer || "Travel photo",
        })).filter(Boolean);

        // Normalize video items (pick an mp4 file link)
        const videoItems = (videosJson.videos || []).map((v) => {
          const file = (v.video_files || []).find((f) => f.file_type === "video/mp4" && f.width <= 1280) || v.video_files?.[0];
          return file && {
            id: `v-${v.id}`,
            type: "video",
            src: file.link,
            poster: v.image || null,
            alt: v.user?.name ? `${v.user.name} video` : "Travel video",
          };
        }).filter(Boolean);

        // combine and shuffle for variety
        let combined = shuffle([...photoItems, ...videoItems]);

        // ensure we have up to 100 items (repeat fallback if needed)
        if (combined.length < 100) {
          const needed = 100 - combined.length;
          const filler = [];
          while (filler.length < needed) filler.push(...FALLBACK);
          combined = [...combined, ...filler.slice(0, needed)];
        } else {
          combined = combined.slice(0, 100);
        }

        if (mounted) {
          setItems(combined);
        }
      } catch (err) {
        console.error("Gallery fetch error:", err);
        if (mounted) {
          setError("Failed to fetch from Pexels — showing fallback.");
          // fallback repeat
          const repeated = [];
          while (repeated.length < 100) repeated.push(...FALLBACK);
          setItems(repeated.slice(0, 100));
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchPexels();
    return () => {
      mounted = false;
    };
  }, [key]);

  // Lazy-load DOM-level: find elements with data-src and set the src when they are near viewport.
  // We re-run whenever items change.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lazyEls = container.querySelectorAll("[data-src]");
    if (lazyEls.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const dataSrc = el.getAttribute("data-src");
          if (!dataSrc) {
            io.unobserve(el);
            return;
          }

          // set real src to begin loading
          if (el.tagName.toLowerCase() === "img") {
            el.src = dataSrc;
          } else if (el.tagName.toLowerCase() === "video") {
            // set src and try to play (muted autoplay allowed)
            el.src = dataSrc;
            // ensure the browser picks up the source
            try {
              el.load?.();
              el.play?.().catch(() => {/* autoplay may fail if not muted */});
            } catch (e) {}
          }

          // remove attribute to avoid double-handling
          el.removeAttribute("data-src");
          io.unobserve(el);
        });
      },
      { rootMargin: "400px 0px" } // preload well before entering view
    );

    lazyEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  // orientation (height) variations for an Instagram like mixed feed
  const heightClasses = ["min-h-[200px]", "min-h-[300px]", "min-h-[400px]", "min-h-[260px]"];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black px-4 md:px-8 lg:px-12 py-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">Explore The World — Gallery</h1>

        {error && <div className="text-red-600 text-center mb-6">{error}</div>}

        {/* masonry using CSS columns */}
        <div
  ref={containerRef}
  className="flex w-full gap-2"
>
  {/* 4 columns for desktop, adjust per screen */}
  {Array.from({ length: 4 }).map((_, colIdx) => (
    <div key={colIdx} className="flex-1 flex flex-col gap-2">
      {items
        .filter((_, i) => i % 4 === colIdx) // distribute items into columns
        .map((it, idx) => (
          <motion.div
            key={`${it.id}-${idx}`}
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {!loadedMap[it.id] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
            )}

            {it.type === "photo" ? (
              <img
                data-src={it.src}
                alt={it.alt || "travel photo"}
                loading="lazy"
                className="w-full h-auto object-cover transition-opacity duration-700"
                onLoad={() => markLoaded(it.id)}
                onError={() => markLoaded(it.id)}
              />
            ) : (
              <video
                data-src={it.src}
                poster={it.poster || undefined}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-auto object-cover transition-opacity duration-700"
                onLoadedData={() => markLoaded(it.id)}
                onError={() => markLoaded(it.id)}
              />
            )}
          </motion.div>
        ))}
    </div>
  ))}
</div>




        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Tip: pass your Pexels API key as <code>apiKey</code> prop or set <code>REACT_APP_PEXELS_API_KEY</code> for fresh content.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
