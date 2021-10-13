import axios from 'axios'
const localStorage = window.localStorage

const Favorite = {
  getAll: () => axios.get('/api/favorites', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  create: favorite => axios.post('/api/favorites', favorite, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  find: () => axios.get('/api/favorites/')
}

export default Favorite