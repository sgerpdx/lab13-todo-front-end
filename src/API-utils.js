import request from 'superagent';

const URL = 'https://localhost:3000'; //this is the API URL

export function signupUser(email, password) {
    const response = await request.post(`${URL}/auth/signup`)
        .send({ email: email, password: password })
    //JS allows if key and value names are same: ({ email, password })

    return response.body;

}

export function loginUser(email, password) {
    const response = await request.post(`${URL}/auth/signin`)
        .send({ email: email, password: password })


    return response.body;

}


export function createToDo(todo, token) {
    const response = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({ todo })


    return response.body;

}


export function completeToDo(todoId, token) {
    const response = await request
        .put(`${URL}/api/todos${todoId}`)
        .set('Authorization', token)


    return response.body;

}


export function getAllToDos(token) {
    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)


    return response.body;

}