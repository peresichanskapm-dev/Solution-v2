import Image from "next/image";
import classes from "./StateIssueSection.module.scss";

export default function StateIssueSection() {
	return (
		<section className={classes.stateIssue}>
			<div className={classes.issueText}>
				<h2 className={classes.sectionTitle}>Чому ми втрачаємо стан</h2>
				<p className={classes.issueParagraph}>
					Більшість людей живуть не зі свого центру, а з автоматичних реакцій.
				</p>
				<p className={classes.issueParagraph}>
					З дитинства — чужі очікування і страхи. Згодом — шум, швидкість, перевантаження.
				</p>
				<p className={classes.issueParagraph}>В результаті:</p>
			</div>

			<div className={classes.issueDiagram}>
				<Image src="/media/home/issueOuterText.png" alt="" fill sizes="560px" className={classes.issueOuterText} />
				<Image src="/media/home/issueRingImage.png" alt="" fill sizes="560px" className={classes.issueRingImage} />
				<Image src="/media/home/issueInnerText.png" alt="" fill sizes="472px" className={classes.issueInnerText} />
				<Image src="/media/home/issueInnerStroke.png" alt="" fill sizes="256px" className={classes.issueInnerStroke} />
				<Image src="/media/home/issueCenterFill.png" alt="" fill sizes="30px" className={classes.issueCenterFill} />
				<Image src="/media/home/issueCenterStroke.png" alt="" fill sizes="156px" className={classes.issueCenterStroke} />
			</div>
		</section>
	);
}
