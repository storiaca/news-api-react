import { useState } from 'react';

function Pagination({
  postsPerPage,
  totalPosts,
  onPaginate,
}: PaginationPropsType) {
  const [activePage, setActivePage] = useState<number>(1);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mb-2 mt-8">
      <nav aria-label="Page navigation">
        <ul className="flex items-center justify-center -space-x-px h-8 text-sm">
          {pageNumbers.map((number: number) => (
            <li key={number} className="pagination-list">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onPaginate(number);
                  setActivePage(number);
                }}
                href="!#"
                className={`${
                  number === activePage
                    ? 'pagination-list-item active'
                    : 'pagination-list-item'
                }`}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
