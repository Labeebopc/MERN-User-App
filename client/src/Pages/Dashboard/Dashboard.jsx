import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {

    return (
        <div className='product-list'>
            <div className='btnlogout'><button className='btn btn-secondary mb-3'>Log Out</button></div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            <Link to='/addproducts' className='btn btn-primary mt-3'>Add Products</Link>

        </div>
    )
}

export default Dashboard