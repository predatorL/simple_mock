import request from '../request';


export function queryOne({id}) {
    return request.get('/rule/' + id);
}

export function create(data) {
    return request.post('/rule', data);
}

export function update(data) {
    return request.put('/rule', data);
}

export function remove(data) {
    return request.delete('/rule', data);
}
