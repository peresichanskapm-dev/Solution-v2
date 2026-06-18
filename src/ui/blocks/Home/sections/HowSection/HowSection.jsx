import Image from "next/image";
import classes from "./HowSection.module.scss";

export default function HowSection() {
	return (
		<section className={classes.howSection}>
			<div className={classes.howLeft}>
				<h2 className={classes.sectionTitle}>Як працює Base Mode</h2>

				{/* Десктопний текст */}
				<p className={`${classes.howLeadTop} ${classes.desktopText}`}>
					Підхід Base Mode діє в момент де стан ще тільки формується. В основі — система
					SOLUTION, який працює з реакцією, а не з її наслідками.
				</p>
				{/* Мобільний текст */}
				<p className={`${classes.howLeadTop} ${classes.mobileText}`}>
					Підхід Base Mode діє в момент де
					<br />
					стан ще тільки формується.
				</p>

				<p className={classes.howLeadBottom}>Робота на трьох рівнях одночасно:</p>
			</div>

			<div className={classes.howLineWrap} aria-hidden="true">
				<Image
					src="/media/home/howLine.png"
					alt=""
					fill
					sizes="614px"
					className={classes.howLine}
				/>
			</div>

			<div className={classes.howCards}>
				<article className={`${classes.howCard} ${classes.howCardTop}`}>
					<Image
						src="/media/home/howTopShape.png"
						alt=""
						fill
						sizes="640px"
						className={`${classes.howShape} ${classes.howTopShapeDesktop}`}
					/>
					<Image
						src="/media/home/howMobileTopShape.svg"
						alt=""
						fill
						sizes="340px"
						className={`${classes.howShape} ${classes.howTopShapeMobile}`}
					/>
					<div className={classes.howCardContent}>
						<div className={classes.howIconTop}>
							<Image
								src="/media/home/iconBody.png"
								alt=""
								fill
								sizes="37px"
								className={classes.howIconImage}
							/>
						</div>
						<h3 className={classes.howTitle}>
							SOMATIC
							<br />
							RESET
						</h3>
						<p className={classes.howText}>
							Тіло реагує швидше ніж ти це усвідомлюєш. Під час прослуховування зникає
							механізм, який утримує реакцію.
						</p>
					</div>
				</article>

				<div className={classes.howBottomRow}>
					<article
						className={`${classes.howCard} ${classes.howCardBottomLeft} ${classes.howCardBottom}`}
					>
						<Image
							src="/media/home/howBottomLeftShape.png"
							alt=""
							fill
							sizes="(max-width: 768px) 170px, 320px"
							className={classes.howShape}
						/>
						<div className={classes.howCardContent}>
							<div className={classes.howIconSmall}>
								<Image
									src="/media/home/iconMind.png"
									alt=""
									fill
									sizes="59px"
									className={classes.howIconImage}
								/>
							</div>
							<h3 className={classes.howTitleSmall}>
								ATTENTION
								<br />
								REPATTERNING
							</h3>
							<p className={classes.howTextSmall}>
								Коли увага в думках — ти живеш в ілюзіях. Цей рівень повертає увагу
								в реальність
							</p>
						</div>
					</article>

					<article
						className={`${classes.howCard} ${classes.howCardBottomRight} ${classes.howCardBottom}`}
					>
						<Image
							src="/media/home/howBottomRightShape.png"
							alt=""
							fill
							sizes="(max-width: 768px) 182px, 344px"
							className={classes.howShape}
						/>
						<div className={classes.howCardContent}>
							<div className={classes.howIconSmall}>
								<Image
									src="/media/home/iconBalance.png"
									alt=""
									fill
									sizes="49px"
									className={classes.howIconImage}
								/>
							</div>
							<h3 className={classes.howTitleSmall}>
								CONSCIOUSNESS
								<br />
								CODING
							</h3>
							<p className={classes.howTextSmall}>
								Коли тіло відпустило і увага в моменті — з'являється та секунда
								вибору, яку ти раніше пропускав.
							</p>
						</div>
					</article>
				</div>
			</div>

			<p className={classes.howConclusionMobile}>
				В основі — система SOLUTION, який
				<br />
				працює з реакцією, а не з її наслідками.
			</p>
		</section>
	);
}
