import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="grid grid-cols-12 gap-4 px-3 my-10 lg:px-40 md:px-32 sm:px-20">
			<div className="col-span-12 p-4 text-center bg-white lg:col-span-4 rounded-2xl">
				<Sidebar />
			</div>
			<div className="flex flex-col col-span-12 bg-white lg:col-span-8 rounded-2xl">
				<Navbar />
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
