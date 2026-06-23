"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import classes from "./TariffsSection.module.scss";

const programs = [
	{
		id: "I",
		text: "Ти починаєш помічати момент,\nде думка стає реакцією",
		curveText: "Вихід з автоматичного мислення",
		image: "/media/home/programRecovery.png",
	},
	{
		id: "II",
		text: "Фонова напруга перестає\nкерувати реакціями",
		curveText: "Вихід з режиму виживання",
		image: "/media/home/programCenter.png",
	},
	{
		id: "III",
		text: "Програма повертає тебе в\nстан, з якого рішення інші",
		curveText: "Повернення до внутрішньої опори",
		image: "/media/home/programPower.png",
	},
];

export default function TariffsSection() {
	const gridRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(classes.animate);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const cards = gridRef.current?.querySelectorAll(`.${classes.programCard}`);
		cards?.forEach((card) => observer.observe(card));

		return () => observer.disconnect();
	}, []);

	return (
		<section id="tariffs" className={classes.tariffs}>
			<div className={classes.header}>
				<h2 className={classes.title}>
					Base Mode —<br />
					точка вибору
				</h2>
				<p className={classes.subtitle}>
					Без паузи між думкою та реакцією будь-яка робота над собою — лише спроба
					виправити скоєне. Base Mode змінює момент старту твоєї реакції
				</p>
			</div>

			<div className={classes.programsGrid} ref={gridRef}>
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

							{/* Збільшене центральне кільце */}
							<Image
								src="/media/home/innerShape.png"
								alt="Center shape"
								width={70}
								height={70}
								className={classes.innerShape}
							/>

							{/* SVG для тексту по кривій */}
							<svg viewBox="0 0 330 330" className={classes.curveSvg}>
								<path
									id={`curve-${program.id}`}
									d="M 75,165 A 90,90 0 0,0 255,165"
									fill="transparent"
								/>
								<text className={classes.curveText}>
									<textPath
										href={`#curve-${program.id}`}
										startOffset="50%"
										textAnchor="middle"
									>
										{program.curveText}
									</textPath>
								</text>
							</svg>

							{/* Номер програми (Римська цифра внизу) */}
							<span className={classes.programNumber}>{program.id}</span>
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
					<span className={classes.desktopText}>
						короткі щоденні практики у форматі живих ситуацій. Ти тренуєш
						<br />
						момент, який у житті зазвичай пропускаєш
					</span>

					<span className={classes.mobileText}>
						короткі щоденні практики у<br />
						форматі живих ситуацій. Ти
						<br />
						тренуєш момент, який у житті
						<br />
						зазвичай пропускаєш
					</span>
				</p>
			</div>

			<p className={classes.price}>999 ГРН</p>

			<button type="button" className={classes.button}>
				Придбати пакет
			</button>
		</section>
	);
}
