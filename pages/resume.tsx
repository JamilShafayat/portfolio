import { motion } from "framer-motion";
import { fadeInUP } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

function resume() {
	return (
		<div className="px-6 py-2">
			<div className="grid gap-6 md:grid-cols-2">
				<motion.div variants={fadeInUP} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div>
						<h5 className="my-3 text-xl font-bold">
							Computer Science Engineering
						</h5>
						<p className="font-semibold">IUBAT(2014-2018)</p>
						<p className="my-3">
							lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
							ipsumlorem ipsumlorem ipsum
						</p>
					</div>
				</motion.div>
				<motion.div variants={fadeInUP} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						<h5 className="my-3 text-xl font-bold">Software Developer</h5>
						<p className="font-semibold">SIMEC System(2020-on)</p>
						<p className="my-3">
							lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
							ipsumlorem ipsumlorem ipsum
						</p>
					</div>
				</motion.div>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
					<div className="my-2">
						{languages.map((language) => (
							<Bar key={language.name} data={language} />
						))}
					</div>
				</div>

				<div>
					<h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
					<div className="my-2">
						{tools.map((tool, i) => (
							<Bar key={i} data={tool} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default resume;
