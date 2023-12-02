import Client from './client';

const accounts = () => Client.get('/user/admin');

const addRole = (obj) => Client.patch('/user/add/role',obj);


export default {
    accounts,
    addRole
}