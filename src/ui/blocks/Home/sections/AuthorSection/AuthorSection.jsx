import Image from "next/image";
import classes from "./AuthorSection.module.scss";

export default function AuthorSection() {
	return (
		<section id="author" className={classes.author}>
			<div className={classes.authorWrap}>
				{/* ШАПКА ДЛЯ МОБІЛЬНИХ (На десктопі прихована) */}
				<div className={classes.mobileHeader}>
					<div className={classes.authorHead}>
						<div className={classes.authorIconWrap} aria-hidden="true">
							<Image
								src="/media/home/authorNameIcon.png"
								alt=""
								fill
								sizes="(max-width: 768px) 18px, 27px"
								className={classes.authorIcon}
							/>
						</div>
						<h2 className={classes.authorName}>Олена Третьякова</h2>
					</div>
					<p className={classes.authorRole}>автор методології SOLUTION</p>
				</div>

				{/* Ліва колонка: Фотографія та декоративні елементи */}
				<div className={classes.visuals}>
					{/* Desktop visuals */}
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

					{/* Mobile visuals */}
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
				</div>

				{/* Права колонка: Текстовий контент */}
				<div className={classes.content}>
					{/* ШАПКА ДЛЯ ДЕСКТОПУ (На мобільних прихована) */}
					<div className={classes.desktopHeader}>
						<div className={classes.authorHead}>
							<div className={classes.authorIconWrap} aria-hidden="true">
								<Image
									src="/media/home/authorNameIcon.png"
									alt=""
									fill
									sizes="(max-width: 768px) 18px, 27px"
									className={classes.authorIcon}
								/>
							</div>
							<h2 className={classes.authorName}>Олена Третьякова</h2>
						</div>
						<p className={classes.authorRole}>автор методології SOLUTION</p>
					</div>

					<p className={classes.textBold}>
						"Я чудово розуміла свої паттерни, але в моменті це не допомагало: я просто
						дивилася збоку, як знову дію на автоматі, і не могла себе зупинити"
					</p>

					<p className={classes.textRegular}>
						Психологія зазвичай працює «після» реакції. Але змінити можна лише те, до
						чого маєш доступ тут і зараз. Я шукала цей доступ 10 років у 40 країнах —
						через терапію, тіло та дослідження свідомості
					</p>

					<div className={classes.quoteBox}>
						<Image
							src="/media/home/authorQuoteBubbleDesktop.svg"
							alt=""
							fill
							className={`${classes.quoteBg} ${classes.quoteBgDesktop}`}
						/>
						<Image
							src="/media/home/authorQuoteBubbleMobile.svg"
							alt=""
							fill
							className={`${classes.quoteBg} ${classes.quoteBgMobile}`}
						/>
						<p className={classes.quoteText}>
							<span className={classes.desktopText}>
								“ SOLUTION — це система, яку я зібрала навколо цієї точки. Не щоб
								пояснити, як усе влаштовано, а щоб допомогти туди потрапити ”
							</span>
							<span className={classes.mobileText}>
								“ SOLUTION — це інтеграція цього досвіду:
								<br />
								поєднання науки, практики і глибшого
								<br />
								розуміння людини. ”
							</span>
						</p>
					</div>

					<div className={classes.footerTextWrap}>
						<p className={classes.footerText}>
							<span className={classes.desktopText}>
								Між думкою та реакцією є спалах —<br />
								момент, коротший за секунду. Якщо ти
								<br />
								присутній там, ти керуєш собою
							</span>
							<span className={classes.mobileText}>
								Між думкою та реакцією є спалах
								<br />
								— момент, коротший за секунду.
								<br />
								Якщо ти присутній там, ти керуєш
								<br />
								собою.
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
