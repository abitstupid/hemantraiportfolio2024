import NavBar from "../components/NavBar.jsx";
import WorkCardSmall from "../components/WorkCardSmall.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/work.module.css";
import data from "../data.json";

export default function SideProjects() {
	return (
		<>
			<NavBar />
			<main>
				<header>
					<h1
						className={`${styles.headingWork} h2Center fontDisplay marginBottomSectionMedium marginTopSectionMedium`}
					>
						side projects
					</h1>
				</header>
				<section className={`${styles.work} flex column`}>
					<WorkCardSmall
						posts={data.sideProjects}
						sideProjects={true}
					/>
				</section>
			</main>
			<Footer />
		</>
	);
}
