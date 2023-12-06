import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/likes';

export const getAll = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const like = async (carId, userId) => {
    const newLike = await request.post(baseUrl, {
        carId,
        userId
    });

    return newLike;
};