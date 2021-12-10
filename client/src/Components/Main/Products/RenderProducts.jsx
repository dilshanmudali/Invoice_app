import {Fragment, useState} from 'react'
import ReadOnlyRow from './ReadOnlyRow'
import EditRow from './EditRow'

const RenderProducts = ({products, handleDelProd, setProducts}) => {

    const [editProd, setEditProd] = useState(null)
    const [newValues, setNewValues] = useState({
        "product_price" : "",
        "product_quantity" : "",
    })

    const handleEditProd = (e,prodId) => {
       e.preventDefault()
       setEditProd(prodId)
    }
    
    const handleChange = e => {
        setNewValues({
            ...newValues,
            [e.target.name] : e.target.value
        })
    }

    const handleEditsubmit = (e) => {
        e.preventDefault()
        console.log(editProd)
        fetch(`/products/${editProd}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                product_price: newValues.product_price,
                product_quantity : newValues.product_quantity
            })
        })
        .then(r => r.json())
        .then(updatedProd => {
            const updatedProdList = products.map(prod => {
                if(prod.id === updatedProd.id){
                    return updatedProd;
                }
                else{
                    return prod
                }
            })
            setProducts(updatedProdList);
        })
        setNewValues({
            "product_price" : "",
            "product_quantity" : "",
        })
        setEditProd(null)
    }

    const handleGoBack = () => {
        setEditProd(null)
    }

    return (
        <div className='render-products-container'>
        <form onSubmit={handleEditsubmit}>
            <table className='render-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit/Del</th>
                    </tr>
                </thead>
                <tbody>{products.map(prod => (
                    <Fragment>
                        {editProd === prod.id ? (
                            <EditRow prod={prod} newValues={newValues} handleChange={handleChange} handleGoBack={handleGoBack}/>
                        ) : 
                            <ReadOnlyRow prod={prod} handleDelProd={handleDelProd} handleEditProd={handleEditProd} />
                        } 
                    </Fragment>
                    ))}              
                </tbody>
            </table>
        </form>
    </div>
    )
}

export default RenderProducts
