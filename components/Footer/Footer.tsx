import React from "react";

// Styles
import styles from "./Footer.module.sass";

const Footer = () => {
	return (
		<footer id="Footer" className={styles.footer}>
			<p>
				Hecho con
				<span role="img" aria-label="Heart">
					❤️
				</span>
				por{" "}
				<a href="http://lh.now.sh" target="_blank">
					Leandro Hanc
				</a>
			</p>
		</footer>
	);
};

export default Footer;
