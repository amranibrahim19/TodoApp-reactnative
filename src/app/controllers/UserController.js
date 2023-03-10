// UserController.js
import { saveUser, deleteUser } from '../../redux/actions/UserActions';
import axios from 'axios';

/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = 'http://192.168.1.178:8001/';

/**
 * @param {UserModel} user
 */
export const login = async user => {
    const requestConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
        }),
    };



    const data = {
        email: user.email,
        password: user.password,
    }
    const json = axios.post('http://192.168.1.178:8001/api/login', requestConfig)
        .then((res) => {
            saveUser(res.token, res.user);
            return true;
        })
        .catch((err) => {
            console.log(err);
        })





};

/**
 * @param {UserModel} user
        */
export const logout = async user => {
    deleteUser();
};