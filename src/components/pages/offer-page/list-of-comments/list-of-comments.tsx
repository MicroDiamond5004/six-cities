import { MutableRefObject, useRef} from 'react';
import React from 'react';

type ListOfCommnetsProps = {
  formRef: MutableRefObject<HTMLFormElement | null>;
}

type FormElProps = {
  rating: number;
  textEl: string;
}

function ListCommentsScreen(props: ListOfCommnetsProps) : JSX.Element | null {
  const {formRef} = props;
  const formDOM = formRef.current;
  const date = String(new Date().getFullYear());
  let rating = 5;
  let textEl = '';
  if (formDOM) {
    rating = Number(new FormData(formDOM).get('rating'));
    textEl = String(new FormData(formDOM).get('review'));
  }
  const formEl: FormElProps = {
    rating: 6,
    textEl: textEl
  };
  const formEls = useRef([formEl]);
  if (!formDOM || rating === 0) {
    if (formEls.current[0]?.rating === 6) {
      formEls.current.shift();
    }
    return null;
  }
  if (formEls.current[formEls.current.length - 1]?.rating !== rating || formEls.current[formEls.current.length - 1]?.textEl !== textEl) {
    formEls.current.push({
      rating: rating,
      textEl: textEl,
    });
  }
  return(
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{formEls.current.length}</span></h2>
      {
        formEls.current.map((formCurEl) => {
          const curRating = formCurEl.rating;
          const curText = formCurEl.textEl;
          return (
            <li key={Math.random()} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src='../../../markup/img/avatar-max.jpg' width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  Сергей
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{'width': `${curRating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {curText}
                </p>
                <time className="reviews__time" dateTime={date}>{date}</time>
              </div>
            </li>
          );
        })
      }
    </React.Fragment>
  );
}

export default ListCommentsScreen;