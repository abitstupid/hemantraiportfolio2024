import { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import HoverProjects from "./HoverProjects";
import PropTypes from "prop-types";

export default function Skills(props) {
	const { data, type } = props;
	const [windowWidth, setWindowWidth] = useState(null);
	const [isHovered, setIsHovered] = useState(false);
	const [mseLeft, setMseLeft] = useState(false);
	const [hoveredSkill, setHoveredSkill] = useState(null);

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

	function handleCardMseEnt(skill, index) {
		setIsHovered(true);
		setHoveredSkill({ title: skill.title, index: skill.serial });
	}

	useEffect(() => {
		let hoverProjectTimerId;
		const modalHoverCheck = isHovered && !mseLeft;

		if (modalHoverCheck) {
			hoverProjectTimerId = setTimeout(() => {
				setIsHovered(false);
			}, 4000);
		}

		return () => {
			clearTimeout(hoverProjectTimerId);
		};
	}, [isHovered, mseLeft]);

	function handleModalMseEnt() {
		setIsHovered(true);
		setMseLeft(true);
	}

	function handleModalMseLev() {
		setMseLeft(false);
	}

	return (
		<>
			{data.map((item, idx) => {
				return (
					<section
						className={`${styles.skillsWrapper} marginBottomSectionMedium`}
						key={idx}
					>
						<h3
							className={`${styles.skillType} fontDisplay marginBottomSectionMedium paddingBodyInline`}
						>
							{item.type.title}
						</h3>

						<section className={`${styles.skillCardSection} flex`}>
							{item.type.skills.map((skill, index) => (
								<div
									key={index}
									className={`${styles.skillCardWrapper} flex`}
									style={{
										flexBasis:
											type === 1
												? windowWidth < 576
													? "100%"
													: "25%"
												: "50%",
									}}
									// onMouseOver={() =>
									// 	handleCardMseEnt(skill.title)
									// }
								>
									<div
										className={`${styles.skillCard} flex`}
										style={{
											height:
												type === 1 ? "140px" : "80px",
											width:
												type === 1
													? windowWidth < 576
														? "100%"
														: "140px"
													: "96%",
											flexDirection:
												type === 1 ? "column" : "row",
										}}
										onMouseOver={() =>
											handleCardMseEnt(skill)
										}
									>
										<div
											className={`${styles.skillIcon} flex column`}
										>
											<img
												src={skill.icon}
												alt={skill.title}
											/>
										</div>
										<p
											className={`${styles.skillTitle} fontBody`}
										>
											{skill.title}
										</p>
									</div>
								</div>
							))}

							{/* {isHovered && (
								<HoverProjects
									onMseEnt={handleModalMseEnt}
									onMseLev={handleModalMseLev}
									skillName={hoveredSkill.title}
									skillCardIndex={hoveredSkill.index}
								/>
							)} */}
						</section>
					</section>
				);
			})}
		</>
	);
}

Skills.propTypes = {
	data: PropTypes.any,
	type: PropTypes.number,
};
