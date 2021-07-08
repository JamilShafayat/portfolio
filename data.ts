import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IService, ISkill } from "./type";

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
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "JavaScript",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Python",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Laravel",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Rect",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Next",
		level: "10%",
		Icon: BsCircleFill,
	},
];

export const tools: ISkill[] = [
	{
		name: "Postman",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Swagger",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Python",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Laravel",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Rect",
		level: "10%",
		Icon: BsCircleFill,
	},
	{
		name: "Next",
		level: "10%",
		Icon: BsCircleFill,
	},
];
