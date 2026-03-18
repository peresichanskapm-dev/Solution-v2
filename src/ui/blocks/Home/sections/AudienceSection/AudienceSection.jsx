import Image from "next/image";
import classes from "./AudienceSection.module.scss";

export default function AudienceSection() {
	return (
		<section id="audience" className={classes.audience}>
			<div className={classes.audienceBackground}>
				<Image
					src="/media/home/audienceBackground.png"
					alt="Desert background"
					fill
					sizes="(max-width: 768px) 100vw, 96vw"
					className={classes.audienceBackgroundImage}
				/>
			</div>
			<div className={classes.audienceOverlay} />

			<Image src="/media/home/audienceLineTopLeft.png" alt="" width={325} height={77} className={classes.audienceLineTopLeft} />
			<Image src="/media/home/audienceLineTopRight.png" alt="" width={390} height={264} className={classes.audienceLineTopRight} />
			<Image src="/media/home/audienceLineMidLeft.png" alt="" width={325} height={77} className={classes.audienceLineMidLeft} />
			<Image src="/media/home/audienceLineMidRight.png" alt="" width={389} height={264} className={classes.audienceLineMidRight} />
			<Image src="/media/home/audienceLineBottomLeft.png" alt="" width={520} height={208} className={classes.audienceLineBottomLeft} />
			<Image src="/media/home/audienceLineBottomRight.png" alt="" width={100} height={152} className={classes.audienceLineBottomRight} />

			<h2 className={classes.audienceTitle}>SOLUTION для тих, хто:</h2>
			<p className={`${classes.audienceItem} ${classes.audienceItemOne}`}>часто відчуває себе «не в собі»</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemTwo}`}>живе в постійному перенавантаженні</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemThree}`}>не може по-справжньому розслабитись</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemFour}`}>втрачає фокус і швидко вигорає</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemFive}`}>хоче швидко повернути центр і ясність</p>
		</section>
	);
}
