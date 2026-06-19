import classes from "./TryFreeSection.module.scss";

export default function TryFreeSection() {
	return (
		<section className={classes.tryFree}>
			{/* Лінія тепер логічно перша і зафіксована зверху через CSS */}
			<div className={classes.fullLine} />

			<h2 className={classes.title}>
				{/* Текст для десктопу */}
				<span className={classes.desktopText}>
					Після цього в тих самих ситуаціях - інші
					<br />
					рішення, бо ти не в середині реакції.
				</span>

				{/* Текст для мобільних (з жорсткими переносами як у Figma) */}
				<span className={classes.mobileText}>
					Після цього в тих самих
					<br />
					ситуаціях - інші рішення, бо
					<br />
					ти не в середині реакції.
				</span>
			</h2>
			<p className={classes.subtitle}>Це не те, що можна зрозуміти читаючи.</p>

			<button type="button" className={classes.button}>
				Спробуйте на безкоштовній практиці
			</button>
		</section>
	);
}
