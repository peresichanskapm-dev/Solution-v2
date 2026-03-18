import Image from "next/image";
import classes from "./TariffsSection.module.scss";

const programs = [
	{
		id: "I",
		name: "відновлення ресурсу",
		image: "/media/home/programRecovery.png",
		ring: "Solar Receiving",
	},
	{
		id: "II",
		name: "повернення внутрішнього центру",
		image: "/media/home/programCenter.png",
		ring: "Inner Sun",
	},
	{
		id: "III",
		name: "дія без напруги",
		image: "/media/home/programPower.png",
		ring: "Quiet Power",
	},
];

export default function TariffsSection() {
	return (
		<section id="tariffs" className={classes.tariffs}>
			<div className={classes.tariffsHead}>
				<h2 className={classes.tariffsTitle}>Solar Activation — вхід у SOLUTION</h2>
				<p className={classes.tariffsLead}>3 аудіопрограми для повернення енергії, центру й сили.</p>
				<p className={classes.tariffsMeta}>( перший набір )</p>
			</div>

			<div className={classes.programsGrid}>
				{programs.map((program) => (
					<article key={program.id} className={classes.programCard}>
						<div className={classes.programImageWrap}>
							<Image
								src={program.image}
								alt={program.name}
								fill
								sizes="(max-width: 768px) 62vw, 20vw"
								className={classes.programImage}
							/>
						</div>
						<span className={classes.programIndex}>{program.id}</span>
						<p className={classes.programName}>{program.name}</p>
						<span className={classes.programRingLabel}>{program.ring}</span>
					</article>
				))}
			</div>

			<button className={classes.tariffsPrice}>999 грн</button>
		</section>
	);
}
