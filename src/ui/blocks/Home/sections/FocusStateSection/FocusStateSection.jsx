import Image from "next/image";
import classes from "./FocusStateSection.module.scss";

export default function FocusStateSection() {
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
				<div className={classes.focusCardImage}>
					<Image
						src="/media/home/videoPreview.png"
						alt="Program preview"
						fill
						sizes="(max-width: 768px) 78vw, 25vw"
						className={classes.focusCardPhoto}
					/>
				</div>
				<div className={classes.playButton}>
					<span />
				</div>
			</div>
		</section>
	);
}
