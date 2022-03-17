import React, { AriaAttributes } from "react";

// Styles
import styles from "./Pagination.module.sass";

interface PaginationProps {
	handlePageChange: React.Dispatch<React.SetStateAction<number>>;
	currentPage: number;
	totalPages: number;
}

interface PostData {}

export interface PostFa {
	title: string;
}

const Pagination = ({ handlePageChange, currentPage, totalPages }: PaginationProps) => {
	const pages = Array.from(Array(totalPages).keys()).slice(0, 10);

	const onPaginationItemPress = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		e.preventDefault();
		// Update current page
		if (e.currentTarget.dataset.arrow === "prev") {
			handlePageChange(currentPage - 1);
			return;
		}
		if (e.currentTarget.dataset.arrow === "next") {
			handlePageChange(currentPage + 1);
			return;
		}
		if (e.currentTarget.dataset.arrow === "first") {
			handlePageChange(1);
			return;
		}
		if (e.currentTarget.dataset.arrow === "last") {
			handlePageChange(totalPages);
			return;
		}

		handlePageChange(parseInt(e.currentTarget.dataset.page as string));
	};

	return (
		<nav aria-label="pagination" className={styles.Pagination}>
			<ul className={styles.PaginationList}>
				<li
					data-arrow="first"
					onClick={onPaginationItemPress}
					className={currentPage === 1 ? styles.PaginationDisabledArrow : ""}
				>
					<a href="">
						<span aria-hidden="true">&laquo;</span>
						<span className="visuallyhidden">Primer página de avisos</span>
					</a>
				</li>

				<li
					data-arrow="prev"
					onClick={onPaginationItemPress}
					className={currentPage === 1 ? styles.PaginationDisabledArrow : ""}
				>
					<a href="" data-arrow="prev">
						<span aria-hidden="true">&lsaquo;</span>
						<span className="visuallyhidden">Anterior página avisos</span>
					</a>
				</li>

				{pages.map((_, index) => {
					const isCurrentPage = index + 1 === currentPage;
					const ariaAttributes: AriaAttributes = isCurrentPage ? { "aria-current": "page" } : {};

					return (
						<li
							key={index}
							onClick={onPaginationItemPress}
							className={isCurrentPage ? styles.PaginationCurrentPage : ""}
							data-page={index + 1}
						>
							<a href="" {...ariaAttributes}>
								<span className="visuallyhidden">pagina </span> {index + 1}
							</a>
						</li>
					);
				})}

				<li
					data-arrow="next"
					onClick={onPaginationItemPress}
					className={currentPage === totalPages ? styles.PaginationDisabledArrow : ""}
				>
					<a href="">
						<span className="visuallyhidden">Siguiente página de Avisos</span>
						<span aria-hidden="true">&rsaquo;</span>
					</a>
				</li>

				<li
					data-arrow="last"
					onClick={onPaginationItemPress}
					className={currentPage === totalPages ? styles.PaginationDisabledArrow : ""}
				>
					<a href="">
						<span className="visuallyhidden">Última página de avisos</span>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default React.memo(Pagination);
