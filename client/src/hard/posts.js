import * as api from '../api'

//action creators = func that return action(object w/ type & payload)

const getPosts = () => async(dispatch) => {
try {
    const {data} = await api.fetchPosts
} catch (error) {
    
}



    const action ={type: 'FETCH_ALL', payload: []}

    dispatch (action)
}