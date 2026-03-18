import Image from "next/image";
import classes from "./StateIssueSection.module.scss";

export default function StateIssueSection() {
	return (
		<section className={classes.stateIssue}>
			<div className={classes.issueText}>
				<h2 className={classes.sectionTitle}>Чому ми втрачаємо стан</h2>
				<p className={classes.issueParagraph}>
					Більшість людей живуть не зі свого центру, а з автоматичних реакцій.
					<br />
					<br />З дитинства — чужі очікування і страхи. Згодом — шум, швидкість, перевантаження.
					<br />
					<br />В результаті:
				</p>
			</div>

			<div className={classes.issueDiagram} aria-hidden="true">
				<Image src="/media/home/issueOuterText.png" alt="" width={900} height={925} className={`${classes.issueLayer} ${classes.issueOuterText}`} />
				<Image src="/media/home/issueRingImage.png" alt="" width={800} height={800} className={`${classes.issueLayer} ${classes.issueRingImage}`} />
				<Image src="/media/home/issueInnerText.png" alt="" width={646} height={682} className={`${classes.issueLayer} ${classes.issueInnerText}`} />
				<Image src="/media/home/issueInnerStroke.png" alt="" width={512} height={512} className={`${classes.issueLayer} ${classes.issueInnerStroke}`} />
				<Image src="/media/home/issueCenterFill.png" alt="" width={60} height={50} className={`${classes.issueLayer} ${classes.issueCenterFill}`} />
				<Image src="/media/home/issueCenterStroke.png" alt="" width={301} height={373} className={`${classes.issueLayer} ${classes.issueCenterStroke}`} />
			</div>
		</section>
	);
}
