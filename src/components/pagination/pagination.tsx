import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { Page, APIRoute } from '../../const';
import { getCameras } from '../../store/cameras-process/selector';

function Pagination(): JSX.Element {
  const cameras = useAppSelector(getCameras);

  const { pageId } = useParams();

  const [currentPage, setCurrentPage] = useState(Number(pageId));

  const pageCount = Math.ceil(cameras.length / Page.MaxCards);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage - Page.CounterStep)} className={currentPage === Page.Default ? 'visually-hidden' : 'pagination__link pagination__link--text'} to={`${APIRoute.Catalog}/${currentPage - Page.CounterStep}`}>Назад</Link>
        </li>
        {Array.from({length: pageCount}, (_, index) => (
          <li className="pagination__item" key={index}>
            <Link onClick={() => setCurrentPage(Page.CounterStep + index)} className={`pagination__link ${(currentPage === (Page.CounterStep + index)) ? 'pagination__link--active' : ''}`} to={`${APIRoute.Catalog}/${Page.CounterStep + index}`}>{Page.CounterStep + index}</Link>
          </li>
        ))}
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage + Page.CounterStep)} className={currentPage === pageCount ? 'visually-hidden' : 'pagination__link pagination__link--text'} to={`${APIRoute.Catalog}/${currentPage + Page.CounterStep}`}>Далее</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
