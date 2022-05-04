import { FETCH_ALL, DELETE, UPDATE, CREATE } from "../calls/callTypes";
import * as api from "../api/index.js";

//action creators = func that return action(object w/ type & payload)

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedPosts = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchSearchedPosts(searchQuery);
    // need to destructure data twice bc !st making axios request, 2nd time bc we put in new obj where it has data property

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const newPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.newPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const supportPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.supportPost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
