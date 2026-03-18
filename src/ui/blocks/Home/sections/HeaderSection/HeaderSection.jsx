import Image from "next/image";
import classes from "./HeaderSection.module.scss";

const menuItems = [
	{ label: "для кого", href: "#audience" },
	{ label: "про проєкт", href: "#project" },
	{ label: "автор", href: "#author" },
	{ label: "тарифи", href: "#tariffs" },
];

export default function HeaderSection() {
	return (
		<header className={classes.header}>
			<a href="#project" className={classes.logo}>
				<Image src="/media/home/logo.png" alt="SOLUTION" fill priority className={classes.logoImage} />
			</a>

			<nav className={classes.nav}>
				{menuItems.map((item) => (
					<a key={item.href} href={item.href} className={classes.navItem}>
						{item.label}
					</a>
				))}
			</nav>

			<button className={classes.menuButton} aria-label="Open menu">
				<Image src="/media/home/menu.png" alt="" width={25} height={10} />
			</button>
		</header>
	);
}
