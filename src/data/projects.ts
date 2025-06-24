const projectsImages = {
  jocasta:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749613374/og_qym8nv.png",
  rak: "https://res.cloudinary.com/pz-public-assets/image/upload/v1749618481/rak_rq1rqn.jpg",
  statStream:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749619547/statstream_se4ae3.jpg",
  sangeet:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749620225/sangeet_vii34o.jpg",
  stockViz:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749620593/stockviz_ulaebv.png",
  buildJournal:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749621019/build-journal_nk0mvy.png",
  ssoService:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749620712/sso_k6snpp.png",
  eduNotify:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749620810/edunotify_t2uqyv.png",
};

const projects = [
  {
    image: projectsImages.jocasta,
    title: "Jocasta",
    description:
      "A personal AI assistant to interact with your notes, PDFs, and learning materials — like chatting with your second brain.",
    url: "https://jocasta.vercel.app/",
    githubLink: "https://github.com/PriyanshuPz/jocasta",
  },
  {
    image: projectsImages.rak,
    title: "Rak",
    description:
      "Rak is a modern platform that leverages the InterPlanetary File System (IPFS) to provide secure, permanent, and tamper-proof storage for your certificates and achievements.",
    url: "https://rak-wine.vercel.app/",
    githubLink: "https://github.com/PriyanshuPz/rak",
  },
  {
    image: projectsImages.statStream,
    title: "StatStream",
    description:
      "a self-hosted analytics tool that tracks essential metrics like page views, user sessions, referrers, and more. With built-in integration to Discord, it allows you to receive real-time updates about your website's activity directly in your Discord channels.",
    githubLink: "https://github.com/DiyBuilds/StatStream",
  },
  {
    image: projectsImages.sangeet,
    title: "Sangeet",
    description:
      "Sangeet Music Player for Windows, an open-source desktop application that allows you to enjoy your favorite music seamlessly.",
    githubLink: "https://github.com/PriyanshuPz/sangeet",
  },
  {
    image: projectsImages.stockViz,
    title: "StockViz",
    description:
      "Our service provides a simple code snippet that you can add to your website to display a real-time stock chart powered by Fluvio.io's high-performance data streaming.",
    url: "https://stockviz.vercel.app/",
    githubLink: "https://github.com/DIYBuilds/stock-charts",
  },
  {
    image: projectsImages.buildJournal,
    title: "Build Journal",
    description:
      "a web application that helps developers document their project ideas, development progress, and feature additions, all in one place. It also allows generating markdown project logs, providing documentation, and tracking a project from start to end.",
    url: "https://build-journal.vercel.app/",
    githubLink: "https://github.com/DIYBuilds/build-journal",
  },
  {
    image: projectsImages.ssoService,
    title: "SSO Service",
    description:
      "The SSO Service is a robust Single Sign-On (SSO) solution designed to streamline authentication and authorization across multiple applications. Users can authenticate once and seamlessly access various applications without the need for repeated login.",
    githubLink: "https://github.com/DIYBuilds/sso-service",
  },
  {
    image: projectsImages.eduNotify,
    title: "EduNotify",
    description:
      "a web application designed to provide a notice board feature for educational institutions, allowing users to manage notices with role-based access control. The application leverages technologies such as Permit.io, Clerk Authentication, Next.js, Tailwind CSS, and Shadcn-UI to deliver a seamless and intuitive user experience. ",
    githubLink: "https://github.com/PriyanshuPz/edunotify",
  },
];

export default projects;
