import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='page-not-found'>

            Sorry, Page Not Found :(
                <br />
                <br />
                <br />

            <Link to='/login'>Go to Login Page</Link>

        </div>
    )
}

export default PageNotFound