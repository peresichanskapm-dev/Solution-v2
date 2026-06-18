import Image from "next/image";
import classes from "./StateIssueSection.module.scss";

export default function StateIssueSection() {
	return (
		<section className={classes.stateIssue}>
			<div className={classes.topText}>
				<h2 className={classes.topTitle}>Чому стан не змінюється</h2>
				<p className={classes.topParagraph}>
					Ти виходиш з розмови — але вона ще годину в голові.
					<br />
					Одне повідомлення без відповіді — і ти три години у думках.
					<br />
					Ловиш себе на реакції і розумієш: не хотів так.
				</p>
			</div>

			<div className={classes.issueDiagram} aria-hidden="true">
				<Image
					src="/media/home/StateIssueBackground.png"
					alt=""
					width={561}
					height={561}
					className={classes.issueDiagramImage}
				/>
			</div>

			<div className={classes.bottomText}>
				<h2 className={classes.bottomTitle}>
					Але це знову відбувається, бо ти в моменті не там
				</h2>
				<p className={classes.bottomParagraph}>
					Думка виникає і за долю секунди стає фактом, твоїм станом
					<br />І вже з цього стану — дії, слова та рішення.
				</p>
			</div>
		</section>
	);
}
