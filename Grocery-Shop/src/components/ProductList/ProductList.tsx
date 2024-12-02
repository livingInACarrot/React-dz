import React, { useState } from 'react';
import './styles.css';
import { IProduct } from '/src/entities/IProduct.ts';
import products from '/src/data/products.json';
import Card from '../Card/Card.tsx';
import ModalWindow from '../ModalWindow/ModalWindow.tsx';

const ProductList: React.FC = () => {
  const [isModalWindowOpen, setModalWindowOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const openModalWindow = (product: IProduct) => {
    setSelectedProduct(product);
    setModalWindowOpen(true);
  };

  const closeModalWindow = () => {
    setModalWindowOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="card-field">
      <div className="card-container">
        {products.map((product: IProduct) => (
          <Card
            key={product.id}
            {...product}
            onClick={() => openModalWindow(product)}
          />
        ))}
      </div>
      <ModalWindow
        isOpen={isModalWindowOpen}
        onClose={closeModalWindow}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductList;
