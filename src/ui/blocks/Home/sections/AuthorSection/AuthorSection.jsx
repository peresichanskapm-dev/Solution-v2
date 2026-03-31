import Image from "next/image";
import classes from "./AuthorSection.module.scss";

export default function AuthorSection() {
	return (
		<section id="author" className={classes.author}>
			<div className={classes.decorOuterDesktop} aria-hidden="true">
				<Image src="/media/home/authorDecorOuterDesktop.svg" alt="" fill sizes="(max-width: 768px) 0px, 651px" />
			</div>
			<div className={classes.decorMiddleDesktop} aria-hidden="true">
				<Image src="/media/home/authorDecorMiddleDesktop.svg" alt="" fill sizes="(max-width: 768px) 0px, 464px" />
			</div>
			<div className={classes.portraitDesktop} aria-hidden="true">
				<Image src="/media/home/authorPortraitDesktop.png" alt="" fill sizes="(max-width: 768px) 0px, 370px" />
			</div>

			<div className={classes.decorOuterMobile} aria-hidden="true">
				<Image src="/media/home/authorDecorOuterMobile.svg" alt="" fill sizes="(max-width: 768px) 299px, 0px" />
			</div>
			<div className={classes.decorMiddleMobile} aria-hidden="true">
				<Image src="/media/home/authorDecorMiddleMobile.svg" alt="" fill sizes="(max-width: 768px) 213px, 0px" />
			</div>
			<div className={classes.portraitMobile} aria-hidden="true">
				<Image src="/media/home/authorPortraitMobile.png" alt="" fill sizes="(max-width: 768px) 170px, 0px" />
			</div>

			<div className={classes.authorHead}>
				<div className={classes.authorIconWrap} aria-hidden="true">
					<Image
						src="/media/home/authorNameIconDesktop.png"
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
				<Image src="/media/home/authorQuoteBubbleDesktop.svg" alt="" fill sizes="(max-width: 768px) 0px, 498px" />
			</div>
			<div className={classes.quoteBubbleMobile} aria-hidden="true">
				<Image src="/media/home/authorQuoteBubbleMobile.svg" alt="" fill sizes="(max-width: 768px) 301px, 0px" />
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
