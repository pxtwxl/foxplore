import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">FOXplore</h2>
          <p className="mt-3 text-sm text-gray-600">
            Explore the world with curated trips, unique travel themes, and sustainable adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#destinations" className="hover:text-yellow-600 transition">Destinations</a></li>
            <li><a href="#themes" className="hover:text-yellow-600 transition">Travel Themes</a></li>
            <li><a href="#offers" className="hover:text-yellow-600 transition">Special Offers</a></li>
            <li><a href="#sustainable" className="hover:text-yellow-600 transition">Sustainable Travel</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#reviews" className="hover:text-yellow-600 transition">Guest Reviews</a></li>
            <li><a href="#inspired" className="hover:text-yellow-600 transition">Get Inspired</a></li>
            <li><a href="#about" className="hover:text-yellow-600 transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="font-semibold mb-3">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-yellow-600 transition" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-yellow-600 transition" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-yellow-600 transition" /></a>
            <a href="#"><Youtube className="w-5 h-5 hover:text-yellow-600 transition" /></a>
          </div>
          <p className="text-sm text-gray-600">📍 123 Explorer St, Adventure City</p>
          <p className="text-sm text-gray-600">📧 hello@foxplore.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FOXplore. All rights reserved.
      </div>
    </footer>
  );
}
