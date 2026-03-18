import classes from "./Demo.module.scss";

export default function Demo() {
	return (
		<section className={classes.section}>
			<div className={classes.container}>
				<div className={classes.textContainer}>
					<h2>demo component</h2>
				</div>
			</div>
		</section>
	);
}
