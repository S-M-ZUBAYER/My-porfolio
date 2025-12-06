import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const ImageModal = ({ imgSrc, onClose }) => {
  if (!imgSrc) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-5xl w-full p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-red-600 text-white p-2 rounded-full shadow-lg hover:scale-110 transition"
        >
          <IoCloseSharp size={24} />
        </button>

        {/* Image */}
        <img
          src={imgSrc}
          alt="Preview"
          className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/20 animate-zoomIn"
        />
      </div>
    </div>
  );
};

export default ImageModal;
