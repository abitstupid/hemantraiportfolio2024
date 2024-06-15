import { useState } from "react";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleMail = (e) => {
		setMail(e.target.value);
	};

	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	return (
		<>
			<form
				className={`${styles.contactWrapper} marginSectionBottom paddingInlineBody flex`}
				action="https://formsubmit.co/e6c56413db068338cb5f6a3f7dd5a33a"
				method="POST"
				name="_captcha"
				value="true"
			>
				{/* LEFT */}
				<div className={`${styles.one} ${styles.formSection} fontBody`}>
					<input
						type="text"
						name="name"
						required
						placeholder="name"
						value={name}
						onChange={handleName}
						className={`marginBottomSectionMedium`}
					/>
					<input
						type="email"
						name="email"
						required
						placeholder="e-mail"
						value={mail}
						onChange={handleMail}
						className={`marginBottomSectionMedium`}
					/>
					<textarea
						name="message"
						id="messageTextarea"
						placeholder="message"
						value={message}
						onChange={handleMessage}
					></textarea>
				</div>
				{/* RIGHT */}
				<div
					className={`${styles.two} ${styles.formSection} flex column	`}
				>
					<h2
						className={` ${styles.contactHeading} h2Left fontDisplay `}
					>
						contact
					</h2>
					<div className={`${styles.buttonWrapper} `}>
						<button
							className={`${styles.submitBtn} fontBody pointer`}
							type="submit"
							value="Submit"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
