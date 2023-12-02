import client from './client';

const addTank = (bomb) => client.post('/fuel-balance', bomb);

const getTank = () => client.get('/fuel-balance/all');

const deleteTank = () => client.delete('/fuel-balance');

export default {
    addTank,
    getTank,
    deleteTank
}