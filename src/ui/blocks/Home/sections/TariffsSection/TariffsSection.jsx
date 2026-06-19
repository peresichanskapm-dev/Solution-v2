import Image from "next/image";
import classes from "./TariffsSection.module.scss";

const programs = [
	{
		id: "I",
		text: "Ти починаєш помічати момент,\nде думка стає реакцією",
		image: "/media/home/programRecovery.png",
	},
	{
		id: "II",
		text: "Фонова напруга перестає\nкерувати реакціями.",
		image: "/media/home/programCenter.png",
	},
	{
		id: "III",
		text: "Програма повертає тебе в\nстан, з якого рішення інші.",
		image: "/media/home/programPower.png",
	},
];

export default function TariffsSection() {
	return (
		<section id="tariffs" className={classes.tariffs}>
			<div className={classes.header}>
				<h2 className={classes.title}>
					Base Mode —<br />
					точка вибору
				</h2>
				<p className={classes.subtitle}>
					Без паузи між думкою та реакцією будь-яка робота над собою — лише
					<br />
					спроба виправити скоєне. Base Mode змінює момент старту твоєї реакції.
				</p>
			</div>

			<div className={classes.programsGrid}>
				{programs.map((program) => (
					<article key={program.id} className={classes.programCard}>
						<div className={classes.programImageWrap}>
							<Image
								src={program.image}
								alt={`Program ${program.id}`}
								fill
								sizes="(max-width: 768px) 80vw, 33vw"
								className={classes.programImage}
							/>
							<span className={classes.programIndex}>{program.id}</span>
						</div>
						<p className={classes.programText}>
							{program.text.split("\n").map((line, i) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>
					</article>
				))}
			</div>

			<div className={classes.dailyStories}>
				<h3 className={classes.dailyTitle}>+ Daily Stories</h3>
				<p className={classes.dailyText}>
					{/* Текст для десктопу */}
					<span className={classes.desktopText}>
						короткі щоденні практики у форматі живих ситуацій. Ти тренуєш
						<br />
						момент, який у житті зазвичай пропускаєш.
					</span>

					{/* Текст для мобільних (4 рядки, як у Figma) */}
					<span className={classes.mobileText}>
						короткі щоденні практики у<br />
						форматі живих ситуацій. Ти
						<br />
						тренуєш момент, який у житті
						<br />
						зазвичай пропускаєш.
					</span>
				</p>
			</div>

			<button type="button" className={classes.button}>
				Придбати пакет
			</button>

			<p className={classes.price}>999 ГРН</p>
		</section>
	);
}
