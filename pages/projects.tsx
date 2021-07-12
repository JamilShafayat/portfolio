import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUP, routerAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectNavbar";
import { allProjects } from "../data";
import { Category } from "../type";

const Projects = () => {
	const [projects, setProjects] = useState(allProjects);
	const [active, setActive] = useState("all");

	const handlerFilterCategory = (category: Category | "all") => {
		if (category === "all") {
			setProjects(allProjects);
			setActive(category);
			return;
		}

		const newArray = allProjects.filter((project) =>
			project.category.includes(category)
		);
		setProjects(newArray);
		setActive(category);
	};

	return (
		<motion.div className="px-5 py-2 overflow-scroll" style={{ height: "65vh" }} variants={routerAnimation} initial="initial" animate="animate">
			<ProjectsNavbar
				handleFilterCategory={handlerFilterCategory}
				active={active}
			/>
			<motion.div
				className="relative grid grid-cols-12 gap-4 my-3"
				variants={stagger}
				initial="initial"
				animate="animate"
			>
				{projects.map((project, id) => (
					<motion.div
						variants={fadeInUP}
						key={id}
						className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Projects;
