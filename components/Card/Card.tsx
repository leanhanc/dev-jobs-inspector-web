import React from "react";
import classNames from "classnames";

// Styles
import styles from "./Card.module.sass";

interface CardProps {
	className?: string;
	Icon?: React.ReactNode;
	title: string;
	content: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, className, content }) => {
	return (
		<div className={classNames(styles.Card, className)}>
			<div className={styles.CardHeader}>
				{Icon && <div className={styles.CardIcon}>{Icon}</div>}
				<h3 className={styles.CardTitle}>{title}</h3>
			</div>

			<p className={styles.CardContent}>{content}</p>
		</div>
	);
};

export default Card;
