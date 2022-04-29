import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = (id) => API.get(`/posts/${id}`);
export const newPost = (newPost) => API.post('/posts', newPost);