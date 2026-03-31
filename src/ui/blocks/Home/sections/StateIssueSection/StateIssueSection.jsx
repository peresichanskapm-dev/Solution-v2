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
				<Image src="/media/home/StateIssueBackground.png" alt="" width={561} height={561} className={classes.issueDiagramImage} />
			</div>
		</section>
	);
}
