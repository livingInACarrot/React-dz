import './styles.css';
import { IProduct } from '/src/entities/IProduct.ts';
import emptyImage from '../../images/empty.jpg';

const Card = ({
  name,
  description,
  category,
  quantity,
  unit,
  image,
  onClick,
}: IProduct & { onClick: () => void }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="card-title">{name}</h3>
      <p className="card-category">{category}</p>
      <img src={image || emptyImage} alt={name} className="card-image" />
      <p className="card-quantity">
        В наличии {quantity} {unit}
      </p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
