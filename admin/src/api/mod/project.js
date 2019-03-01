import request from '../request';

export function query(data) {
    return request.get('/project', data);
}

export function create(data) {
    return request.post('/project', data);
}

export function update(data) {
    return request.put('/project', data);
}

export function remove(data) {
    return request.delete('/project', data);
}