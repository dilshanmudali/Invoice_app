import {useState, Fragment} from 'react'
import ReadOnlyRow from './ReadRow'
import EditRow from './EditRow'

const RenderCategory = ({category, handleDelCategory, setCategory, userId}) => {

    
    const [catId, setCatId] = useState(null)
    const [newName, setNewName] = useState({
        "user_id" : userId,
        "category_name": "",
    })

    const handleEditCat = (e,catId) => {
       e.preventDefault()
       setCatId(catId)
    }
    
    const handleChange = e => {
        setNewName({
            ...newName,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/categories/${catId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                category_name: newName.category_name,
            })
        })
        .then(r => r.json())
        .then(updateCat => {
            const updatedCatList = category.map(cat => {
                if(cat.id === updateCat.id){
                    return updateCat;
                }
                else{
                    return cat
                }
            })
            setCategory(updatedCatList);
        })
        setNewName({
            "category_name": ""
        })
        setCatId(null)
    }

    const handleBack = () => {
        setCatId(null)
    }
    
    return (
       <div className='render-products-container'>
           <form onSubmit={handleSubmit}>
            <table className='render-table'>
                <thead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Edit/Del</th>
                    </tr>
                    </thead>
                    <tbody>{category.map(cato => ( 
                        <Fragment key={cato.id}>
                            {catId === cato.id ? (
                                <EditRow cato={cato} handleChange={handleChange}
                                newName={newName}
                                handleBack={handleBack}/>
                            ) : (
                                <ReadOnlyRow cato={cato} handleDelCategory={handleDelCategory}
                                handleEditCat={handleEditCat}/>
                            )}
                        </Fragment>
                            ))}                                 
                    </tbody>
            </table>
           </form>
       </div>
    )
}

export default RenderCategory
