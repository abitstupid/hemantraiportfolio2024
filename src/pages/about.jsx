import CTA from "../components/CTA";
import NavBar from "../components/NavBar";
import DisplayCard from "../components/DisplayCard";
import styles from "./../styles/about.module.css";
import data from "../data.json";
import Footer from "../components/Footer";

export default function About() {
	const aboutMeImg = "/assets/images/aboutMe.png";
	const aboutMeImgMobile = "/assets/images/aboutMeMobile.png";
	return (
		<>
			<NavBar />

			<header>
				<h1
					className={`${styles.headingAbout} h2Center fontDisplay marginBottomSectionMedium marginTopSectionMedium paddingBodyInline `}
				>
					know me more
				</h1>
			</header>

			<section
				className={`${styles.aboutWrapper} flex paddingBodyInline maxWidth marginBottomSection`}
			>
				<div className={`${styles.aboutMeImgWrapper} flex`}>
					<picture className="flex">
						<source
							media="(max-width: 768px)"
							srcSet={`${aboutMeImgMobile}`}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={`${aboutMeImg}`}
						/>
						<img
							className={`${styles.aboutMeImg}`}
							src={`${aboutMeImg}`}
							alt="Hemant Rai"
						/>
					</picture>
				</div>
				<div className={`${styles.aboutMeContentWrapper}`}>
					<p className={`${styles.aboutName} fontBody`}>
						{`hi, i'm hemant`}
						<span className={`${styles.aboutNameExtend} fontBody`}>
							a front-end developer
						</span>
					</p>
					<div className={`${styles.downloadCvWrapper} flex`}>
						<CTA ctaURL={"dummmy.com"}>download cv</CTA>
					</div>

					<DisplayCard
						data={data.aboutMe}
						type={2}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
}
