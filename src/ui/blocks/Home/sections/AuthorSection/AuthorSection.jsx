import Image from "next/image";
import classes from "./AuthorSection.module.scss";

export default function AuthorSection() {
	return (
		<section id="author" className={classes.author}>
			<div className={classes.decorOuterDesktop} aria-hidden="true">
				<div className={classes.decorOuterDesktopRotate}>
					<div className={classes.decorOuterDesktopInner}>
						<Image
							src="/media/home/authorDecorOuterDesktop.svg"
							alt=""
							fill
							sizes="(max-width: 768px) 0px, 522px"
							className={classes.decorAsset}
						/>
					</div>
				</div>
			</div>
			<div className={classes.decorMiddleDesktop} aria-hidden="true">
				<div className={classes.decorMiddleDesktopRotate}>
					<div className={classes.decorMiddleDesktopInner}>
						<Image
							src="/media/home/authorDecorMiddleDesktop.svg"
							alt=""
							fill
							sizes="(max-width: 768px) 0px, 428px"
							className={classes.decorAsset}
						/>
					</div>
				</div>
			</div>
			<div className={classes.portraitDesktop} aria-hidden="true">
				<div className={classes.portraitDesktopRotate}>
					<div className={classes.portraitDesktopInner}>
						<Image
							src="/media/home/authorPortraitDesktop.png"
							alt=""
							fill
							sizes="(max-width: 768px) 0px, 362px"
							className={classes.portraitAsset}
						/>
					</div>
				</div>
			</div>

			<div className={classes.decorOuterMobile} aria-hidden="true">
				<div className={classes.decorOuterMobileRotate}>
					<div className={classes.decorOuterMobileInner}>
						<Image
							src="/media/home/authorDecorOuterMobile.svg"
							alt=""
							fill
							sizes="(max-width: 768px) 241px, 0px"
							className={classes.decorAsset}
						/>
					</div>
				</div>
			</div>
			<div className={classes.decorMiddleMobile} aria-hidden="true">
				<div className={classes.decorMiddleMobileRotate}>
					<div className={classes.decorMiddleMobileInner}>
						<Image
							src="/media/home/authorDecorMiddleMobile.svg"
							alt=""
							fill
							sizes="(max-width: 768px) 197px, 0px"
							className={classes.decorAsset}
						/>
					</div>
				</div>
			</div>
			<div className={classes.portraitMobile} aria-hidden="true">
				<div className={classes.portraitMobileRotate}>
					<div className={classes.portraitMobileInner}>
						<Image
							src="/media/home/authorPortraitMobile.png"
							alt=""
							fill
							sizes="(max-width: 768px) 166px, 0px"
							className={classes.portraitAsset}
						/>
					</div>
				</div>
			</div>

			<div className={classes.authorHead}>
				<div className={classes.authorIconWrap} aria-hidden="true">
					<Image
						src="/media/home/authorNameIcon.png"
						alt=""
						fill
						sizes="(max-width: 768px) 23px, 27px"
						className={classes.authorIcon}
					/>
				</div>
				<h2 className={classes.authorName}>Олена Третяк</h2>
			</div>

			<p className={classes.authorRole}>автор методології SOLUTION</p>

			<p className={classes.authorLeadIntro}>
				Я працюю з темою стану, сприйняття і внутрішніх процесів, які визначають наші рішення і якість життя.
			</p>
			<p className={classes.authorLeadJourney}>
				Мій шлях почався з психології понад 7 років тому і з часом вийшов за її межі — у дослідження мислення,
				свідомості і автоматичних реакцій.
			</p>

			<div className={classes.quoteBubbleDesktop} aria-hidden="true">
				<Image
					src="/media/home/authorQuoteBubbleDesktop.svg"
					alt=""
					fill
					sizes="(max-width: 768px) 0px, 498px"
					className={classes.decorAsset}
				/>
			</div>
			<div className={classes.quoteBubbleMobile} aria-hidden="true">
				<Image
					src="/media/home/authorQuoteBubbleMobile.svg"
					alt=""
					fill
					sizes="(max-width: 768px) 301px, 0px"
					className={classes.decorAsset}
				/>
			</div>

			<blockquote className={classes.authorQuote}>{`“   SOLUTION — це інтеграція цього досвіду:
поєднання науки, практики і глибшого розуміння людини.   ”`}</blockquote>

			<p className={classes.authorBio}>
				Раніше я працювала в індустрії моди, що сформувало моє відчуття форми, структури і естетики. Досвід життя в
				різних країнах і культурах розширив бачення людей і їхніх станів.
			</p>

			<p className={classes.authorTodayDesktop}>
				<span className={classes.authorTodayLabel}>СЬОГОДНІ</span>{" "}
				моя задача — створювати інструменти,
				<br />
				які працюють у реальному житті.
			</p>
			<p className={classes.authorTodayMobile}>
				<span className={classes.authorTodayLabel}>СЬОГОДНІ</span> моя задача — створювати інструменти які працюють у
				реальному житті.
			</p>

			<blockquote className={classes.authorMottoDesktop}>{`“ Не заспокоювати, а повертати в точку,
з якої з’являється ясність, опора і нові рішення.  ”`}</blockquote>
			<blockquote className={classes.authorMottoMobile}>
				“ Не заспокоювати, а повертати в точку,з якої з’являється ясність, опора і нові рішення. ”
			</blockquote>
		</section>
	);
}
