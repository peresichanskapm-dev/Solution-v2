"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classes from "./ReviewsSection.module.scss";

const reviewSlides = [
	{ src: "/media/home/review1.png", alt: "Відгук клієнта 1" },
	{ src: "/media/home/review2.png", alt: "Відгук клієнта 2" },
	{ src: "/media/home/review3.png", alt: "Відгук клієнта 3" },
	{ src: "/media/home/review4.png", alt: "Відгук клієнта 4" },
	{ src: "/media/home/review5.png", alt: "Відгук клієнта 5" },
	{ src: "/media/home/review6.png", alt: "Відгук клієнта 6" },
	{ src: "/media/home/review7.png", alt: "Відгук клієнта 7" },
];

const transitionDurationMs = 550;
const slideImageQuality = 100;
const swipeThresholdPx = 40;

export default function ReviewsSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [leavingSlide, setLeavingSlide] = useState(null);
	const [direction, setDirection] = useState(1);
	const [isAnimating, setIsAnimating] = useState(false);
	const transitionTimeoutRef = useRef(null);
	const touchStartXRef = useRef(null);
	const touchDeltaXRef = useRef(0);

	useEffect(() => {
		return () => {
			if (transitionTimeoutRef.current) {
				clearTimeout(transitionTimeoutRef.current);
			}
		};
	}, []);

	useEffect(() => {
		const preloadedSlides = reviewSlides.map(({ src }) => {
			const image = new window.Image();
			image.src = src;
			return image;
		});

		return () => {
			preloadedSlides.forEach((image) => {
				image.src = "";
			});
		};
	}, []);

	const handleSlideChange = (step) => {
		if (isAnimating) {
			return;
		}

		const nextSlide = (currentSlide + step + reviewSlides.length) % reviewSlides.length;

		if (transitionTimeoutRef.current) {
			clearTimeout(transitionTimeoutRef.current);
		}

		setDirection(step > 0 ? 1 : -1);
		setLeavingSlide(currentSlide);
		setCurrentSlide(nextSlide);
		setIsAnimating(true);

		transitionTimeoutRef.current = setTimeout(() => {
			setLeavingSlide(null);
			setIsAnimating(false);
			transitionTimeoutRef.current = null;
		}, transitionDurationMs);
	};

	const currentSlideData = reviewSlides[currentSlide];

	const handleTouchStart = (event) => {
		if (event.touches.length !== 1) {
			return;
		}

		touchStartXRef.current = event.touches[0].clientX;
		touchDeltaXRef.current = 0;
	};

	const handleTouchMove = (event) => {
		if (touchStartXRef.current === null || event.touches.length !== 1) {
			return;
		}

		touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
	};

	const resetTouchState = () => {
		touchStartXRef.current = null;
		touchDeltaXRef.current = 0;
	};

	const handleTouchEnd = () => {
		if (touchStartXRef.current === null) {
			return;
		}

		const deltaX = touchDeltaXRef.current;

		if (Math.abs(deltaX) >= swipeThresholdPx) {
			handleSlideChange(deltaX < 0 ? 1 : -1);
		}

		resetTouchState();
	};

	return (
		<section className={classes.reviews}>
			<div className={classes.reviewsBackground}>
				<Image src="/media/home/reviewsBackgroundDesktop.png" alt="Forest" fill sizes="(max-width: 768px) 100vw, 1388px" className={classes.reviewsBackgroundImage} />
			</div>
			<div className={classes.reviewsOverlay} />

			<div className={classes.reviewsCircle}>
				<div
					className={classes.reviewsSlider}
					aria-live="polite"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
					onTouchCancel={resetTouchState}
				>
					{leavingSlide !== null && (
						<Image
							src={reviewSlides[leavingSlide].src}
							alt=""
							aria-hidden="true"
							fill
							loading="eager"
							quality={slideImageQuality}
							sizes="(max-width: 768px) 370px, 695px"
							className={`${classes.reviewsCircleImage} ${direction > 0 ? classes.slideExitToLeft : classes.slideExitToRight}`}
						/>
					)}
					<Image
						key={`${currentSlide}-${direction}`}
						src={currentSlideData.src}
						alt={currentSlideData.alt}
						fill
						loading="eager"
						quality={slideImageQuality}
						sizes="(max-width: 768px) 370px, 695px"
						priority={currentSlide === 0}
						className={`${classes.reviewsCircleImage} ${isAnimating ? (direction > 0 ? classes.slideEnterFromRight : classes.slideEnterFromLeft) : classes.slideStatic}`}
					/>
				</div>

				<h2 className={classes.reviewsSliderTitle}>
					Що відчувають
					<br />
					після SOLUTION
				</h2>

				<button type="button" className={`${classes.reviewsArrow} ${classes.reviewsArrowLeft}`} onClick={() => handleSlideChange(-1)} aria-label="Попередній відгук">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none" className={classes.reviewsArrowIcon}>
						<path d="M9.70703 18.3535L0.707031 9.35352L9.70703 0.353516" stroke="#FFFEFB" />
					</svg>
				</button>

				<button type="button" className={`${classes.reviewsArrow} ${classes.reviewsArrowRight}`} onClick={() => handleSlideChange(1)} aria-label="Наступний відгук">
					<svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19" fill="none" className={`${classes.reviewsArrowIcon} ${classes.reviewsArrowIconRight}`}>
						<path d="M9.70703 18.3535L0.707031 9.35352L9.70703 0.353516" stroke="#FFFEFB" />
					</svg>
				</button>
			</div>

			<p className={classes.reviewsQuoteLeft}>«Наче хтось прибрав шум.»</p>
			<p className={classes.reviewsQuoteRight}>«Я знову відчуваю опору всередині.»</p>
		</section>
	);
}
