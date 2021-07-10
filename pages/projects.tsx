import { useState } from "react";
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

		allProjects.filter((project) => project.category.includes(category));
	};

	return (
		<div className="px-5 py-2 overflow-scroll" style={{ height: "65vh" }}>
			<ProjectsNavbar />
			<div className="relative grid grid-cols-12 gap-4 my-3">
				{allProjects.map((project, id) => (
					<div
						key={id}
						className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
					>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
