import { useState, useContext } from 'react';
import RenderCategory from './RenderCategory';
import globalContext from '../../../Context/globalContext';
const AddCategory = () => {
  const context = useContext(globalContext);
  const category = context.category;
  const setCategory = context.setCategory;
  const userId = context.user.id;
  const [addCategory, setAddCategory] = useState({
    category_name: '',
    user_id: userId,
  });

  const handleChange = (e) => {
    setAddCategory({
      ...addCategory,
      [e.target.name]: e.target.value,
    });
  };

  //1. setting new category
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addCategory),
    })
      .then((r) => r.json())
      .then((newCategory) => {
        setCategory([...category, newCategory]);
      });

    setAddCategory({
      category_name: '',
      user_id: userId,
    });
  };

  return (
    <div className='category-container'>
      <div className='category-form-container'>
        <form onSubmit={handleSubmit} className='add-category-form'>
          <label className='custom-field'>
            <input
              type='text'
              name='category_name'
              autoComplete='off'
              required={true}
              value={addCategory.category_name}
              onChange={handleChange}
            />
            <span className='placeholder'>Enter Category</span>
          </label>
          <button>Add Category</button>
        </form>
      </div>
      <div className='render-category'>
        <RenderCategory
          category={category}
          setCategory={setCategory}
          //   handleDelCategory={handleDelCategory}
        />
      </div>
    </div>
  );
};

export default AddCategory;
