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
				<HeaderSection />
				<HeroSection />
				<StateIssueSection />
				<FocusStateSection />
				<HowSection />
				<AudienceSection />
				<TariffsSection />
				<ReviewsSection />
				<AuthorSection />
				<FooterSection />
			</div>
		</section>
	);
}
