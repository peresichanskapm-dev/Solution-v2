import Image from "next/image";
import classes from "./FooterSection.module.scss";

export default function FooterSection() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footerTop}>
				<nav className={classes.footerLinks} aria-label="Footer links">
					<a href="#project" className={`${classes.footerLink} ${classes.footerLinkProject}`}>
						про проєкт
					</a>
					<a href="#audience" className={`${classes.footerLink} ${classes.footerLinkAudience}`}>
						для кого
					</a>
					<a href="#author" className={`${classes.footerLink} ${classes.footerLinkAuthor}`}>
						автор
					</a>
					<a href="#tariffs" className={`${classes.footerLink} ${classes.footerLinkTariffs}`}>
						тарифи
					</a>
				</nav>

				<a href="#project" className={classes.footerLogo}>
					<Image
						src="/media/home/logo.png"
						alt="SOLUTION"
						fill
						sizes="(max-width: 768px) 120px, 200px"
						className={classes.footerLogoImage}
					/>
				</a>

				<div className={classes.footerSocials}>
					<a href="#" className={classes.socialItem} aria-label="Telegram">
						<Image src="/media/home/telegram.png" alt="" fill sizes="(max-width: 768px) 21px, 31px" />
					</a>
					<a href="#" className={classes.socialItem} aria-label="Instagram">
						<Image src="/media/home/instagram.png" alt="" fill sizes="(max-width: 768px) 21px, 31px" />
					</a>
				</div>
			</div>

			<div className={classes.footerMiddle}>
				<p className={classes.footerCopy}>© 2026 | All rights reserved.</p>
			</div>
		</footer>
	);
}
