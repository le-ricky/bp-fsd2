import react from 'react';
import axios from 'axios';


const getUser = async evt => {
    evt.preventDefault();

    try {
        const res = await axios.get(`https://cloud.mongodb.com/api/atlas/v1.0/groups/6132672e3ff52035c4770eb9/databaseUsers`)
            console.log(res)
            // console.log('hello')
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

export default getUser;