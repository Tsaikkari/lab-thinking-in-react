import React from 'react';

const ProductRow = ({ product, key }) => {
  return (
    <>
      <tr key={key}>
        {product.stocked === false ? (
          <td style={{color: 'red'}}>{product.name}</td>
        ) : (
          <td>{product.name}</td>
        )}
        <td>{product.price}</td>
      </tr>
    </>
  );
};

export default ProductRow;
