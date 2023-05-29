import axios from 'axios';
// const axios = require('axios').default;
const KEY = '8478375b0b2eb45c66ac10717e1ab9a2';
const URL = 'https://api.themoviedb.org/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const serverHitsList = async (page = 1) => {
  const serverDataURL = `${URL}3/trending/movie/day?api_key=${KEY}&page=${page}&language=uk-UA`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const serverSearch = async (name, page = 1) => {
  const serverDataURL = `${URL}3/search/movie?api_key=${KEY}&language=uk-UA&query=${name}&page=${page}&include_adult=false`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const serverMovie = async id => {
  const serverDataURL = `${URL}3/movie/${id}?api_key=${KEY}&language=uk-UA`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const serverActors = async id => {
  const serverDataURL = `${URL}3/movie/${id}/credits?api_key=${KEY}&language=uk-UA`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const serverResponse = async (id, page = 1) => {
  const serverDataURL = `${URL}3/movie/${id}/reviews?api_key=${KEY}&language=uk-UA&page=${page}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const serverResponseUS = async (id, page = 1) => {
  const serverDataURL = `${URL}3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// async function serverHitsList(page = 1) {}

// async function serverSearch(name, page = 1) {}

// async function serverMovie(id) {}

// async function (id) {}

// async function serverResponse(id, page = 1) {}

// async function serverResponseUS(id, page = 1) {}
