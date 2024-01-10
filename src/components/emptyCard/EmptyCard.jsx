import classes from './EmptyCard.module.css';

const EmptyCard = ({emptyContent}) => {
  return (
    <p className={classes.emptyCard}>{emptyContent}</p>
  );
};

export default EmptyCard;