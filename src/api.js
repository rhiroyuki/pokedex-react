import axios from 'axios'

export default axios.create({
  baseURL: 'https://pokedex-setec-api.herokuapp.com/pokemon',
  timeout: '5000',
})
