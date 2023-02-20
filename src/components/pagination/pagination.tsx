import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { MAX_CARDS_ON_PAGE, DEFAULT_PAGE, PAGE_COUNTER_STEP, AppRoute } from '../../const';
import { getCameras } from '../../store/camera-process/selector';

function Pagination(): JSX.Element {
  const cameras = useAppSelector(getCameras);

  const { pageId } = useParams();

  const [currentPage, setCurrentPage] = useState(Number(pageId));

  const pageCount = Math.ceil(cameras.length / MAX_CARDS_ON_PAGE);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage - PAGE_COUNTER_STEP)} className={currentPage === DEFAULT_PAGE ? 'visually-hidden' : 'pagination__link pagination__link--text'} to={`${AppRoute.Catalog}/${currentPage - PAGE_COUNTER_STEP}`}>Назад</Link>
        </li>
        {Array.from({length: pageCount}, (_, index) => (
          <li className="pagination__item" key={index}>
            <Link onClick={() => setCurrentPage(PAGE_COUNTER_STEP + index)} className={`pagination__link ${(currentPage === (PAGE_COUNTER_STEP + index)) ? 'pagination__link--active' : ''}`} to={`${AppRoute.Catalog}/${PAGE_COUNTER_STEP + index}`}>{PAGE_COUNTER_STEP + index}</Link>
          </li>
        ))}
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage + PAGE_COUNTER_STEP)} className={currentPage === pageCount ? 'visually-hidden' : 'pagination__link pagination__link--text'} to={`${AppRoute.Catalog}/${currentPage + PAGE_COUNTER_STEP}`}>Далее</Link>
        </li>
        {/* <li className="pagination__item"><a className="pagination__link pagination__link--active" href="1">1</a></li>
        <li className="pagination__item"><a className="pagination__link" href="2">2</a></li>
        <li className="pagination__item"><a className="pagination__link" href="3">3</a></li>
        <li className="pagination__item"><a className="pagination__link pagination__link--text" href="2">Далее</a></li> */}
      </ul>
    </div>
  );
}

export default Pagination;
