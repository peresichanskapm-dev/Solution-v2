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
			<div className={classes.audienceMask} aria-hidden="true">
				<Image
					src="/media/home/solutionMask.png"
					alt=""
					fill
					sizes="(max-width: 768px) 100vw, 96vw"
					className={classes.audienceMaskImage}
				/>
			</div>

			<Image src="/media/home/audienceLineTopLeft.png" alt="" width={251} height={159} className={classes.audienceLineTopLeft} />
			<Image src="/media/home/audienceLineTopRight.png" alt="" width={413} height={155} className={classes.audienceLineTopRight} />
			<Image src="/media/home/audienceLineMidLeft.png" alt="" width={325} height={77} className={classes.audienceLineMidLeft} />
			<Image src="/media/home/audienceLineMidRight.png" alt="" width={389} height={264} className={classes.audienceLineMidRight} />
			<Image src="/media/home/audienceLineBottomLeft.png" alt="" width={520} height={208} className={classes.audienceLineBottomLeft} />
			<Image src="/media/home/audienceLineBottomRight.png" alt="" width={100} height={152} className={classes.audienceLineBottomRight} />

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineOne}`}>
				<div className={classes.audienceMobileLineOneInner}>
					<Image src="/media/home/audienceMobileLine1.svg" alt="" fill sizes="122px" className={classes.audienceMobileLineShape} />
				</div>
			</div>

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineTwo}`}>
				<Image src="/media/home/audienceMobileLine2.svg" alt="" fill sizes="167px" className={classes.audienceMobileLineShape} />
			</div>

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineThree}`}>
				<div className={classes.audienceMobileLineThreeInner}>
					<Image src="/media/home/audienceMobileLine3.svg" alt="" fill sizes="198px" className={classes.audienceMobileLineShape} />
				</div>
			</div>

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineFour}`}>
				<div className={classes.audienceMobileLineFourInner}>
					<Image src="/media/home/audienceMobileLine4.svg" alt="" fill sizes="141px" className={classes.audienceMobileLineShape} />
				</div>
			</div>

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineFive}`}>
				<div className={classes.audienceMobileLineFiveInner}>
					<Image src="/media/home/audienceMobileLine5.svg" alt="" fill sizes="133px" className={classes.audienceMobileLineShape} />
				</div>
			</div>

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineSix}`}>
				<Image src="/media/home/audienceMobileLine6.svg" alt="" fill sizes="206px" className={classes.audienceMobileLineShape} />
			</div>

			<div className={`${classes.audienceMobileLine} ${classes.audienceMobileLineSeven}`}>
				<Image src="/media/home/audienceMobileLine7.svg" alt="" fill sizes="249px" className={classes.audienceMobileLineShape} />
			</div>

			<h2 className={classes.audienceTitle}>SOLUTION для тих, хто:</h2>
			<p className={`${classes.audienceItem} ${classes.audienceItemOne}`}>часто відчуває себе «не в собі»</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemTwo}`}>живе в постійному перенавантаженні</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemThree}`}>не може по-справжньому розслабитись</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemFour}`}>втрачає фокус і швидко вигорає</p>
			<p className={`${classes.audienceItem} ${classes.audienceItemFive}`}>хоче швидко повернути центр і ясність</p>
		</section>
	);
}
