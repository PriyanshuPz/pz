import TailwindCSS from "../../public/svgs/tailwindCSS.svg";
import Github from "../../public/svgs/github.svg";
import NextJS from "../../public/svgs/next.svg";
import Vercel from "../../public/svgs/vercel.svg";
import Node from "../../public/svgs/node.svg";
import Docker from "../../public/svgs/docker.svg";
import TypeScript from "../../public/svgs/typeScript.svg";
import React from "../../public/svgs/react.svg";
import JavaScript from "../../public/svgs/javaScript.svg";
import Python from "../../public/svgs/python.svg";
import HTML from "../../public/svgs/html.svg";
import CSS from "../../public/svgs/css.svg";
import MongoDB from "../../public/svgs/mongodb.svg";
import Flutter from "../../public/svgs/flutter.svg";
import PostgreSQL from "../../public/svgs/postgres.svg";
import Dart from "../../public/svgs/dart.svg";

const skills = [
  // Front-end
  { image: JavaScript, title: "JavaScript" },
  { image: React, title: "React" },
  { image: NextJS, title: "Next.js" },
  { image: Flutter, title: "Flutter" },
  { image: TypeScript, title: "TypeScript" },
  { image: TailwindCSS, title: "Tailwind CSS" },
  { image: HTML, title: "HTML" },

  { image: CSS, title: "CSS" },
  { image: Dart, title: "Dart" },
  { image: Python, title: "Python" },

  // Back-end
  { image: Node, title: "Node.js" },
  { image: MongoDB, title: "MongoDB" },
  { image: PostgreSQL, title: "PostgreSQL" },

  // Others
  { image: Github, title: "Github" },
  { image: Docker, title: "Docker" },
  { image: Vercel, title: "Vercel" },
];

export default skills;
