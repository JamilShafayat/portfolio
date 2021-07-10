import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{ value: Category | "all" }> = ({
	value,
}) => {
	return <li>{value}</li>;
};

const ProjectsNavbar = () => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-scroll list-none">
			<NavItem value="all" />
			<NavItem value="react" />
			<NavItem value="laravel" />
			<NavItem value="node" />
			<NavItem value="django" />
		</div>
	);
};

export default ProjectsNavbar;
