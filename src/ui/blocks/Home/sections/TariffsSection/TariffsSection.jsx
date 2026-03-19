import Image from "next/image";
import classes from "./TariffsSection.module.scss";

const programs = [
	{
		cardClass: "programCardOne",
		id: "I",
		nameClass: "programNameOne",
		imageWrapClass: "programImageWrapOne",
		name: "відновлення ресурсу",
		image: "/media/home/programRecovery.png",
	},
	{
		cardClass: "programCardTwo",
		id: "II",
		nameClass: "programNameTwo",
		imageWrapClass: "programImageWrapTwo",
		name: "повернення внутрішнього центру",
		image: "/media/home/programCenter.png",
	},
	{
		cardClass: "programCardThree",
		id: "III",
		nameClass: "programNameThree",
		imageWrapClass: "programImageWrapThree",
		name: "дія без напруги",
		image: "/media/home/programPower.png",
	},
];

export default function TariffsSection() {
	return (
		<section id="tariffs" className={classes.tariffs}>
			<p className={classes.tariffsMeta}>( перший набір )</p>
			<h2 className={classes.tariffsTitle}>Solar Activation — вхід у SOLUTION</h2>
			<p className={classes.tariffsLead}>3 аудіопрограми для повернення енергії, центру й сили.</p>

			<div className={classes.programs}>
				{programs.map((program) => (
					<article key={program.id} className={`${classes.programCard} ${classes[program.cardClass]}`}>
						<div className={`${classes.programImageWrap} ${classes[program.imageWrapClass]}`}>
							<Image src={program.image} alt={program.name} fill sizes="(max-width: 768px) 75vw, 400px" className={classes.programImage} />
						</div>
						<span className={classes.programIndex}>{program.id}</span>
						<p className={`${classes.programName} ${classes[program.nameClass]}`}>{program.name}</p>
					</article>
				))}
			</div>

			<p className={classes.tariffsPrice}>999 грн</p>
			<button className={classes.tariffsButton}>ПРидбати пакет</button>
		</section>
	);
}
