import { useState } from 'react';
import RenderProducts from './RenderProducts';

const Products = ({ products, category, setProducts }) => {
  const [text, setText] = useState('');
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    product_quantity: '',
    category_id: '',
  });
  const [suggestions, setSuggestions] = useState([]);
  const textChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = category.filter((cat) => {
        const regex = new RegExp(`${text}`, 'gi');
        return cat.category_name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  const onSuggest = (categoryName) => {
    setText(categoryName);

    let id = category.find((cat) => cat.category_name === categoryName).id;
    setNewProduct({
      ...newProduct,
      category_id: id,
    });
    setSuggestions([]);
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then((r) => r.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
      });
    setNewProduct({
      product_name: '',
      product_description: '',
      product_price: '',
      product_quantity: '',
      category_id: '',
    });
    setText('');
  };

  return (
    <div className='product-container'>
      <div className='product-form-container'>
        <form onSubmit={handleSubmit} className='add-product-form'>
          <label className='product-custom-field'>
            <input
              type='text'
              name='product_name'
              autoComplete='off'
              required={true}
              className='product-name'
              value={newProduct.product_name}
              onChange={handleChange}
            />
            <span className='product-placeholder'>Product</span>
          </label>

          <div className='product-price-container'>
            <label className='product-custom-field'>
              <h6>Price</h6>
              <input
                type='number'
                name='product_price'
                autoComplete='off'
                required={true}
                className='price'
                step='any'
                placeholder='$'
                value={newProduct.product_price}
                onChange={handleChange}
              />
            </label>

            <label className='product-custom-field'>
              <h6>Quantity</h6>
              <input
                type='number'
                className='product-quantity'
                name='product_quantity'
                autoComplete='off'
                required={true}
                min='1'
                max='500'
                value={newProduct.product_quantity}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className='product-category-container'>
            <label className='product-custom-field'>
              <h6>Pick Category</h6>
              <input
                onChange={(e) => textChange(e.target.value)}
                name='text'
                type='text'
                autoComplete='off'
                value={text}
                placeholder='Search...'
                className='addCategory'
              />
              {suggestions &&
                suggestions.map((suggestion) => (
                  <div
                    className='suggestion'
                    onClick={() => onSuggest(suggestion.category_name)}
                    key={suggestion.id}
                  >
                    <p>{suggestion.category_name}</p>
                  </div>
                ))}
            </label>
          </div>
          <div className='product-des-custom-field'>
            <textarea
              type='text-area'
              className='product-description'
              name='product_description'
              autoComplete='off'
              required={true}
              rows='4'
              cols='50'
              value={newProduct.product_description}
              onChange={handleChange}
            ></textarea>
            <span className='product-des-placeholder'>Description</span>
          </div>

          <button>Add Product</button>
        </form>
      </div>
      <div className='render-product'>
        <RenderProducts products={products} setProducts={setProducts} />
      </div>
    </div>
  );
};

export default Products;
