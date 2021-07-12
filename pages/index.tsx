// import { GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { fadeInUP, routerAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
	return (
		<motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routerAnimation} initial="initial" animate="animate">
			<h5 className="my-3 font-medium">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industries standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</h5>
			<div
				className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
				style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
			>
				<h6 className="my-3 text-xl font-semibold tracking-wide">
					What I Offer
				</h6>

				<motion.div
					className="grid gap-6 my-3 md:grid-cols-2"
					variants={stagger}
					initial="initial"
					animate="animate"
				>
					{services.map((service: any, index) => (
						<motion.div
							variants={fadeInUP}
							key={index}
							className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
						>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default index;

// export const getServerSideProps = async (
// 	context: GetServerSidePropsContext
// ) => {
// 	const res = await fetch("http://localhost:3000/api/services");
// 	const data = await res.json();

// 	console.log("server", services);

// 	return {
// 		props: {
// 			services: data.services,
// 		},
// 	};
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
// 	const res = await fetch("http://localhost:3000/api/services");
// 	const data = await res.json();

// 	return {
// 		props: {
// 			services: data.services,
// 		},
// 	};
// };
