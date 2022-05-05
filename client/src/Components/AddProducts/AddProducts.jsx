import React from 'react'
import { useState } from 'react'
import './AddProducts.css'

function AddProducts() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const handleAddproduct = (e) => {
        e.preventDefault()
    }
    return (
        <form action='/home' className='form' method='post' onSubmit={handleAddproduct}>
            <div className="form-content">
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputname4">Name</label>
                        <input name='name' type="text" className="form-control" id="inputname4" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputPrice4">Price</label>
                        <input name='price' type="text" className="form-control" id="inputPrice4" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputQuantity4">Quantity</label>
                        <input name='Quantity' type="text" className="form-control" id="inputQuantity4" placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}  />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputCategory4">Category</label>
                        <input name='category' type="text" className="form-control" id="inputCategory4" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)}  />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Add Product</button>
        </form>
    )
}

export default AddProducts