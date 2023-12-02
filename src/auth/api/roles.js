import client from './client';

const roles = () => client.get('/role');

export default {
    roles
}