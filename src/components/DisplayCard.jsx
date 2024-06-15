import styles from "../styles/DisplayCard.module.css";
import PropTypes from "prop-types";

export default function DisplayCard(props) {
	const { data, type } = props;

	return (
		<>
			{data.map((item, idx) => {
				return (
					<section
						className={`${styles.skillsWrapper} marginBottomSectionMedium `}
						key={idx}
					>
						<h3
							className={`${styles.skillType} fontDisplay marginBottomSectionMedium `}
						>
							{item.type.title}
						</h3>

						<section className={`${styles.skillCardSection} flex`}>
							{item.type.cred.map((item, index) => (
								<div
									key={index}
									className={`${styles.skillCardWrapper} flex`}
									style={{
										flexBasis: type === 1 ? "25%" : "50%",
									}}
								>
									<div
										className={`${styles.skillCard} flex paddingBodyInline`}
										style={{
											height:
												type === 1 ? "140px" : "80px",
											width: type === 1 ? "140px" : "96%",
											flexDirection:
												type === 1 ? "column" : "row",
											justifyContent: "flex-start",
										}}
									>
										<div
											className={`${styles.skillIcon} flex column`}
											style={{
												flexBasis:
													type === 1 ? "80%" : "25%",
											}}
										>
											<img
												src={item.icon}
												alt={item.credName}
											/>
										</div>
										<p
											className={`${styles.skillTitle} fontBody center`}
										>
											{item.credName}
										</p>
									</div>
								</div>
							))}
						</section>
					</section>
				);
			})}
		</>
	);
}

DisplayCard.propTypes = {
	data: PropTypes.any,
	type: PropTypes.number,
};
