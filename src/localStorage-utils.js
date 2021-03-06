import { USER } from './App.js';

export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER);

    if (user && user.token) {
        return JSON.parse(user);
    } else {
        return {
            id: '',
            email: '',
            token: ''
        }
    }
}

export function putUserInLocalStorage(user) {


    localStorage.setItem(USER, JSON.stringify(user));
}
