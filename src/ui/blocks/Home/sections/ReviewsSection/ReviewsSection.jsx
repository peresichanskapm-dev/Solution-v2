import Image from "next/image";
import classes from "./ReviewsSection.module.scss";

export default function ReviewsSection() {
	return (
		<section className={classes.reviews}>
			<div className={classes.reviewsBackground}>
				<Image
					src="/media/home/authorBackground.png"
					alt="Forest"
					fill
					sizes="(max-width: 768px) 100vw, 96vw"
					className={classes.reviewsBackgroundImage}
				/>
			</div>
			<div className={classes.reviewsOverlay} />

			<div className={classes.reviewsCircle}>
				<Image
					src="/media/home/reviewsCirclePhone.png"
					alt="Відгуки після SOLUTION"
					fill
					sizes="(max-width: 768px) 72vw, 48vw"
					className={classes.reviewsCircleImage}
				/>
			</div>

			<p className={classes.reviewsQuoteLeft}>«Наче хтось прибрав шум.»</p>
			<p className={classes.reviewsQuoteRight}>«Я знову відчуваю опору всередині.»</p>
		</section>
	);
}
