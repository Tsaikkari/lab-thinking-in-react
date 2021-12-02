import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <input type='text' placeholder='Search for a product' />
      <input type='checkbox' name='products' id='products' />
      <label htmlFor='products'>Only show products in stock</label>
    </div>
  )
}

export default SearchBar
