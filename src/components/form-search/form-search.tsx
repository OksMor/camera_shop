import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { getCamerasByName } from '../../store/cameras-process/selector';
import { fetchCamerasByNameAction } from '../../store/api-action';

import { APIRoute, Tab } from '../../const';


function FormSearch(): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const camerasByName = useAppSelector(getCamerasByName);
  // console.log(camerasByName);

  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleEnterKeyDown = (evt: KeyboardEvent<HTMLLIElement>, id: number) => {
    if (evt.key === 'Enter') {
      redirectToCamera(id);
    }
  };

  const redirectToCamera = (id: number) => {
    navigate(`${APIRoute.Cameras}/${id}/${Tab.Description}`);
    setName('');
  };

  useEffect(()=> {
    if (name) {
      dispatch(fetchCamerasByNameAction(name));}
  }, [dispatch, name]);

  return (
    <div data-testid="form-search" className={`form-search ${camerasByName.length > 0 && name ? 'list-opened' : ''}`}>

      <form onSubmit={(evt) => evt.preventDefault()}>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <DebounceInput debounceTimeout={300} onChange={handleSearchChange} value={name} className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" />
        </label>

        <ul className="form-search__select-list scroller">
          {camerasByName.map((camera) =>
            (<li onKeyDown={(evt) => handleEnterKeyDown(evt, camera.id)} onClick={() => redirectToCamera(camera.id)} key={`search-camera-${camera.id}`} className="form-search__select-item" tabIndex={0}>{camera.name}</li>))}
        </ul>

      </form>

      <button onClick={() => setName('')} className="form-search__reset" type="reset">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>

    </div>
  // <div className="form-search">

  //   <form>
  //     <label>
  //       <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
  //         <use xlinkHref="#icon-lens"></use>
  //       </svg>
  //       <input className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту"/>
  //     </label>
  //     <ul className="form-search__select-list">
  //       <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 8i</li>
  //       <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 7i</li>
  //       <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 6i</li>
  //       <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 5i</li>
  //       <li className="form-search__select-item" tabIndex={0}>Cannonball Pro MX 4i</li>
  //     </ul>
  //   </form>

  //   <button className="form-search__reset" type="reset">
  //     <svg width="10" height="10" aria-hidden="true">
  //       <use xlinkHref="#icon-close"></use>
  //     </svg><span className="visually-hidden">Сбросить поиск</span>
  //   </button>

  // </div>
  );
}

export default FormSearch;
