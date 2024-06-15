import NavBar from "../components/NavBar.jsx";
import styles from "../styles/home.module.css";
import data from "../data.json";
import Skills from "../components/Skills.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";
import Featured from "../components/Featured.jsx";
import CTA from "../components/CTA.jsx";
import { useEffect, useState } from "react";

// 3d SPLINE

export default function Home() {
	const [windowWidth, setWindowWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<NavBar />
			{/* HERO */}
			<section className={`${styles.hero} `}>
				<div className={`${styles.heroTop} paddingBodyInline`}>
					<spline-viewer
						loading-anim-type="spinner-big-dark"
						url="https://prod.spline.design/CqeI6y60MGciGfDD/scene.splinecode"
					></spline-viewer>
				</div>

				<div
					className={`${styles.heroBottom} flex column paddingBodyInline`}
				>
					<h1
						className={`${styles.heroHeading} flex visually-hidden`}
					>
						{`Hi, I'm Hemant Rai, Front-End Web Developer.`}
					</h1>
					<div className={`${styles.heroHeadingImg} flex`}>
						{windowWidth < 762 ? (
							<svg
								viewBox="0 0 545 208"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M68.928 79H50.88V14.68H68.928V79ZM20.928 79H2.88V14.68H20.928V79ZM60.192 54.808H7.584V38.584H60.192V54.808ZM104.741 79H86.6925V14.68H104.741V79ZM143.812 79H91.5885V62.776H143.812V79ZM142.373 54.712H91.5885V38.584H142.373V54.712ZM143.812 30.904H91.5885V14.68H143.812V30.904ZM178.991 79H160.943V14.68H185.423L197.231 41.368L203.567 57.976H204.815L210.863 41.368L222.095 14.68H246.575V79H228.527V52.408L229.199 41.656H227.951L224.303 52.408L214.703 75.16H192.815L183.215 52.408L179.567 41.656H178.319L178.991 52.408V79ZM280.765 79H260.509L288.253 14.68H314.077L341.917 79H321.181L305.917 41.848L301.693 31H300.445L296.317 41.848L280.765 79ZM324.349 67.096H276.925V50.872H324.349V67.096ZM373.897 79H355.849V14.68H375.049L392.905 38.776L402.313 53.56H403.561L402.697 39.544V14.68H420.745V79H401.545L382.537 54.232L374.377 41.56H373.129L373.897 53.848V79ZM477.896 79H459.848V14.68H477.896V79ZM500.552 30.904H437.096V14.68H500.552V30.904Z"
									fill="#4D4D4D"
								/>
								<path
									d="M541.304 79H517.88V60.568H541.304V79Z"
									fill="#4D4D4D"
								/>
								<path
									d="M195.428 191H177.38V126.68H214.916C220.612 126.68 225.38 127.448 229.22 128.984C233.06 130.52 235.94 132.76 237.86 135.704C239.844 138.584 240.836 142.136 240.836 146.36C240.836 149.752 240.228 152.696 239.012 155.192C237.86 157.624 236.004 159.608 233.444 161.144C230.884 162.616 227.556 163.608 223.46 164.12V165.08C226.788 165.912 229.156 167.16 230.564 168.824C232.036 170.424 233.38 172.44 234.596 174.872L242.564 191H221.732L214.052 175.256C213.284 173.656 212.484 172.408 211.652 171.512C210.82 170.616 209.732 170.008 208.388 169.688C207.044 169.304 205.188 169.112 202.82 169.112H195.428V191ZM195.428 142.904V155.672H214.724C217.348 155.672 219.204 155.288 220.292 154.52C221.38 153.752 221.924 151.992 221.924 149.24C221.924 146.68 221.38 144.984 220.292 144.152C219.204 143.32 217.348 142.904 214.724 142.904H195.428ZM273.859 191H253.602L281.347 126.68H307.171L335.011 191H314.275L299.011 153.848L294.787 143H293.539L289.411 153.848L273.859 191ZM317.443 179.096H270.019V162.872H317.443V179.096ZM366.991 191H348.943V126.68H366.991V191Z"
									fill="#4D4D4D"
								/>
							</svg>
						) : (
							<svg
								viewBox="0 0 1715 200"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M143.6 164H106V30H143.6V164ZM43.6 164H6V30H43.6V164ZM125.4 113.6H15.8V79.8H125.4V113.6ZM218.209 164H180.609V30H218.209V164ZM299.609 164H190.809V130.2H299.609V164ZM296.609 113.4H190.809V79.8H296.609V113.4ZM299.609 63.8H190.809V30H299.609V63.8ZM372.897 164H335.297V30H386.297L410.897 85.6L424.097 120.2H426.697L439.297 85.6L462.697 30H513.697V164H476.097V108.6L477.497 86.2H474.897L467.297 108.6L447.297 156H401.697L381.697 108.6L374.097 86.2H371.497L372.897 108.6V164ZM584.927 164H542.727L600.527 30H654.327L712.327 164H669.127L637.327 86.6L628.527 64H625.927L617.327 86.6L584.927 164ZM675.727 139.2H576.927V105.4H675.727V139.2ZM778.952 164H741.352V30H781.352L818.552 80.2L838.152 111H840.752L838.952 81.8V30H876.552V164H836.552L796.952 112.4L779.952 86H777.352L778.952 111.6V164ZM995.617 164H958.017V30H995.617V164ZM1042.82 63.8H910.617V30H1042.82V63.8Z"
									fill="#4D4D4D"
								/>
								<path
									d="M1200.8 164H1152V125.6H1200.8V164Z"
									fill="#4D4D4D"
								/>
								<path
									d="M1350.6 164H1313V30H1391.2C1403.07 30 1413 31.6 1421 34.8C1429 38 1435 42.6667 1439 48.8C1443.13 54.8 1445.2 62.2 1445.2 71C1445.2 78.0667 1443.93 84.2 1441.4 89.4C1439 94.4667 1435.13 98.6 1429.8 101.8C1424.47 104.867 1417.53 106.933 1409 108V110C1415.93 111.733 1420.87 114.333 1423.8 117.8C1426.87 121.133 1429.67 125.333 1432.2 130.4L1448.8 164H1405.4L1389.4 131.2C1387.8 127.867 1386.13 125.267 1384.4 123.4C1382.67 121.533 1380.4 120.267 1377.6 119.6C1374.8 118.8 1370.93 118.4 1366 118.4H1350.6V164ZM1350.6 63.8V90.4H1390.8C1396.27 90.4 1400.13 89.6 1402.4 88C1404.67 86.4 1405.8 82.7333 1405.8 77C1405.8 71.6667 1404.67 68.1333 1402.4 66.4C1400.13 64.6667 1396.27 63.8 1390.8 63.8H1350.6ZM1514 164H1471.8L1529.6 30H1583.4L1641.4 164H1598.2L1566.4 86.6L1557.6 64H1555L1546.4 86.6L1514 164ZM1604.8 139.2H1506V105.4H1604.8V139.2ZM1708.02 164H1670.42V30H1708.02V164Z"
									fill="#4D4D4D"
								/>
							</svg>
						)}
					</div>
				</div>
			</section>

			{/* FEATURED WORK */}
			<section
				className={`${styles.featured} paddingBodyInline marginBottomSection`}
			>
				<Featured />
				<CTA ctaURL={"/work"}>view all</CTA>
			</section>

			{/* SKILLS */}
			<section
				className={`${styles.skills} paddingBodyInline marginBottomSection `}
			>
				<h2
					className={` ${styles.skillsHeading} homeHeading h2Right fontDisplay`}
				>
					skills
				</h2>
				<Skills
					data={data.skills}
					type={1}
				/>
			</section>

			{/* CONTACT  */}
			<section
				className={`${styles.contact} paddingBodyInline marginBottomSection`}
			>
				<ContactSection />
			</section>

			{/* FOOTER */}
			<section className={`${styles.footer}`}>
				<Footer />
			</section>
		</>
	);
}
