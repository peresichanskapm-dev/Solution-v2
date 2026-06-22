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
					Ловиш себе на реакції і розумієш: не хотів так
				</p>
			</div>

			<div className={classes.issueDiagramWrap}>
				<div className={classes.issueDiagram} aria-hidden="true">
					<Image
						src="/media/home/StateIssueBackground.png"
						alt=""
						width={561}
						height={561}
						className={classes.issueDiagramImage}
					/>

					{/* Центральна фігура (innerShape) */}
					<Image
						src="/media/home/innerShape.png"
						alt="Center shape"
						width={150}
						height={150}
						className={classes.innerShape}
					/>

					{/* SVG для тексту та ліній */}
					<svg viewBox="0 0 561 561" className={classes.circularTextSvg}>
						{/* Внутрішня тонка лінія (без тексту) */}
						<circle cx="280.5" cy="280.5" r="140" className={classes.innerCircleLine} />

						{/* Шлях для тексту по зовнішньому колу */}
						<path
							id="fullCirclePath"
							d="M 280.5, 45.5 a 235,235 0 1,1 0,470 a 235,235 0 1,1 0,-470"
							fill="transparent"
						/>
						<text className={classes.circularText}>
							<textPath
								href="#fullCirclePath"
								startOffset="12.5%"
								textAnchor="middle"
							>
								Подія
							</textPath>
							<textPath
								href="#fullCirclePath"
								startOffset="37.5%"
								textAnchor="middle"
							>
								Інтерпретація
							</textPath>
							<textPath
								href="#fullCirclePath"
								startOffset="62.5%"
								textAnchor="middle"
							>
								Реакція
							</textPath>
							<textPath
								href="#fullCirclePath"
								startOffset="87.5%"
								textAnchor="middle"
							>
								Підтвердження
							</textPath>
						</text>
					</svg>
				</div>

				<p className={classes.diagramCaption}>
					Так формується цикл.
					<br />
					Ти реагуєш не на подію, ти реагуєш на її інтерпретацію.
				</p>
			</div>

			<div className={classes.bottomText}>
				<h2 className={classes.bottomTitle}>
					Але це знову відбувається, бо ти в моменті не там
				</h2>
				<p className={classes.bottomParagraph}>
					Думка виникає і за долю секунди стає фактом, твоїм станом
					<br />І вже з цього стану — дії, слова та рішення
				</p>
			</div>
		</section>
	);
}
