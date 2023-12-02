import Client from './client';


const addPermit = (obj) => Client.patch('/user/add/permit',obj);


export default {
    addPermit
}