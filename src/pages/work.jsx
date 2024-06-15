import NavBar from "../components/NavBar.jsx";
import WorkCardLarge from "../components/WorkCardLarge.jsx";
import WorkCardSmall from "../components/WorkCardSmall.jsx";
import Footer from "../components/Footer.jsx";
import styles from "../styles/work.module.css";
import data from "../data.json";
import CTA from "../components/CTA.jsx";

export default function Work() {
	return (
		<>
			<NavBar />
			<main>
				<header>
					<h1
						className={`${styles.headingWork} h2Center fontDisplay marginBottomSectionMedium marginTopSectionMedium paddingBodyInline`}
					>
						my precious work
					</h1>
				</header>
				<section className={`${styles.work} flex column`}>
					<WorkCardLarge posts={data.projects} />

					<WorkCardSmall
						posts={data.projects}
						sideProjects={false}
					/>
				</section>

				<h2
					className={`${styles.headingSideProject} paddingBodyInline  h2Left fontDisplay marginBottomSectionMedium marginTopSectionMedium`}
				>
					side projects
				</h2>
				<section
					className={`${styles.sideProjects}  fontDisplay paddingBodyInline  marginTopSectionMedium flex column`}
				>
					<WorkCardSmall
						posts={data.sideProjects}
						numToShow={2}
						sideProjects={true}
					/>
				</section>
				<CTA ctaURL={"/sideProjects"}>view all</CTA>
			</main>
			<Footer />
		</>
	);
}
