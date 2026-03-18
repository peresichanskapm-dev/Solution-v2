import Image from "next/image";
import classes from "./FooterSection.module.scss";

export default function FooterSection() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footerLeft}>
				<a href="#audience" className={classes.footerLink}>
					для кого
				</a>
				<a href="#project" className={classes.footerLink}>
					про проєкт
				</a>
			</div>

			<div className={classes.footerCenter}>
				<a href="#project" className={classes.footerLogo}>
					<Image src="/media/home/logo.png" alt="SOLUTION" fill sizes="160px" className={classes.footerLogoImage} />
				</a>
				<p className={classes.footerCopy}>© 2026 | All rights reserved.</p>
			</div>

			<div className={classes.footerRight}>
				<div className={classes.footerLinksRight}>
					<a href="#author" className={classes.footerLink}>
						автор
					</a>
					<a href="#tariffs" className={classes.footerLink}>
						тарифи
					</a>
				</div>

				<div className={classes.footerSocials}>
					<a href="#" className={classes.socialItem} aria-label="Telegram">
						<Image src="/media/home/telegram.png" alt="" fill sizes="31px" />
					</a>
					<a href="#" className={classes.socialItem} aria-label="Instagram">
						<Image src="/media/home/instagram.png" alt="" fill sizes="31px" />
					</a>
				</div>
			</div>
		</footer>
	);
}
