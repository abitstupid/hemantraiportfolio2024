import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<footer
				className={`${styles.footerWrapper} paddingBodyInline center`}
			>
				<p className={`${styles.footerName} fontDisplay`}>HEMANT RAI</p>
				<div className={`${styles.displayImg}`}>
					<Link to={"sdf"}>
						<svg
							viewBox="0 0 249 497"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.678711 20.7051V19.288C0.678711 7.95104 8.47284 0.865479 19.8097 0.865479C31.1467 0.865479 38.2322 8.65963 38.2322 20.7051C38.2322 32.042 30.4381 39.1276 19.1012 39.1276C7.76428 39.1276 0.678711 32.042 0.678711 20.7051ZM38.2322 20.7051V19.288C38.2322 7.95104 46.0264 0.865479 57.3633 0.865479C68.7002 0.865479 75.7857 8.65963 75.7857 20.7051C75.7857 32.042 67.9916 39.1276 56.6547 39.1276C45.3178 39.1276 38.2322 32.042 38.2322 20.7051ZM38.2322 57.5501V58.9672C38.2322 70.304 30.4381 77.3896 19.1012 77.3896C7.76428 77.3896 0.678711 69.5955 0.678711 57.5501C0.678711 46.2131 8.47284 39.1276 19.8097 39.1276C31.1467 39.1276 38.2322 46.2131 38.2322 57.5501ZM75.7857 57.5501V58.9672C75.7857 70.304 67.9916 77.3896 56.6547 77.3896C45.3178 77.3896 38.2322 69.5955 38.2322 57.5501C38.2322 46.2131 46.0264 39.1276 57.3633 39.1276C68.7002 39.1276 75.7857 46.2131 75.7857 57.5501ZM38.2322 95.8121V97.2292C38.2322 108.566 30.4381 115.652 19.1012 115.652C7.76428 115.652 0.678711 107.858 0.678711 95.8121C0.678711 84.4752 8.47284 77.3896 19.8097 77.3896C31.1467 77.3896 38.2322 84.4752 38.2322 95.8121ZM75.7857 95.8121V97.2292C75.7857 108.566 67.9916 115.652 56.6547 115.652C45.3178 115.652 38.2322 107.858 38.2322 95.8121C38.2322 84.4752 46.0264 77.3896 57.3633 77.3896C68.7002 77.3896 75.7857 84.4752 75.7857 95.8121ZM38.2322 134.074V134.783C38.2322 146.12 30.4381 153.205 19.1012 153.205C7.76428 153.205 0.678711 145.411 0.678711 134.074C0.678711 122.737 7.76428 115.652 19.8097 115.652C31.1467 115.652 38.2322 122.737 38.2322 134.074ZM75.7857 134.074V134.783C75.7857 146.12 67.9916 153.205 56.6547 153.205C45.3178 153.205 38.2322 145.411 38.2322 134.074C38.2322 122.737 45.3178 115.652 57.3633 115.652C68.7002 115.652 75.7857 122.737 75.7857 134.074ZM38.2322 171.628V173.045C38.2322 184.382 30.4381 191.467 19.1012 191.467C7.76428 191.467 0.678711 183.673 0.678711 171.628C0.678711 160.291 8.47284 153.205 19.8097 153.205C31.1467 153.205 38.2322 160.291 38.2322 171.628ZM75.7857 171.628V173.045C75.7857 184.382 67.9916 191.467 56.6547 191.467C45.3178 191.467 38.2322 183.673 38.2322 171.628C38.2322 160.291 46.0264 153.205 57.3633 153.205C68.7002 153.205 75.7857 160.291 75.7857 171.628ZM38.2322 209.89V211.307C38.2322 222.644 30.4381 229.729 19.1012 229.729C7.76428 229.729 0.678711 221.935 0.678711 209.89C0.678711 198.553 8.47284 191.467 19.8097 191.467C31.1467 191.467 38.2322 198.553 38.2322 209.89ZM75.7857 209.89V211.307C75.7857 222.644 67.9916 229.729 56.6547 229.729C45.3178 229.729 38.2322 221.935 38.2322 209.89C38.2322 198.553 46.0264 191.467 57.3633 191.467C68.7002 191.467 75.7857 198.553 75.7857 209.89ZM38.2322 248.152V249.569C38.2322 260.906 30.4381 267.991 19.1012 267.991C7.76428 267.991 0.678711 260.197 0.678711 248.152C0.678711 236.815 8.47284 229.729 19.8097 229.729C31.1467 229.729 38.2322 236.815 38.2322 248.152ZM76.4943 248.86C76.4943 260.197 69.4087 267.991 57.3633 267.991C46.0264 267.991 38.2322 260.906 38.2322 248.86C38.2322 237.523 45.3178 229.729 57.3633 229.729C68.7002 229.729 76.4943 237.523 76.4943 248.86ZM114.756 248.86C114.756 260.197 107.671 267.991 95.6253 267.991C84.2884 267.991 76.4943 260.906 76.4943 248.86C76.4943 237.523 83.5799 229.729 95.6253 229.729C106.962 229.729 114.756 237.523 114.756 248.86ZM153.018 248.86C153.018 260.197 145.933 267.991 133.887 267.991C122.55 267.991 114.756 260.906 114.756 248.86C114.756 237.523 121.842 229.729 133.887 229.729C145.224 229.729 153.018 237.523 153.018 248.86ZM191.281 248.86C191.281 237.523 198.366 229.729 210.412 229.729C221.748 229.729 229.543 237.523 229.543 248.86C229.543 260.197 222.457 267.991 210.412 267.991C199.075 267.991 191.281 260.906 191.281 248.86ZM153.018 248.86C153.018 237.523 160.104 229.729 172.149 229.729C183.486 229.729 191.281 237.523 191.281 248.86C191.281 260.197 184.195 267.991 172.149 267.991C160.813 267.991 153.018 260.906 153.018 248.86ZM76.4943 287.122C76.4943 298.459 69.4087 306.253 57.3633 306.253C46.0264 306.253 38.2322 299.168 38.2322 287.122C38.2322 275.786 45.3178 267.991 57.3633 267.991C68.7002 267.991 76.4943 275.786 76.4943 287.122ZM38.2322 286.414V287.831C38.2322 299.168 30.4381 306.253 19.1012 306.253C7.76428 306.253 0.678711 298.459 0.678711 286.414C0.678711 275.077 8.47284 267.991 19.8097 267.991C31.1467 267.991 38.2322 275.077 38.2322 286.414ZM114.756 287.122C114.756 298.459 107.671 306.253 95.6253 306.253C84.2884 306.253 76.4943 299.168 76.4943 287.122C76.4943 275.786 83.5799 267.991 95.6253 267.991C106.962 267.991 114.756 275.786 114.756 287.122ZM153.018 287.122C153.018 298.459 145.933 306.253 133.887 306.253C122.55 306.253 114.756 299.168 114.756 287.122C114.756 275.786 121.842 267.991 133.887 267.991C145.224 267.991 153.018 275.786 153.018 287.122ZM191.281 287.122C191.281 298.459 184.195 306.253 172.149 306.253C160.813 306.253 153.018 299.168 153.018 287.122C153.018 275.786 160.104 267.991 172.149 267.991C183.486 267.991 191.281 275.786 191.281 287.122ZM229.543 287.122C229.543 298.459 222.457 306.253 210.412 306.253C199.075 306.253 191.281 299.168 191.281 287.122C191.281 275.786 198.366 267.991 210.412 267.991C221.748 267.991 229.543 275.786 229.543 287.122ZM38.2322 324.676C38.2322 313.339 46.0264 306.253 57.3633 306.253C68.7002 306.253 75.7857 313.339 75.7857 324.676V326.093C75.7857 337.43 67.9916 344.516 56.6547 344.516C45.3178 344.516 38.2322 336.721 38.2322 324.676ZM19.1012 344.516C7.76428 344.516 0.678711 336.721 0.678711 324.676C0.678711 313.339 8.47284 306.253 19.8097 306.253C31.1467 306.253 38.2322 313.339 38.2322 324.676V326.093C38.2322 337.43 30.4381 344.516 19.1012 344.516ZM38.2322 362.938C38.2322 351.601 45.3178 344.516 57.3633 344.516C68.7002 344.516 75.7857 351.601 75.7857 362.938V363.647C75.7857 374.984 67.9916 382.069 56.6547 382.069C45.3178 382.069 38.2322 374.275 38.2322 362.938ZM19.1012 382.069C7.76428 382.069 0.678711 374.275 0.678711 362.938C0.678711 351.601 7.76428 344.516 19.8097 344.516C31.1467 344.516 38.2322 351.601 38.2322 362.938V363.647C38.2322 374.984 30.4381 382.069 19.1012 382.069ZM38.2322 400.492C38.2322 389.155 46.0264 382.069 57.3633 382.069C68.7002 382.069 75.7857 389.155 75.7857 400.492V401.909C75.7857 413.246 67.9916 420.331 56.6547 420.331C45.3178 420.331 38.2322 412.537 38.2322 400.492ZM19.1012 420.331C7.76428 420.331 0.678711 412.537 0.678711 400.492C0.678711 389.155 8.47284 382.069 19.8097 382.069C31.1467 382.069 38.2322 389.155 38.2322 400.492V401.909C38.2322 413.246 30.4381 420.331 19.1012 420.331ZM38.2322 438.754C38.2322 427.417 46.0264 420.331 57.3633 420.331C68.7002 420.331 75.7857 427.417 75.7857 438.754V440.171C75.7857 451.508 67.9916 458.593 56.6547 458.593C45.3178 458.593 38.2322 450.799 38.2322 438.754ZM19.1012 458.593C7.76428 458.593 0.678711 450.799 0.678711 438.754C0.678711 427.417 8.47284 420.331 19.8097 420.331C31.1467 420.331 38.2322 427.417 38.2322 438.754V440.171C38.2322 451.508 30.4381 458.593 19.1012 458.593ZM38.2322 478.433V477.016C38.2322 465.679 46.0264 458.593 57.3633 458.593C68.7002 458.593 75.7857 466.387 75.7857 478.433C75.7857 489.77 67.9916 496.855 56.6547 496.855C45.3178 496.855 38.2322 489.77 38.2322 478.433ZM0.678711 478.433V477.016C0.678711 465.679 8.47284 458.593 19.8097 458.593C31.1467 458.593 38.2322 466.387 38.2322 478.433C38.2322 489.77 30.4381 496.855 19.1012 496.855C7.76428 496.855 0.678711 489.77 0.678711 478.433Z"
								fill="#C6C6C6"
							/>
						</svg>
					</Link>
				</div>
				<section className={`${styles.socialLinks} flex `}>
					<Link
						to={"mailto:hemantraiwork@gmail.com"}
						target="_blank"
						rel="noreferrrer"
					>
						<p className={`${styles.mail} fontBody flex pointer`}>
							hemantraiwork@gmail.com
						</p>
					</Link>
					<div className={`${styles.socialMedia} flex`}>
						<Link
							to={"https://www.linkedin.com/in/abitstupid/"}
							target="_blank"
							rel="noreferrrer"
						>
							<p
								className={`${styles.linkedIn} ${styles.footerIcon} center pointer`}
							>
								<svg
									width="49"
									height="49"
									viewBox="0 0 49 49"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M14.1047 10.1294C14.1041 11.1903 13.6822 12.2075 12.9317 12.9573C12.1812 13.7071 11.1635 14.128 10.1027 14.1274C9.0418 14.1269 8.0246 13.705 7.27483 12.9545C6.52506 12.2039 6.10414 11.1863 6.10467 10.1254C6.1052 9.06458 6.52713 8.04737 7.27766 7.2976C8.02818 6.54783 9.0458 6.12691 10.1067 6.12744C11.1675 6.12797 12.1847 6.54991 12.9345 7.30043C13.6843 8.05095 14.1052 9.06858 14.1047 10.1294ZM14.2247 17.0894H6.22467V42.1294H14.2247V17.0894ZM26.8647 17.0894H18.9047V42.1294H26.7847V28.9894C26.7847 21.6694 36.3247 20.9894 36.3247 28.9894V42.1294H44.2247V26.2694C44.2247 13.9294 30.1047 14.3894 26.7847 20.4494L26.8647 17.0894Z" />
								</svg>
							</p>
						</Link>
						<Link
							to={"https://github.com/abitstupid"}
							target="_blank"
							rel="noreferrrer"
						>
							<p
								className={`${styles.git} ${styles.footerIcon} center pointer`}
							>
								<svg
									width="49"
									height="49"
									viewBox="0 0 49 49"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_914_4)">
										<path d="M14.0976 4.7483C15.5995 5.25708 17.0283 5.9604 18.3476 6.8403C20.2107 6.36412 22.1265 6.12489 24.0496 6.1283C26.0356 6.1283 27.9516 6.3763 29.7476 6.8383C31.0663 5.95925 32.4944 5.25661 33.9956 4.7483C35.3896 4.2743 37.3756 3.5063 38.5556 4.8123C39.3556 5.7003 39.5556 7.1883 39.6976 8.3243C39.8576 9.5923 39.8956 11.2443 39.4756 12.8843C41.0816 14.9583 42.0496 17.4323 42.0496 20.1283C42.0496 24.2123 39.8376 27.7583 36.5636 30.2143C34.9879 31.3814 33.2404 32.2963 31.3836 32.9263C31.8116 33.9063 32.0496 34.9903 32.0496 36.1283V42.1283C32.0496 42.6587 31.8388 43.1674 31.4638 43.5425C31.0887 43.9176 30.58 44.1283 30.0496 44.1283H18.0496C17.5191 44.1283 17.0104 43.9176 16.6353 43.5425C16.2603 43.1674 16.0496 42.6587 16.0496 42.1283V40.1463C14.1396 40.3803 12.5376 40.1723 11.1756 39.5943C9.75156 38.9903 8.75956 38.0543 8.01356 37.1583C7.30556 36.3103 6.53356 34.3983 5.41756 34.0263C5.16831 33.9433 4.93785 33.812 4.73934 33.64C4.54082 33.4679 4.37814 33.2584 4.26058 33.0235C4.02316 32.549 3.98394 31.9997 4.15156 31.4963C4.31918 30.9929 4.6799 30.5767 5.15436 30.3393C5.62883 30.1019 6.17818 30.0627 6.68156 30.2303C8.01356 30.6743 8.88156 31.6343 9.47556 32.4063C10.4356 33.6463 11.2156 35.2663 12.7356 35.9123C13.3616 36.1783 14.2796 36.3523 15.7156 36.1563L16.0496 36.0883C16.0534 34.9999 16.28 33.9238 16.7156 32.9263C14.8587 32.2963 13.1112 31.3814 11.5356 30.2143C8.26156 27.7583 6.04956 24.2143 6.04956 20.1283C6.04956 17.4363 7.01556 14.9643 8.61756 12.8923C8.19756 11.2523 8.23356 9.5963 8.39356 8.3263L8.40356 8.2503C8.54956 7.0863 8.71956 5.7163 9.53556 4.8123C10.7156 3.5063 12.7036 4.2763 14.0956 4.7503L14.0976 4.7483Z" />
									</g>
									<defs>
										<clipPath id="clip0_914_4">
											<rect
												width="48"
												height="48"
												fill="white"
												transform="translate(0.0495605 0.128418)"
											/>
										</clipPath>
									</defs>
								</svg>
							</p>
						</Link>
					</div>
				</section>
			</footer>
		</>
	);
}
