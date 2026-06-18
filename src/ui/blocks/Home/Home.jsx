import classes from "./Home.module.scss";
import HeaderSection from "./sections/HeaderSection";
import HeroSection from "./sections/HeroSection";
import StateIssueSection from "./sections/StateIssueSection";
import FocusStateSection from "./sections/FocusStateSection";
import HowSection from "./sections/HowSection";
import TryFreeSection from "./sections/TryFreeSection";
import AudienceSection from "./sections/AudienceSection";
import TariffsSection from "./sections/TariffsSection";
import ReviewsSection from "./sections/ReviewsSection";
import AuthorSection from "./sections/AuthorSection";
import FinalSection from "./sections/FinalSection";
import FooterSection from "./sections/FooterSection";

export default function Home() {
	return (
		<section className={classes.page}>
			<div className={classes.canvas}>
				<div className={classes.sectionSlot}>
					<HeaderSection />
				</div>
				<div className={classes.sectionSlot}>
					<HeroSection />
				</div>
				<div className={classes.sectionSlot}>
					<StateIssueSection />
				</div>
				<div className={classes.sectionSlot}>
					<FocusStateSection />
				</div>
				<div className={classes.sectionSlot}>
					<HowSection />
				</div>
				{/* Без лінії над TryFree */}
				<div className={`${classes.sectionSlot} ${classes.noTopLine}`}>
					<TryFreeSection />
				</div>
				{/* Без глобальної лінії над Audience (бо лінія тепер всередині TryFree) */}
				<div className={`${classes.sectionSlot} ${classes.noTopLine}`}>
					<AudienceSection />
				</div>
				<div className={classes.sectionSlot}>
					<TariffsSection />
				</div>
				<div className={classes.sectionSlot}>
					<ReviewsSection />
				</div>
				<div className={classes.sectionSlot}>
					<AuthorSection />
				</div>
				<div className={classes.sectionSlot}>
					<FinalSection />
				</div>
				<div className={classes.sectionSlot}>
					<FooterSection />
				</div>
			</div>
		</section>
	);
}
