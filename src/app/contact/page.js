"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`ColorSnap Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@colorsnap.online?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tell us about your experience, report a bug, or suggest a feature..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-green-600 text-xl mb-4">✓ Message Ready!</div>
              <p className="text-gray-600">
                Your default email client should have opened with your message.
                If not, you can reach us directly at:
              </p>
              <a
                href="mailto:hello@colorsnap.online"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                hello@colorsnap.online
              </a>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h2>
            <div className="text-gray-700">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@colorsnap.online" className="text-indigo-600 hover:text-indigo-700">
                  hello@colorsnap.online
                </a>
              </p>
              <p className="mb-2">
                <strong>Response Time:</strong> We typically respond within 24-48 hours
              </p>
              <p>
                <strong>Best For:</strong> Bug reports, feature requests, general questions, or partnership inquiries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}