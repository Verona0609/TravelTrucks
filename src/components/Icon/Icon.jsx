import Icons from '/public/svg/sprite.svg';

export const Icon = ({ id, className, size }) => {
  return (
    <svg className={className} height={size} width={size}>
      <use href={`/svg/sprite.svg#${id}`}></use>
    </svg>
  );
};
