import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUP, stagger } from "../animations";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
	project: {
		name,
		description,
		image_path,
		category,
		deployed_url,
		github_url,
		key_techs,
	},
}) => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<div>
			<Image
				src={image_path}
				alt={name}
				className="cursor-pointer"
				onClick={() => setShowDetails(true)}
				width="300"
				height="150"
				layout="responsive"
			/>
			<p className="my-2 text-center">{name}</p>
			{showDetails && (
				<div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
					<motion.div variants={stagger} initial="initial" animate="animate">
						<motion.div variants={fadeInUP}>
							<Image
								src={image_path}
								alt={name}
								width="300"
								height="150"
								layout="responsive"
							/>
						</motion.div>
						<motion.div
							className="flex justify-center my-4 space-x-3"
							variants={fadeInUP}
						>
							<a
								href={github_url}
								className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
							>
								<AiFillGithub /> <span>Github</span>
							</a>
							<a
								href={deployed_url}
								className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
							>
								<AiFillProject /> <span>Project</span>
							</a>
						</motion.div>
					</motion.div>
					<motion.div variants={stagger} initial="initial" animate="animate">
						<motion.h2
							variants={fadeInUP}
							className="mb-3 text-xl font-medium md:text-2xl"
						>
							{name}
						</motion.h2>
						<motion.h3 variants={fadeInUP} className="mb-3 font-medium">
							{description}
						</motion.h3>
						<motion.div
							variants={fadeInUP}
							className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
						>
							{key_techs.map((tech, index) => (
								<span
									key={index}
									className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
								>
									{tech}
								</span>
							))}
						</motion.div>
					</motion.div>

					<button
						onClick={() => setShowDetails(false)}
						className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
					>
						<MdClose size={30} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
