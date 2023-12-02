import Client from './client';

const addTotalizer = (bomb) => Client.post(`/detail-sale/initial`, bomb); 

const getTotalizer = () => Client.get(`/detail-sale/pagi/1`);

const deleteTotalizer = (bomb) => Client.delete(`/detail-sale?_id=${bomb}`);

export default {
    addTotalizer,
    getTotalizer,
    deleteTotalizer
}