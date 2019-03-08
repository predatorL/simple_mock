import request from '../request';

export function query(data) {
    return request.get('/project', data);
}

export function queryOne({id}) {
    return request.get('/project/' + id);
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

export function updateMock({data}) {
    return request.post('/project/update-mock', data);
}
