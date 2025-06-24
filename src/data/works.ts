const worksImages = {
  p8labs:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1750742834/p8labs_logo_xw8qgy.png",
  pelton:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749615382/api_jekeag.png",
  gssoc:
    "https://res.cloudinary.com/pz-public-assets/image/upload/v1749614358/image_bpxzen.png",
  os: "https://res.cloudinary.com/pz-public-assets/image/upload/v1749614895/osi_symbol_100X100_0_nklm5q.png",
};

const works = [
  {
    image: worksImages.p8labs,
    imageBg: "bg-[#fff]",
    companyName: "P8' Labs",
    role: "Founder & Curator",
    startAt: "June 2025",
    endAt: "Present",
  },
  {
    image: worksImages.pelton,
    imageBg: "bg-[#4f46e5]",
    companyName: "Pelton Technologies",
    role: "Full Stack Developer",
    startAt: "Dec 2024",
    endAt: "May 2025",
  },
  {
    image: worksImages.gssoc,
    imageBg: "bg-[#E24A25]",
    companyName: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    startAt: "Oct 2024",
    endAt: "Nov 2024",
  },
  {
    image: worksImages.os,
    imageBg: "bg-[#fff]",
    companyName: "Self Employed",
    role: "Open Source Contributor",
    startAt: "Mar 2023",
    endAt: "Present",
  },
];

export default works;
