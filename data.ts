import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
	{
		Icon: RiComputerLine,
		title: "Frontend Development",
		about:
			"I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
	},
	{
		Icon: FaServer,
		title: "Backend  Development",
		about:
			"handle database, server, api using <b>Express </b> & other popular frameworks",
	},
	{
		Icon: AiOutlineApi,
		title: "API Development",
		about:
			"I can develop robust  REST API using <b>django-rest-api</b> & <b>Node API</b> ",
	},
	{
		Icon: MdDeveloperMode,
		title: "Competitive Coder",
		about: "a daily problem solver in <b>HackerRank</b> and <b>Leet Code</b> ",
	},
	{
		Icon: AiOutlineAntDesign,
		title: "UI/UX designer",
		about:
			"stunning user interface designer using <b>Figma</b> and <b>Framer</b> ",
	},
	{
		Icon: RiComputerLine,
		title: "Whatever",
		about:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
	},
];

export const languages: ISkill[] = [
	{
		name: "PHP",
		level: "50%",
		Icon: BsCircleFill,
	},
	{
		name: "JavaScript",
		level: "55%",
		Icon: BsCircleFill,
	},
	{
		name: "Python",
		level: "40%",
		Icon: BsCircleFill,
	},
	{
		name: "Laravel",
		level: "70%",
		Icon: BsCircleFill,
	},
	{
		name: "Rect",
		level: "60%",
		Icon: BsCircleFill,
	},
	{
		name: "Next",
		level: "50%",
		Icon: BsCircleFill,
	},
];

export const tools: ISkill[] = [
	{
		name: "Postman",
		level: "50%",
		Icon: BsCircleFill,
	},
	{
		name: "Swagger",
		level: "60%",
		Icon: BsCircleFill,
	},
	{
		name: "Python",
		level: "40%",
		Icon: BsCircleFill,
	},
	{
		name: "Laravel",
		level: "70%",
		Icon: BsCircleFill,
	},
	{
		name: "Rect",
		level: "50%",
		Icon: BsCircleFill,
	},
	{
		name: "Next",
		level: "40%",
		Icon: BsCircleFill,
	},
];

export const allProjects: IProject[] = [
	{
		id: 1,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/store.jpg",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["Javascript", "React.Js", "Node"],
	},
	{
		id: 2,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/algoVisual.png",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
	{
		id: 3,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/covid.jpg",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
	{
		id: 4,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/portfolio.jpg",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
	{
		id: 5,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/newYear.jpg",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["node"],
		key_techs: ["React"],
	},
	{
		id: 6,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/blink.jpg",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
	{
		id: 7,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/chatapp.jpg",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
	{
		id: 8,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/Netflix.png",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
	{
		id: 9,
		name: "Ecommerce",
		description: "This project was bootstrapped with Create React App.",
		image_path: "/images/youtubeClone.png",
		deployed_url: "https://github.com/JamilShafayat/react-ecommerce",
		github_url: "https://github.com/JamilShafayat/react-ecommerce",
		category: ["react"],
		key_techs: ["React"],
	},
];
