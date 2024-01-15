import React, { useState } from 'react';
import img1 from "../assets/zuss-chat/chat1.jpg"
import img2 from "../assets/Translator/translator-3.jpg"
import img3 from "../assets/Detect/detect-1.jpg"
import ImageModal from './ImageModal';

const OpenAIProjects = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const OpenAIProject = [
        {
            image: img1,
            start: "22 March 2023",
            end: "28 March 2023",
            name: "Zuss GPT",
            link: "https://zuss-gpt.netlify.app/",
            details: "This is a website similar to Chat GPT, where anyone can easily find answers to their questions. Users can search for information, and the site will provide answers based on the questions asked. OpenAI's API powers this platform, and it's built using technologies such as React.js, Tailwind CSS, Node.js, and Express.js."
        },
        {
            image: img2,
            start: "30 March 2023",
            end: "10 April 2023",
            name: "Zuss Translator",
            link: "https://zuss-translator.netlify.app/",
            details: "This is a small-scale translator web application. Here, anyone can translate any language into English or obtain translations for various languages. I've incorporated the OpenAI API to develop this translation application. Additionally, users have the option to copy the translated sentences. The technologies I've employed include React.js, Tailwind CSS, Node.js, Express.js, among others."

        },
        {
            image: img3,
            start: "12 April 2023",
            end: "12 April 2023",
            name: "Zuss Detect",
            link: "https://zuss-detect-platform.netlify.app/",
            details: "This is a website designed to accurately detect and format addresses in the correct sequence. Users can easily copy different parts of the address. If someone inputs an address out of sequence or with errors, the website will correct it and provide the address in the proper order. To create this site, I've utilized the OpenAI API, along with technologies like React.js, Tailwind CSS, Node.js, and Express.js"

        }
    ]

    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    const handleToLiveLink = (link) => {
        window.open(link, '_blank');
    };


    const closeImageModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 pt-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    OpenAI Related Projects
                </p>
                <p className="py-6">Check out some of my projects related to OpenAI right here.</p>
            </div>

            {
                OpenAIProject && OpenAIProject.length > 0 && OpenAIProject?.map((project, index) => {
                    return <article key={index} class="flex bg-white transition hover:shadow-xl mb-8">
                        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                            <time
                                datetime="2022-10-10"
                                class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                            >
                                <span>{project?.start}</span>
                                <span class="w-px flex-1 bg-gray-900/10"></span>
                                <span>{project?.end}</span>
                            </time>
                        </div>

                        <div class="hidden sm:block sm:basis-56">
                            <img
                                alt="Guitar"
                                src={project?.image}
                                className="aspect-square h-full w-full cursor-pointer"
                                onClick={() => openImageModal(project?.image)} // Open the modal when the image is clicked
                            />

                            {isModalOpen && (
                                <ImageModal
                                    imgSrc={selectedImage}
                                    alt="Guitar"
                                    onClose={closeImageModal} // Close the modal when the "Close" button is clicked
                                />
                            )}
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 class="font-bold uppercase text-gray-900">
                                        {project?.name}
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                    {project?.details}
                                </p>
                            </div>

                            <div class="sm:flex sm:items-end sm:justify-between">
                                <button
                                    href="#"
                                    class="block bg-green-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                    onClick={() => handleToLiveLink(project?.link)}
                                >
                                    Live Link
                                </button>
                                <button
                                    href="#"
                                    class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                    onClick={() => openImageModal(project?.image)}
                                >
                                    Full Image
                                </button>
                            </div>
                        </div>
                    </article>
                })
            }


        </div>
    );
};

export default OpenAIProjects;