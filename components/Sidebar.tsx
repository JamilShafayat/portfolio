import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

function Sidebar() {
	const { theme, setTheme } = useTheme();
	const changeTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<>
			<Image
				src="https://lh3.googleusercontent.com/a-/AOh14GgsHg_KetTjfrUR5fh_cX7K1csamPOXJane_O0KhA=s288-p-rw-no"
				alt="user avatar"
				className="mx-auto rounded-full"
				width="128px"
				height="128px"
				layout="intrinsic"
				quality="100"
			/>
			<h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
				<span className="text-green">Jamil </span>
				Shafayat
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
				Software Engineer
			</p>
			<a
				className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
				href=""
				download="name"
			>
				<GiTie className="w-6 h-6" /> Download Resume
			</a>
			<div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
				<a href="">
					<AiFillGithub className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" />
				</a>
				<a href="">
					<AiFillYoutube className="w-8 h-8 cursor-pointer" />
				</a>
			</div>
			{/* address */}
			<div
				className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
				style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
			>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation />
					<span>Dhaka, Bangladesh</span>
				</div>
				<p className="my-2">code.xamil@gamil.com</p>
				<p className="my-2">01881965587</p>
			</div>
			{/* Email Button */}
			<button
				className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500"
				onClick={() => window.open("mailto:code.xamil@gamil.com")}
			>
				Email Me
			</button>
			<button
				onClick={changeTheme}
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
			>
				Toggle Theme
			</button>
		</>
	);
}

export default Sidebar;
