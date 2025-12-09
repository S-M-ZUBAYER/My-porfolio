// src/components/SharedPage/DetailsPageFormate.jsx
import React, { useState } from "react";
import ImageModal from "./ImageModal";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const DetailsPageFormate = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Image modal open with safety check
  const openImageModal = (imgSrc) => {
    if (!imgSrc) return;
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  // ✅ Safe external link opening
  const handleToLiveLink = (link) => {
    if (!link) return alert("Invalid link!");
    window.open(link, "_blank", "noopener,noreferrer");
  };

  // ✅ If no data found
  if (!data) {
    return (
      <div className="w-full py-24 text-center text-red-500 font-semibold text-xl">
        No project data found!
      </div>
    );
  }

  return (
    <div className="relative w-full py-24 sm:px-5 md:px-48 bg-gradient-to-r from-black via-blue-900 to-black text-white">
      <Link
        to="/"
        className="absolute left-48 px-5 py-1 rounded text-3xl bg-yellow-200 text-white font-black dark:text-gray-900"
      >
        <GrLinkPrevious />
      </Link>
      {/* ✅ Title */}
      <h1
        className="text-3xl underline text-center mb-10 font-bold"
        style={{
          background: "linear-gradient(90deg, #00FF00, #FFFF00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {data?.title || "Untitled Project"}
      </h1>

      {/* ✅ Overview */}
      <h2 className="text-white font-semibold text-3xl">Overview:</h2>
      <p className="my-5">{data?.overview || "No overview available."}</p>

      {/* ✅ Technologies */}
      <h2 className="text-white font-semibold text-3xl mt-12 mb-2">
        Technologies:
      </h2>
      <p>
        {Array.isArray(data?.technologies) && data.technologies.length > 0
          ? data.technologies.join(", ")
          : "No technologies listed."}
      </p>

      {/* ✅ Links */}
      <h2 className="text-white font-semibold text-3xl mt-5 mb-2">Links:</h2>

      {Array.isArray(data?.links) && data.links.length > 0 ? (
        data.links.map((link, i) => (
          <button
            key={i}
            className="flex"
            onClick={() => handleToLiveLink(link?.url)}
          >
            <p className="my-3 text-blue-600 font-bold text-lg break-all">
              {link?.label || "Project Link"}:{" "}
              <span className="font-medium">{link?.url}</span>
            </p>
          </button>
        ))
      ) : (
        <p className="text-gray-400">No links available.</p>
      )}
      {/* ✅ Key Features */}
      <h2 className="text-white mt-5 font-semibold text-3xl">Key Features:</h2>

      {Array.isArray(data?.categories) && data.categories.length > 0 ? (
        data.categories.map((category, index) => (
          <div key={index}>
            {/* ✅ Serial Number Added Here */}
            <h3 className="text-lime-300 mt-6 font-semibold text-xl underline">
              {index + 1}. {category?.title || "Feature"}:
            </h3>

            {/* ✅ Descriptions */}
            <div className="text-base font-medium">
              {Array.isArray(category?.description) &&
                category.description.length > 0 ? (
                category.description.map((desc, i) => (
                  <p className="ml-5" key={i}>
                    {index + 1}.{i + 1} {desc}
                  </p>
                ))
              ) : (
                <p className="ml-5 text-gray-400">No description available.</p>
              )}
            </div>

            {/* ✅ Images */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 py-5">
              {Array.isArray(category?.images) && category.images.length > 0 ? (
                category.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={category?.title || "Project Image"}
                    className="cursor-pointer rounded-lg h-32 sm:h-36 md:h-44 lg:h-64 w-auto object-cover"
                    onClick={() => openImageModal(img)}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                ))
              ) : (
                <p className="text-gray-400"></p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 mt-5">No features available.</p>
      )}




      {/* ✅ Modal */}
      {isModalOpen && selectedImage && (
        <ImageModal
          imgSrc={selectedImage}
          alt="Project Image"
          onClose={closeImageModal}
        />
      )}
    </div>
  );
};

export default DetailsPageFormate;
