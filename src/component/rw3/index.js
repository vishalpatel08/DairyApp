import React from 'react'
import './Project1.css'
import {Link} from 'react-router-dom'

const Frontpage = () => {

    return(
        <div className='f-div1'>
            <div className='f-div'>
                <div className='flink1'><Link to='/userlist' > <button id='p-button'> User List </button> </Link></div>
                <div className='flink2'><Link to='/adduser'><button id='p-button'> Add New User </button></Link></div>
            </div>
        </div>
        )
}

export default Frontpage
