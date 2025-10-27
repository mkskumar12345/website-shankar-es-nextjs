import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchPopup = ({ setOpenSearchPopup, openSearchPopup }) => {
  return (
    <AnimatePresence>
      {openSearchPopup && (
        <div className="fixed inset-0 bg-black/100 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[38rem] bg-white/90 rounded-lg shadow-2xl p-8 backdrop-blur-lg border border-gray-200"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setOpenSearchPopup(false)}
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              🔍 Find Your Perfect Place
            </h2>

            {/* Input Section */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Search Input */}
              <div className="flex-1">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full text-gray-800 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Area Dropdown */}
              <div className="flex-1">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Category
                </label>
                <select className="w-full text-gray-800 border border-gray-300 rounded-xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select category...</option>
                  <option>Call Girls</option>
                  <option>Messages</option>
                  <option>Male Escorts</option>
                  <option>Transexual</option>
                  <option>Adult Meetings</option>
                </select>
              </div>

              {/* Area Dropdown */}
              <div className="flex-1">
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Area
                </label>
                <select className="w-full text-gray-800 border border-gray-300 rounded-xl px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select area...</option>
                  <option>Downtown</option>
                  <option>Uptown</option>
                  <option>Suburbs</option>
                  <option>Industrial</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full mt-6 bg-[#A10071] text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
              Search Now
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchPopup;
