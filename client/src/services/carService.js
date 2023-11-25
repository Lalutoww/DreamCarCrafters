import * as request from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data/cars';

export const getAll = async () => {
   const result = await request.get(baseUrl);

   return Object.values(result)
};


export const create = async (carData) => {
   const result = await request.post(baseUrl,carData);

   return result;
};