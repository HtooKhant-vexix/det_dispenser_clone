import client from './client';

const addManager = (bomb) => client.post('/user/register',bomb);



export default {
    addManager
}