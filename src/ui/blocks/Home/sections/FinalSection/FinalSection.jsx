import Image from "next/image";
import classes from "./FinalSection.module.scss";

export default function FinalSection() {
	return (
		<section className={classes.finalSection}>
			<div className={classes.backgroundWrap}>
				<Image
					src="/media/home/FinalSection-bg.webp"
					alt="Зоряне небо"
					fill
					sizes="100vw"
					className={classes.backgroundImage}
				/>
			</div>
			<div className={classes.overlay} aria-hidden="true" />

			<div className={classes.content}>
				<p className={classes.subtitleTop}>
					Ти впізнаєш це: усе розумієш, але в<br />
					моменті — знову всередині реакції
				</p>
				<p className={classes.subtitleBottom}>
					Секунда, де є вибір, існує. Просто зараз
					<br />
					тебе там немає
				</p>

				<h2 className={classes.title}>
					Base Mode
					<br />
					повертає тебе туди
				</h2>

				<div className={classes.buttonWrapper}>
					<button type="button" className={classes.button}>
						Отримати доступ
					</button>
				</div>
			</div>

			<p className={classes.bottomLeftText}>
				Перший зсув — уже
				<br />
				після першого
				<br />
				прослуховування
			</p>

			<p className={classes.bottomRightText}>
				Не на рівні думок, а як
				<br />
				відчуття, що всередині
				<br />
				стало тихіше
			</p>
		</section>
	);
}
