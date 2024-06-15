import { Routes, Route } from "react-router-dom";

import "./global.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";
import ScrollToTop from "./components/ScrollToTop";
import Work from "./pages/work";
import SideProjects from "./pages/sideProjects";
import About from "./pages/about";

export default function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route
					path={"/index"}
					element={<Home />}
				/>
				<Route
					path={"/"}
					element={<Home />}
				/>
				<Route
					path={"/work"}
					element={<Work />}
				/>
				<Route
					path={"/about"}
					element={<About />}
				/>
				<Route
					path={"/contact"}
					element={<Contact />}
				/>
				<Route
					path={"/sideProjects"}
					element={<SideProjects />}
				/>
				<Route
					path={"*"}
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
}
