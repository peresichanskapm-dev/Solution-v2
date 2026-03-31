import classes from "./Home.module.scss";
import HeaderSection from "./sections/HeaderSection";
import HeroSection from "./sections/HeroSection";
import StateIssueSection from "./sections/StateIssueSection";
import FocusStateSection from "./sections/FocusStateSection";
import HowSection from "./sections/HowSection";
import AudienceSection from "./sections/AudienceSection";
import TariffsSection from "./sections/TariffsSection";
import ReviewsSection from "./sections/ReviewsSection";
import AuthorSection from "./sections/AuthorSection";
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
				<div className={classes.sectionSlot}>
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
					<FooterSection />
				</div>
			</div>
		</section>
	);
}
