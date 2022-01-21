import React, { AriaAttributes } from "react";

// Styles
import styles from "./Pagination.module.sass";

interface PaginationProps {
	handlePageChange: React.Dispatch<React.SetStateAction<number>>;
	currentPage: number;
	totalPages: number;
}

const Pagination = ({ handlePageChange, currentPage, totalPages }: PaginationProps) => {
	console.log("totalPages", totalPages);
	const pages = Array.from(Array(totalPages).keys());

	const onPaginationItemPress = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		e.preventDefault();
		// Update current page
		if (e.currentTarget.dataset.arrow === "left") {
			handlePageChange(currentPage - 1);
			return;
		}
		if (e.currentTarget.dataset.arrow === "right") {
			handlePageChange(currentPage + 1);
			return;
		}
		if (e.currentTarget.dataset.arrow === "first") {
			handlePageChange(11);
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
				<li data-arrow="first" onClick={onPaginationItemPress}>
					<a href="">
						<span aria-hidden="true">&laquo;</span>
						<span className="visuallyhidden">Primer página de avisos</span>
					</a>
				</li>

				<li data-arrow="prev" onClick={onPaginationItemPress}>
					<a href="" data-arrow="prev">
						<span aria-hidden="true">&lsaquo;</span>
						<span className="visuallyhidden">Anterior página avisos</span>
					</a>
				</li>

				{pages.map((_, index) => {
					const isCurrentPage = index === currentPage;
					const ariaAttributes: AriaAttributes = isCurrentPage ? { "aria-current": "page" } : {};

					return (
						<li onClick={onPaginationItemPress}>
							<a href="" {...ariaAttributes}>
								<span className="visuallyhidden">pagina </span> {index + 1}
							</a>
						</li>
					);
				})}

				<li data-arrow="next" onClick={onPaginationItemPress}>
					<a href="">
						<span className="visuallyhidden">Siguiente página de Avisos</span>
						<span aria-hidden="true">&rsaquo;</span>
					</a>
				</li>

				<li data-arrow="last" onClick={onPaginationItemPress}>
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
