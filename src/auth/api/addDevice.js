import client from './client';

const addDevice = (bomb) => client.post('/device', bomb);

const deleteDevice = () => client.delete('/device'); 

const getDevice = () => client.get('/device');



export default {
    addDevice,
    deleteDevice,
    getDevice
}