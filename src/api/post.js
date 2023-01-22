import Api from '../../api/Api.js';

export const getEvents = async () => {
  return await Api.get('/events');
}