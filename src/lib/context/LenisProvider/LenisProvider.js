"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			smoothWheel: true,
			smoothTouch: false,
		});

		let frameId;

		const raf = (time) => {
			lenis.raf(time);
			frameId = requestAnimationFrame(raf);
		};

		const scrollToHash = (hash) => {
			if (!hash || hash === "#") {
				return;
			}

			const target = document.querySelector(hash);
			if (target) {
				lenis.scrollTo(target);
			}
		};

		const handleAnchorClick = (event) => {
			const link = event.target.closest('a[href^="#"]');

			if (!link) {
				return;
			}

			const hash = link.getAttribute("href");
			if (!hash || hash === "#") {
				return;
			}

			const target = document.querySelector(hash);
			if (!target) {
				return;
			}

			event.preventDefault();
			lenis.scrollTo(target);
			window.history.pushState(null, "", hash);
		};

		const handleHashChange = () => {
			scrollToHash(window.location.hash);
		};

		document.addEventListener("click", handleAnchorClick);
		window.addEventListener("hashchange", handleHashChange);

		frameId = requestAnimationFrame(raf);

		if (window.location.hash) {
			requestAnimationFrame(() => {
				scrollToHash(window.location.hash);
			});
		}

		return () => {
			document.removeEventListener("click", handleAnchorClick);
			window.removeEventListener("hashchange", handleHashChange);
			lenis.destroy();
			if (frameId) {
				cancelAnimationFrame(frameId);
			}
		};
	}, []);

	return children;
}
