import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const newPost = (newPost) => API.post('/posts', newPost);
export const updatePost= (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)