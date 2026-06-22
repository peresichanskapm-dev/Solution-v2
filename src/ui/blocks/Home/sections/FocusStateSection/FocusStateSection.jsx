"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./FocusStateSection.module.scss";

export default function FocusStateSection() {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const toggleVideoPlayback = async () => {
		const videoElement = videoRef.current;

		if (!videoElement) {
			return;
		}

		if (videoElement.paused || videoElement.ended) {
			try {
				await videoElement.play();
			} catch {
				setIsPlaying(false);
			}

			return;
		}

		videoElement.pause();
	};

	const handleCardKeyDown = (event) => {
		if (event.key !== "Enter" && event.key !== " ") {
			return;
		}

		event.preventDefault();
		void toggleVideoPlayback();
	};

	return (
		<section className={classes.focusState}>
			<div className={classes.focusImageWrap}>
				<Image
					src="/media/home/lossBackground.png"
					alt="Ocean shore"
					fill
					sizes="100vw"
					className={classes.focusImage}
				/>
			</div>

			<div className={classes.focusShade} />

			{/* Текст для десктопу */}
			<div className={`${classes.textContent} ${classes.desktopText}`}>
				<p className={classes.smallText}>
					Цей цикл не зупиняється через розуміння
					<br />
					Його можна тільки завершити опинившись в<br />
					точці <b>до</b> реакції
				</p>
				<h2 className={classes.largeText}>
					Base Mode повертає тебе в<br />
					цю точку
				</h2>
			</div>

			{/* Текст для мобайлу з точними переносами */}
			<div className={`${classes.textContent} ${classes.mobileText}`}>
				<p className={classes.smallText}>
					Цей цикл не зупиняється через
					<br />
					розуміння
					<br />
					Його можна тільки завершити
					<br />
					опинившись в точці <b>до</b> реакції
				</p>
				<h2 className={classes.largeText}>
					Base Mode
					<br />
					повертає тебе в<br />
					цю точку
				</h2>
			</div>

			<div className={classes.focusCard}>
				<div
					className={classes.focusCardImage}
					role="button"
					tabIndex={0}
					aria-label={isPlaying ? "Pause video" : "Play video"}
					onClick={() => {
						void toggleVideoPlayback();
					}}
					onKeyDown={handleCardKeyDown}
				>
					<video
						ref={videoRef}
						className={classes.focusCardVideo}
						poster="/media/home/videoPreview.png"
						preload="metadata"
						controls={false}
						controlsList="nodownload noplaybackrate noremoteplayback"
						disablePictureInPicture
						disableRemotePlayback
						playsInline
						onContextMenu={(event) => {
							event.preventDefault();
						}}
						onPlay={() => {
							setIsPlaying(true);
						}}
						onPause={() => {
							setIsPlaying(false);
						}}
						onEnded={() => {
							setIsPlaying(false);
						}}
					>
						<source src="/media/home/videoplayback.mp4" type="video/mp4" />
					</video>

					{!isPlaying && (
						<div className={classes.playButton} aria-hidden="true">
							<svg viewBox="0 0 24 24" focusable="false">
								<path d="M8 5v14l11-7z" />
							</svg>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
