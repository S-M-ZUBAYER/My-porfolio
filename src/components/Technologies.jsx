import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import MongoDB from "../assets/mongoDB.png";
import strip from "../assets/strip.png";
import MySQL from "../assets/Mysql.jpeg";
import Mongoose from "../assets/Mongoose.png";
import jwt from "../assets/jwt.png";
import nodejs from "../assets/node.png";
import redux from "../assets/redux.png";
import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.png";
import openai from "../assets/openai.jpeg";
import Typescript from "../assets/Typescript.png";


const Technologies = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React JS",
            style: "shadow-green-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-blue-400",
        },
        {
            id: 7,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },
        {
            id: 8,
            src: redux,
            title: "Redux",
            style: "shadow-purple-400",
        },
        {
            id: 8,
            src: openai,
            title: "Open AI",
            style: "shadow-purple-400",
        },
        {
            id: 9,
            src: nodejs,
            title: "Node JS",
            style: "shadow-green-400",
        },
        {
            id: 10,
            src: express,
            title: "Express JS",
            style: "shadow-white",
        },
        {
            id: 11,
            src: Typescript,
            title: "Typescript",
            style: "shadow-blue-400",
        },
        {
            id: 12,
            src: firebase,
            title: "firebase",
            style: "shadow-yellow-400",
        },
        {
            id: 13,
            src: jwt,
            title: "JWT Token",
            style: "shadow-pink-400",
        },
        {
            id: 14,
            src: strip,
            title: "Strip Payment",
            style: "shadow-blue-400",
        },
        {
            id: 15,
            src: MySQL,
            title: "MySql",
            style: "shadow-orange-400",
        },
        {
            id: 16,
            src: Mongoose,
            title: "Mongoose",
            style: "shadow-red-400",
        },
        {
            id: 17,
            src: MongoDB,
            title: "MongoDB",
            style: "shadow-gray-400",
        },
        {
            id: 18,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div
            name="expertise"
            className=" bg-gradient-to-r from-black via-blue-900 to-black w-full  pt-48"
        >
            <div className="max-w-screen-lg mx-auto py-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Technologies
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                name="Technologies"
                className=" bg-gradient-to-r from-black via-blue-900 to-black w-full  pt-48"
            >
                {/* <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div>
                        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                            Experience
                        </p>
                        <p className="py-6">These are the experiences I've gathered</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Technologies;
