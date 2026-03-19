import Image from "next/image";
import classes from "./ReviewsSection.module.scss";

export default function ReviewsSection() {
	return (
		<section className={classes.reviews}>
			<div className={classes.reviewsBackground}>
				<Image src="/media/home/reviewsBackgroundDesktop.png" alt="Forest" fill sizes="(max-width: 768px) 100vw, 1388px" className={classes.reviewsBackgroundImage} />
			</div>
			<div className={classes.reviewsOverlay} />

			<div className={classes.reviewsCircle}>
				<Image src="/media/home/reviewsCirclePhone.png" alt="Що відчувають після SOLUTION" fill sizes="(max-width: 768px) 370px, 695px" className={classes.reviewsCircleImage} />
			</div>

			<p className={classes.reviewsQuoteLeft}>«Наче хтось прибрав шум.»</p>
			<p className={classes.reviewsQuoteRight}>«Я знову відчуваю опору всередині.»</p>
		</section>
	);
}
