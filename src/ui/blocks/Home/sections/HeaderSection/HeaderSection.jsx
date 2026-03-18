"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./HeaderSection.module.scss";

const menuItems = [
	{ label: "для кого", href: "#audience" },
	{ label: "про проєкт", href: "#project" },
	{ label: "автор", href: "#author" },
	{ label: "тарифи", href: "#tariffs" },
];

export default function HeaderSection() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!isMenuOpen) {
			return undefined;
		}

		const handleEscape = (event) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		if (!isMenuOpen) {
			return undefined;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleMenuToggle = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleMenuClose = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className={`${classes.header} ${isMenuOpen ? classes.headerOpen : ""}`}>
			<a href="#project" className={classes.logo} onClick={handleMenuClose}>
				<Image src="/media/home/logo.png" alt="SOLUTION" fill priority className={classes.logoImage} />
			</a>

			<nav className={classes.nav}>
				{menuItems.map((item) => (
					<a key={item.href} href={item.href} className={classes.navItem}>
						{item.label}
					</a>
				))}
			</nav>

			<button
				className={classes.menuButton}
				type="button"
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
				onClick={handleMenuToggle}
			>
				<Image src="/media/home/menu.png" alt="" width={25} height={10} />
			</button>

			<nav id="mobile-menu" className={`${classes.mobileMenu} ${isMenuOpen ? classes.mobileMenuOpen : ""}`} aria-hidden={!isMenuOpen}>
				{menuItems.map((item) => (
					<a key={item.href} href={item.href} className={classes.mobileNavItem} onClick={handleMenuClose}>
						{item.label}
					</a>
				))}
			</nav>
		</header>
	);
}
