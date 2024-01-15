import React, { useState } from 'react';

const ImageModal = ({ imgSrc, alt, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 overflow-scroll">
      <div className="max-w-10/12 mx-4 p-4 bg-white rounded-lg shadow-lg">
        <img src={imgSrc} alt={alt} className="w-4/5 mx-auto my-auto h-[600px]" />
        <div className="flex justify-end pb-5">
          <button onClick={onClose} className="mt-2  p-2 bg-red-500 text-white rounded-lg">
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImageModal;
