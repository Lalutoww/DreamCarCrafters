import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/parts';

export const getAll = async (carId) => {
    const query = new URLSearchParams({
        where: `carId="${carId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (carId, partData) => {
    const newPart = await request.post(baseUrl, {
        carId,
        ...partData
    });

    return newPart;
};