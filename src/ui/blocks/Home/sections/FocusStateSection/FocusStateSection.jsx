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
					sizes="(max-width: 768px) 100vw, 96vw"
					className={classes.focusImage}
				/>
			</div>
			<div className={classes.focusShade} />

			<p className={classes.focusStatement}>Саме цю точку ми втрачаємо. І саме її повертає SOLUTION.</p>

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
