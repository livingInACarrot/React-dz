import React from 'react';
import './styles.css';
import { IProduct } from '/src/entities/IProduct.ts';
import emptyImage from '../../images/empty.jpg';

interface IModalWindow {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

const ModalWindow: React.FC<IModalWindow> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          x
        </button>
        <div className="modal-header">
          <h3>{product.name}</h3>
        </div>
        <div className="modal-body">
          <p>{product.category}</p>
          <img
            src={product.image || emptyImage}
            alt={product.name}
            className="modal-image"
          />
          <p>{product.description}</p>
          <br />
          <h1>
            В наличии {product.quantity} {product.unit}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
