import {useState} from 'react'
import RenderCategory from './RenderCategory'

const AddCategory = ({category, userId, submitCategory, handleDelCategory}) => {

    const [addCategory, setAddCategory] = useState({
        "category_name": "",
        "user_id" : userId
    })  

    const handleChange = (e) => {
        setAddCategory({
            ...addCategory,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitCategory(addCategory)
        setAddCategory({
            "category_name" : "",
            "user_id" : userId
        })
    }

    return (
        <div className='category-container'>  
            <div className='category-form-container'>     
                <form onSubmit={handleSubmit} className='add-category-form'> 
                <label className='custom-field'>      
                    <input type="text" 
                    name="category_name"
                    autoComplete = 'off' 
                    required = {true}
                    value = {addCategory.category_name}
                    onChange={handleChange}
                    />
                    <span className='placeholder'>
                        Enter Category
                    </span>
                </label>
                    <button>Add Category</button>
                </form>
            </div>     
            <div className='render-category'>
                <RenderCategory category={category} handleDelCategory={handleDelCategory}/>
            </div>
        </div>
    )
}

export default AddCategory
