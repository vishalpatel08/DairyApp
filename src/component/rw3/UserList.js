import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUser] = useState([]);

        useEffect(()=> {
        loadUsers();
        },[]);

        const loadUsers = async () =>{
            const result = await axios.get("http://localhost:3003/users"); //https://v1.nocodeapi.com/hydra007/google_sheets/MdEyWkdWQAPkphTq?tabId=Sheet2
            setUser(result.data);
        }

        const onDelete = async id =>{
            await axios.delete(`http://localhost:3003/users/${id}`);
            loadUsers();
        }
    return(
        <div className='d-uselist'>
            <table class="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr>
                                <th scope="row" >{index+1}</th>
                                <Link to={`/userdata/${user.id}`}> <td>{user.name}</td></Link>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList