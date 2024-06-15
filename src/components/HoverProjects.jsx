import styles from "../styles/HoverProjects.module.css";
import data from "../data.json";
import PropTypes from "prop-types";

export default function HoverProjects(props) {
	const { onMseEnt, onMseLev, skillName, skillCardIndex } = props;

	const projects = data.projects;

	return (
		<>
			<section
				className={`${styles.hoverProjectsWrapper}`}
				onMouseEnter={onMseEnt}
				onMouseLeave={onMseLev}
				style={{
					top: "-9rem",
					left: skillCardIndex > 1 ? "2rem" : "unset",
					right: skillCardIndex > 1 ? "unset" : "2rem",
				}}
			>
				<h4 className={` ${styles.hoverProjectsHeading} fontBody`}>
					{`${skillName.toUpperCase()}`} Projects quick links
				</h4>
				<ul className={`${styles.projectListWrapper} fontBody`}>
					{projects
						.filter((item) => item.tags.includes(skillName))
						.map((item, idx) => (
							<li
								className={styles.projectItem}
								key={idx}
							>
								<a
									href={item.url}
									target="blank"
									rel="noreferrer"
								>
									{item.title}
								</a>
							</li>
						))}
				</ul>
			</section>
		</>
	);
}

HoverProjects.propTypes = {
	onMseEnt: PropTypes.any,
	onMseLev: PropTypes.any,
	skillName: PropTypes.any,
	skillCardIndex: PropTypes.any,
};
