import Image from "next/image";
import classes from "./AuthorSection.module.scss";

export default function AuthorSection() {
	return (
		<section id="author" className={classes.author}>
			<h2 className={classes.authorTitle}>Авторка методу — Олена Третяк</h2>
			<p className={classes.authorMeta}>( практик стану, психолог, дослідниця сприйняття )</p>

			<div className={classes.authorPhotoWrap}>
				<Image
					src="/media/home/authorPhoto.png"
					alt="Олена Третяк"
					fill
					sizes="(max-width: 768px) 40vw, 215px"
					className={classes.authorPhoto}
				/>
			</div>

			<blockquote className={classes.authorQuote}>
				“ SOLUTION — це результат усіх років моєї практики, що триває вже понад 10 років. І це
				стан, який я проживаю і передаю голосом. Голос стає провідником — і тіло, увага, енергія
				природно переходять в інший режим. ”
			</blockquote>
		</section>
	);
}
