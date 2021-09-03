import react from 'react';
import {useState} from 'react';

import Layout from '../components/Layout';

const CreateUser = () => {

    const [state, setState ] = useState({
        name:'',
        email:'',
        phoneNumber:'',
        address:'',
        success:'',
        error:'',
        buttonText: 'Save'
    })

    const {name, email, phoneNumber, address, error, success, button} = state;

    const handleChange = name => evt => {
        setState({
            ...state,
            [name]: evt.target.value,
            error: '',
            success: '',
            buttonText: 'Save'
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        console.table({name, email, phoneNumber})
    }

    const createUserForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input value={phoneNumber} onChange={handleChange('phoneNumber')} type="tel" className="form-control" placeholder="Phone Number"/>
            </div>
            <div className="form-group">
                <input value={address} onChange={handleChange('address')} type="text" className="form-control" placeholder="Address"/> 
            </div>
            <div className="form-group">
                <button className="btn">{state.buttonText}</button> 
            </div>
            <div className="form-group">
                <button className="btn">Delete</button> 
            </div>
        </form>
    )
    
    return <Layout>
        {createUserForm()}
        {JSON.stringify(state)}
        </Layout>
}
export default CreateUser;