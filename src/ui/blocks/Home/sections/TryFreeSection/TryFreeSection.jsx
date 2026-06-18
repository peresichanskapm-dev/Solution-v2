import classes from "./TryFreeSection.module.scss";

export default function TryFreeSection() {
	return (
		<section className={classes.tryFree}>
			<h2 className={classes.title}>
				Після цього в тих самих ситуаціях - інші
				<br />
				рішення, бо ти не в середині реакції.
			</h2>
			<p className={classes.subtitle}>Це не те, що можна зрозуміти читаючи.</p>

			<button type="button" className={classes.button}>
				Спробуйте на безкоштовній практиці
			</button>

			<div className={classes.metaWrapper}>
				<p className={classes.metaText}>5 хвилин</p>
			</div>

			{/* Повноцінна лінія, що йде відразу під текстом */}
			<div className={classes.fullLine} />
		</section>
	);
}
