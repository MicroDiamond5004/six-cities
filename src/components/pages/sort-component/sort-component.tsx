import { MouseEventHandler, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortType } from '../../../store/slices/main-offers-process/selectors';
import { changeSortType } from '../../../store/slices/main-offers-process/main-offers-process.slice';

type SortProps = {
  handlerOnChangeSort: (SortType: string) => void;
};

function SortComponent(props: SortProps) : JSX.Element {
  const { handlerOnChangeSort } = props;

  const [displayValue, setDisplayValue] = useState(false);
  const sortType = useAppSelector(getSortType); 
  const dispatch = useAppDispatch();

  const handlerOnClickSort = (evt: SyntheticEvent<HTMLLIElement>) => {
    handlerOnChangeSort(String(evt.currentTarget.dataset.type));
    dispatch(changeSortType(String(evt.currentTarget.textContent)));
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onMouseOver={() => setDisplayValue(true)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened" style={{'display': displayValue ? 'block' : 'none'}} onMouseLeave={() => setTimeout(() => setDisplayValue(false), 200)}>
        <li className={sortType === 'Popular' ? "places__option places__option--active" : "places__option"} onClick={handlerOnClickSort} data-type="Popular" tabIndex={0}>Popular</li>
        <li className={sortType === 'Price: low to high' ? "places__option places__option--active" : "places__option"} onClick={handlerOnClickSort} data-type="Low_Price" tabIndex={0}>Price: low to high</li>
        <li className={sortType === 'Price: high to low' ? "places__option places__option--active" : "places__option"} onClick={handlerOnClickSort} data-type="High_Price" tabIndex={0}>Price: high to low</li>
        <li className={sortType === 'Top rated first' ? "places__option places__option--active" : "places__option"} onClick={handlerOnClickSort} data-type="High_Rating" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortComponent;
