import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, MessageCircle, Star, Users } from "lucide-react";

const IELTSHomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== NAVBAR ===== */}
     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-blue-600">IELTS Pro</h1>
  <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
    <li><a href="#features" className="hover:text-blue-600">Features</a></li>
    <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
  </ul>
  {/* Mobile menu icon */}
  <div className="md:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>
</div>
{menuOpen && (
  <ul className="absolute top-full left-0 w-full bg-white flex flex-col px-6 py-4 space-y-4 shadow-md md:hidden">
    <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
    <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
)}

</nav>


      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-r from-blue-50 to-blue-100">
  <div className="md:w-1/2 space-y-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
      Ace Your IELTS with Confidence
    </h2>
    <p className="text-gray-600 text-lg">
      Join thousands of students who improved their band scores with our modern practice tools, expert tips, and AI-based evaluations.
    </p>
    <button
  onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
  className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
>
  Get Started
</button>

  </div>
  <img
    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600"
    alt="IELTS preparation"
    className="md:w-1/2 rounded-xl shadow-lg mt-10 md:mt-0"
  />
</section>


      {/* ===== FEATURES ===== */}
     <section id="features" className="px-8 md:px-16 py-20 bg-white">
  <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h3>
  <div className="grid gap-8 md:grid-cols-4">
    <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <Book className="text-blue-600 w-10 h-10 mb-4" />
      <h4 className="font-semibold text-lg">Mock Tests</h4>
      <p className="text-gray-600 mt-2">Simulate real IELTS tests with instant feedback.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <MessageCircle className="text-blue-600 w-10 h-10 mb-4" />
      <h4 className="font-semibold text-lg">Speaking Practice</h4>
      <p className="text-gray-600 mt-2">Practice speaking with AI-powered evaluations.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <Star className="text-blue-600 w-10 h-10 mb-4" />
      <h4 className="font-semibold text-lg">AI Band Score</h4>
      <p className="text-gray-600 mt-2">Get accurate band score predictions instantly.</p>
    </div>
    <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
      <Users className="text-blue-600 w-10 h-10 mb-4" />
      <h4 className="font-semibold text-lg">Expert Guidance</h4>
      <p className="text-gray-600 mt-2">Learn tips from top IELTS trainers worldwide.</p>
    </div>
  </div>
</section>


      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="px-8 md:px-16 py-20 bg-gray-50">
  <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Student Success Stories</h3>
  <div className="grid gap-8 md:grid-cols-3">
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <p className="text-gray-600">“The mock tests felt exactly like the real exam. I improved from Band 6 to Band 8!”</p>
      <h4 className="mt-4 font-semibold text-gray-800">— Aditi Sharma</h4>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <p className="text-gray-600">“Speaking practice with AI gave me so much confidence before my test day.”</p>
      <h4 className="mt-4 font-semibold text-gray-800">— Rahul Mehta</h4>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      <p className="text-gray-600">“Thanks to IELTS Pro, I got Band 7.5 and secured my admission abroad.”</p>
      <h4 className="mt-4 font-semibold text-gray-800">— Sneha Patel</h4>
    </div>
  </div>
</section>


      {/* ===== FOOTER ===== */}
      <footer id="contact" className="bg-blue-600 text-white px-8 md:px-16 py-10 mt-auto">
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h4 className="text-lg font-semibold">IELTS Pro Institute</h4>
      <p className="text-blue-100 mt-2">Helping students achieve their dreams since 2010.</p>
    </div>
    <div>
      <h4 className="text-lg font-semibold">Contact Us</h4>
      <p className="text-blue-100 mt-2">Email: info@ieltspro.com</p>
      <p className="text-blue-100">Phone: +91 98765 43210</p>
    </div>
  </div>
  <p className="text-center text-blue-100 mt-8">© 2025 IELTS Pro. All rights reserved.</p>
</footer>

    </div>
  );
};

export default IELTSHomePage;
