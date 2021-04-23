import axios from 'axios';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './Project1.css'

const NewData = ()=>{
    let History = useHistory();
    const {id} = useParams();

    const [ user, setUser] = useState({
        "amount":"", 
        "fat":""
    })
    const { amount, fat} = user;
    const onInput = e =>{
        setUser({...user,[e.target.name]: e.target.value}) 
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post(`http://localhost:3003/users/${id}`, user);
        setUser( {amount:"", fat:""})
        console.log(user.amount);
        History.push("/")

    }
    return <div>
        <header >
            <h1 classamount="Newuser"> New User Info </h1>
        </header>
        <form onSubmit={ e => onSubmit(e)}>
            <div class="row mb-3">
                <label for="amount" class="col-sm-2 col-form-label"> Amount </label>
                <div class="col-sm-10">
                <input type="number" class="form-control" name="amount" value={amount} onChange={e => onInput(e)}/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="fat" class="col-sm-2 col-form-label">Fat</label>
                <div class="col-sm-10">
                <input type="number" class="form-control" name="fat" value={fat} onChange={e => onInput(e)}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default NewData