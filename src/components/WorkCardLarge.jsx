import styles from "../styles/WorkCardLarge.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function WorkCardLarge(props) {
	const { posts } = props;
	return (
		<>
			<article
				className={`${styles.workCardLargeWrapper} flex paddingBodyInline marginBottomSection`}
			>
				{posts
					.filter((item) => {
						return item.tags.includes("large");
					})
					.map((item, idx) => {
						return (
							<div
								key={idx}
								className={`${styles.workCardLarge} fontBody`}
							>
								<img
									className={`${styles.workCardLargeImg}`}
									src={item.img}
									alt=""
								/>
								<div className={`${styles.cardContentWrapper}`}>
									<div className={`${styles.cardContent}`}>
										<p className={`${styles.cardText}`}>
											{item.description}
										</p>
										<div
											className={`${styles.cardButtonsWrapper}`}
										>
											<ul
												className={`${styles.cardButtons} flex`}
											>
												<li>
													<Link to={"sdf"}>
														<svg
															className={`${styles.svgGithub} center`}
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 25 25"
															fill="#686868"
														>
															<path d="M7.58526 2.89307C8.33623 3.14746 9.05064 3.49912 9.71026 3.93907C10.6418 3.70098 11.5997 3.58137 12.5613 3.58307C13.5543 3.58307 14.5123 3.70707 15.4103 3.93807C16.0696 3.49855 16.7837 3.14723 17.5343 2.89307C18.2313 2.65607 19.2243 2.27207 19.8143 2.92507C20.2143 3.36907 20.3143 4.11307 20.3853 4.68107C20.4653 5.31507 20.4843 6.14107 20.2743 6.96107C21.0773 7.99807 21.5613 9.23507 21.5613 10.5831C21.5613 12.6251 20.4553 14.3981 18.8183 15.6261C18.0304 16.2096 17.1567 16.6671 16.2283 16.9821C16.4423 17.4721 16.5613 18.0141 16.5613 18.5831V21.5831C16.5613 21.8483 16.4559 22.1026 16.2684 22.2902C16.0808 22.4777 15.8265 22.5831 15.5613 22.5831H9.56126C9.29605 22.5831 9.04169 22.4777 8.85416 22.2902C8.66662 22.1026 8.56126 21.8483 8.56126 21.5831V20.5921C7.60626 20.7091 6.80526 20.6051 6.12426 20.3161C5.41226 20.0141 4.91626 19.5461 4.54326 19.0981C4.18926 18.6741 3.80326 17.7181 3.24526 17.5321C3.12064 17.4906 3.00541 17.4249 2.90615 17.3389C2.80689 17.2529 2.72555 17.1481 2.66677 17.0307C2.54806 16.7934 2.52846 16.5188 2.61226 16.2671C2.69607 16.0154 2.87643 15.8073 3.11367 15.6886C3.3509 15.5699 3.62557 15.5503 3.87726 15.6341C4.54326 15.8561 4.97726 16.3361 5.27426 16.7221C5.75426 17.3421 6.14426 18.1521 6.90426 18.4751C7.21726 18.6081 7.67626 18.6951 8.39426 18.5971L8.56126 18.5631C8.56317 18.0189 8.6765 17.4808 8.89426 16.9821C7.96585 16.6671 7.09207 16.2096 6.30426 15.6261C4.66726 14.3981 3.56126 12.6261 3.56126 10.5831C3.56126 9.23707 4.04426 8.00107 4.84526 6.96507C4.63526 6.14507 4.65326 5.31707 4.73326 4.68207L4.73826 4.64407C4.81126 4.06207 4.89626 3.37707 5.30426 2.92507C5.89426 2.27207 6.88826 2.65707 7.58426 2.89407L7.58526 2.89307Z" />
														</svg>
													</Link>
												</li>
												<li>
													<a
														href={item.url}
														target="_blank"
														rel="noreferrer"
													>
														visit website
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div
										className={`${styles.cardViewProjectBtn} center fontBody`}
									>
										{/* add visit url */}
										view project details
									</div>
								</div>
							</div>
						);
					})}
			</article>
		</>
	);
}

WorkCardLarge.propTypes = {
	posts: PropTypes.any,
};
