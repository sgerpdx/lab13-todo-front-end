import { USER } from './App.js';

export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER);

    if (user) {
        return JSON.parse(user);
    } else {
        return {
            id: '',
            email: '',
            token: ''
        }
        //we'll likely not use this, but it's good to be safe (to have an {} to return)
    }
}

export function putUserInLocalStorage() {
    //this goes into handleUserChange in App.js...and contains here the 'setItem'
}