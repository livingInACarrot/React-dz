import React, { useState } from 'react';
import { IProduct, IFilter } from '../../entities/IProduct.ts';
import Product from '../Card/Card.tsx';
import ModalWindow from '../ModalWindow/ModalWindow.tsx';
import { Categories } from '../../entities/Categories.ts';

//var products_filtered = products;
//здесь тоже не стоит использовать var, одну из причин описал ниже
//во вторых, если ты могла заметить, когда у тебя в products_filtered присваивалось новое значение, оно не отображалось
//это связано с тем, что  React не видит этих изменений
//для того, чтобы при изменениях происходил перерендер компонентов, необходимо использовать useState
//его я вынес в компонент App.tsx

export function applyFilters({title, onStock, category}: IFilter, products: IProduct[]) { //Функции стоит называть с маленькой буквы//camelCase
  let result = products; //не нужно использовать var, лучше использовать let
  //у var сломанная область видимости, это давняя проблема JS, а соответственно и TS
  //let - это тот же var только с адекватно работающей областью видимости
  //let доступна только в блоке, где ее объявили, например, в этой функции(ApplyFilters)
  //если мы будем использовать var, то получить к ней доступ можно будет извне, что может привести к ошибкам в логике поведения

  // Фильтр по названию
  if (title != '') {
    const pattern = new RegExp(`\\b${title}\\b`, 'i');
    result = result.filter((product: { name: string }) =>
      pattern.test(product.name)
    );
  }

  // В наличии
  if (onStock) {
    result = result.filter(
      (product: { quantity: number }) => product.quantity > 0
    );
  }

  // Категория соответствует
  if (category != '') {
    result = result.filter(
      ({ category: productCategory }) => productCategory == category 
      //Тут и так на вход подается объект типа IProduct, мы с помощью диструктуризации(фигурных скобок {}) получает из объекта свойство category
      //Также нет необходимости использовать enum и указывать тип категории здесь, это лучше сделать в объявлении типа IProduct
    );
  }
  return result;
}

interface Props {
  products: IProduct[];
  filter: IFilter;
}

const ProductList = ({ products, filter }: Props) => {
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
    <div
      style={{
        width: '100%',
        marginLeft: '79px',
        marginRight: '80px',
        marginTop: '100px',
        marginBottom: '100px',
        overflowY: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '20px',
          maxHeight: '100%',
          alignItems: 'center',
        }}
      >
        {applyFilters(filter, products).map((product: IProduct) => (
          <Product
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
