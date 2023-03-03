type ShowMoreProps = {
  onClick: () => void;
}

function ShowMore({onClick}: ShowMoreProps): JSX.Element {
  return (
    <div className="review-block__buttons">
      <button className="btn btn--purple" type="button" onClick={onClick}>Показать больше отзывов
      </button>
    </div>
  );
}

export default ShowMore;
