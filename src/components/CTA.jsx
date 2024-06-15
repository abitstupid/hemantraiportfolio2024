import styles from "../styles/CTA.module.css";
import PropTypes from "prop-types";

export default function CTA(props) {
	const { children, ctaURL } = props;
	return (
		<>
			<a
				href={ctaURL}
				className={`${styles.ctaButtonWrapper} pointer center fontBody marginTopSectionMedium  marginBottomSectionMedium paddingBodyInline`}
			>
				<div className={`${styles.ctaButton} center`}>{children}</div>
			</a>
		</>
	);
}

CTA.propTypes = {
	children: PropTypes.any,
	ctaURL: PropTypes.string,
};
