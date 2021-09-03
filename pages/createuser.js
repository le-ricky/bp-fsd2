import react from 'react';
import {useState} from 'react';

import Layout from '../components/Layout';

const CreateUser = () => {

    const [state, setState = useState({
        name:'',
        email:'',
        phoneNumber:'',
        address:'',
        success:'',
        error:'',
        
    })]

    const createUserForm = () => (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
                <input type="tel" className="form-control" placeholder="Phone Number"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Address"/> 
            </div>
            <div className="form-group">
                <button className="btn">Save</button> 
            </div>
            <div className="form-group">
                <button className="btn">Delete</button> 
            </div>
        </form>
    )
    
    return <Layout>
        {createUserForm()}
        </Layout>
}
export default CreateUser;