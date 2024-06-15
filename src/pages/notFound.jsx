import styles from "../styles/notFound.module.css";

export default function NotFound() {
	return (
		<>
			<div className={`${styles.divContainer}`}>
				<p>{`page not available.`}</p>
				<p>{`Disappointed? that's what you get for expecting things.`}</p>
			</div>
		</>
	);
}
