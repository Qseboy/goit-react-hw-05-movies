import css from './CastItem.module.css';

const CastItem = ({ cast }) => {
  const {
    name = 'name not found',
    character = 'character not found ',
    profile_path,
  } = cast;

  const actorPhotoUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg';

  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <div className={css.imagesWrapper}>
          <img
            className={css.images}
            src={`${actorPhotoUrl}`}
            alt={`${name}`}
          />
        </div>
        <div className={css.details}>
          <p className={css.name}>{name}</p>
          <p>Character: {character}</p>
        </div>
      </div>
    </li>
  );
};

export default CastItem;
