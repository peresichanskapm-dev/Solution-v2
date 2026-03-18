import Image from "next/image";
import classes from "./HeroSection.module.scss";

export default function HeroSection() {
	return (
		<section id="project" className={classes.hero}>
			<div className={classes.heroLeft}>
				<div className={classes.heroRing} />
				<div className={classes.heroCopy}>
					<p className={classes.heroTitle}>State Shift Audio Programs by SOLUTION</p>
					<p className={classes.heroSubtitle}>М’яке психо-духовне перезавантаження стану за 5-12 хвилин</p>
					<div className={classes.heroChip}>Чому ми втрачаємо стан</div>
				</div>
				<p className={classes.heroTagLeft}>не релаксація.</p>
				<p className={classes.heroTagRight}>не медитація.</p>
			</div>

			<div className={classes.heroRight}>
				<div className={classes.heroImageWrap}>
					<Image
						src="/media/home/heroPhoto.png"
						alt="Desert and sunrise"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 50vw"
						className={classes.heroImage}
					/>
				</div>
				<p className={classes.heroText}>
					Аудіопрограми, що змінюють стан через тіло, увагу і сприйняття. Думай чистіше. Відчувай
					глибше. Дій впевненіше.
				</p>
			</div>
		</section>
	);
}
