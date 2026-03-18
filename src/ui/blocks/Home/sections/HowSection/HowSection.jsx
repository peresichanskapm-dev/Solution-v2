import Image from "next/image";
import classes from "./HowSection.module.scss";

export default function HowSection() {
	return (
		<section className={classes.howSection}>
			<div className={classes.howLeft}>
				<h2 className={classes.sectionTitle}>Як працює SOLUTION</h2>
				<p className={classes.howLeadTop}>SOLUTION — це state-shift аудіо, яке повертає стан через три рівні</p>
				<p className={classes.howLeadBottom}>
					У результаті — менше внутрішнього шуму, більше ясності й енергії. Відчуття: «я знову у
					своєму центрі».
				</p>
			</div>

			<div className={classes.howLineWrap}>
				<Image src="/media/home/howLine.png" alt="" fill sizes="620px" className={classes.howLine} />
			</div>

			<div className={classes.howCards}>
				<article className={`${classes.howCard} ${classes.howCardTop}`}>
					<Image src="/media/home/howTopShape.png" alt="" fill sizes="640px" className={classes.howShape} />
					<div className={classes.howCardContent}>
						<div className={classes.howIconTop}>
							<Image src="/media/home/iconBody.png" alt="" fill sizes="37px" className={classes.howIconImage} />
						</div>
						<h3 className={classes.howTitle}>Somatic Reset</h3>
						<p className={classes.howText}>Тіло заспокоюється.</p>
					</div>
				</article>

				<div className={classes.howBottomRow}>
					<article className={`${classes.howCard} ${classes.howCardBottomLeft}`}>
						<Image src="/media/home/howBottomLeftShape.png" alt="" fill sizes="320px" className={classes.howShape} />
						<div className={classes.howCardContent}>
							<div className={classes.howIconSmall}>
								<Image src="/media/home/iconMind.png" alt="" fill sizes="59px" className={classes.howIconImage} />
							</div>
							<h3 className={classes.howTitleSmall}>attention Repatterning</h3>
							<p className={classes.howTextSmall}>Увага збирається.</p>
						</div>
					</article>

					<article className={`${classes.howCard} ${classes.howCardBottomRight}`}>
						<Image src="/media/home/howBottomRightShape.png" alt="" fill sizes="344px" className={classes.howShape} />
						<div className={classes.howCardContent}>
							<div className={classes.howIconSmall}>
								<Image src="/media/home/iconBalance.png" alt="" fill sizes="49px" className={classes.howIconImage} />
							</div>
							<h3 className={classes.howTitleSmall}>Consciousness Coding</h3>
							<p className={classes.howTextSmall}>Сприйняття прояснюється.</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
