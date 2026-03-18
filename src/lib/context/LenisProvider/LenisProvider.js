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

		frameId = requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			if (frameId) {
				cancelAnimationFrame(frameId);
			}
		};
	}, []);

	return children;
}
