import Image from "next/image";
import classes from "./HeroSection.module.scss";

export default function HeroSection() {
	return (
		<section id="project" className={classes.hero}>
			<div className={classes.heroLeft}>
				<div className={classes.heroRing} />
				<div className={classes.heroCopy}>
					<p className={classes.heroTitle}>
						Ти знаєш, що
						<br />
						відбувається.
						<br />
						Але в моменті
						<span className={classes.desktopDash}> —</span>
						<br className={classes.mobileBreak} />
						<span className={classes.mobileDash}>—</span>
						<br />
						дієш на автоматі
					</p>
					<button type="button" className={classes.heroButton}>
						Спробувати безкоштовно
					</button>
					<p className={classes.heroSubtitle}>
						Перший зсув — вже після
						<br />
						першого прослуховування
					</p>
				</div>
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
					Аудіопрограми, які повертають тебе в момент де ще є ти — а не автоматична
					відповідь
				</p>
			</div>
		</section>
	);
}
