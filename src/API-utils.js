import request from 'superagent';

const URL = 'https://planets-auth.herokuapp.com'; //this is the API URL


export async function signupUser(email, password) {
    const response = await request.post(`${URL}/auth/signup`)
        .send({ email: email, password: password, name: 'Sam' })
    //JS allows if key and value names are same: ({ email, password })
    return response.body;
}


export async function loginUser(email, password) {
    const response = await request.post(`${URL}/auth/signin`)
        .send({ email: email, password: password, name: 'Sam' })
    return response.body;
}


export async function makeToDo(plan, token) {
    const response = await request
        .post(`${URL}/api/plans`)
        .set('Authorization', token)
        .send({ plan })
    return response.body;
}


export async function completeToDo(todoId, token) {
    const response = await request
        .put(`${URL}/api/plans${todoId}`)
        .set('Authorization', token)
    return response.body;
}

// this is approximately what the 'fetchPlans' function declared at the top of ToDosList.js is for:

// export async function getAllToDos(token) {
//     const response = await request
//         .get(`${URL}/api/plans`)
//         .set('Authorization', token)
//     return response.body;
// }

export async function getAllPlans() {
    const response = await request.get(`${URL}/plans`);
    return response.body;
}
