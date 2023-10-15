import React from "react";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { FaBuilding } from 'react-icons/fa';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Ourexpertise",
    hash: "#Ourexpertise",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sanjana Emerlad",
    location: "Road#2,P & T Colony,Medipally,Near Uppal Bus Depot,Hyderabad-5003",
    description:
      "Promoters & Builders:M/s. Soumya Engineering Technologies Pvt. Ltd.H.No. 1-19, Road #1, Om Vihar Colony, Medipally Near Uppal Bus Depot, Hyderabad - 500 039.Office Phone: +91 40 6508 5191Contact Details  N. Sadanandam- +91 80088 83379V. Nageswar Rao- +91 90000 91403B.A. Bharath Kumar - +91 9248002329 ",
    icon: React.createElement(FaBuilding),
    date: "2020",
  },
  {
    title: "Sanjana Residency",
    location: "Canara nagar busstop P & T colony",
    description:
      "Promoters & Developers :M/s SANJANA CONSTRUCTIONS Office & Site Address: Plot No. 68, Near Hero Honda Showroom, P & T Colony,Medipally,Ranga Reddy Dist. Hyd - 500 039.Ph: 99488 70191, 9989177781,97044 33222, 98484 43090",
    icon: React.createElement(FaBuilding),
    date: "2021",
  },
  {
    title: "Sanjana amrutha nilayam",
    location: "Om Vihar colony,Medipally Near Uppal Bus Depot,Hyderabad",
    description:
      "Promoters & Builders:M/s. Soumya Engineering Technologies Pvt. Ltd.H.No. 1-19, Om Vihar Colony, Road No. 1Medipally, Near Uppal Bus Depot,Hyderabad - 500 039.Office Phone: +91 40 6508 5191Cell: +91 80088 83379 and 99891 77781",
    icon: React.createElement(FaBuilding),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Suhas residency",
    description: "• Peacefully located at Jodimetla cross roads on Hyderabad - Warangal Highway• Very near to Outer Ring Road at Amojiguda.• For work in companies / destination such as Genpact, Infosys, Raheja Mindspace, Singapore City just with in 1-2 km distance.",
    tags:["ClubHOuse","Intercom System","Electronic survillance"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Harshini Residency",
    description:"Harshini Residency will give you quite the privacy you seek in life. Imagine a community with just four units on each floor and all of themneatly separated from each other. Here comes a community with exclusive2 BHK homes.",
      tags: ["Pwerbackup","Utilities","Painting"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Sanjana Amrutha Nilayam",
    description:"Om Vihar Colony, Medipally Near Uppal Bus Depot, Hyderabad - 500039",
     
      tags: ["WaterSupply","Colouring","Lift"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
"100% Vasthu",
"Exclusisive privacy and superb ventilation",
"Spacious car parking",
"structure",
"Interior",
"Exterior",
"colouring",
"Electrical",
"Water supply"
  
] as const;
