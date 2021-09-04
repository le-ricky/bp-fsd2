import react from 'react';
import {useState} from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import TextField from '@material-ui/core/TextField';


// import {API} from '../config'

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

    const {name, email, phoneNumber, address, error, success, buttonText} = state;

    const handleChange = name => evt => {
        setState({
            ...state,
            [name]: evt.target.value,
            error: '',
            success: '',
            buttonText: 'Save'
        })
    }

    const handleSubmit = async evt => {
        evt.preventDefault();
        setState({...state, buttonText: 'Saving'});

        try {
            const res = await axios.post(`http://localhost:8000/api/createUser`, {
                name, email, phoneNumber, address
            })
                console.log(res)
                console.log('hello')
                // setState({
                //     ...state,
                //     name: '',
                //     email: '',
                //     phoneNumber: '',
                //     buttonText: 'Submitted',
                //     success: res.data.message
                // })
        } catch (error) {
            console.log(error)
            // setState({...state, buttonText:'Save', error: error.response.data.error}) 
        }
    }

    const createUserForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <TextField variant="filled" label="Name" fullWidth margin="normal" value={name} onChange={handleChange('name')}/>
            </div>
            <div className="form-group">
                <TextField variant="filled" label="Email" fullWidth margin="normal" value={name} onChange={handleChange('name')}/>
            </div>
            <div className="form-group">
                <TextField variant="filled" label="Phone Number" fullWidth margin="normal" value={name} onChange={handleChange('name')} />
            </div>
            <div className="form-group">
                <TextField variant="filled" label="Address" fullWidth margin="normal" value={name} onChange={handleChange('name')} />
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
        {/* {success && success} */}
        {/* {error && error} */}
        {createUserForm()}
        {JSON.stringify(state)}
        </Layout>
}
export default CreateUser;