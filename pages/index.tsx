import { GetStaticPropsContext } from "next";
import { services } from "../data";

function index({ services }) {
	console.log("client", services);

	return (
		<div>
			<h1>Hello World</h1>
		</div>
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const res = await fetch("http://localhost:3000/api/services");
	const data = await res.json();

	console.log("server", services);

	return {
		props: {
			services: data.services,
		},
	};
};
