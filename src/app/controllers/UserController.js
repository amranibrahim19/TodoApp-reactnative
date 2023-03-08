// UserController.js
import { saveUser, deleteUser } from '../../redux/actions/UserActions';

/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = 'http://192.168.1.178:1337/';

/**
 * @param {UserModel} user
 */
export const login = async user => {
    const requestConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier: user.identifier,
            password: user.password,
        }),
    };

    const response = await fetch(`${url}/auth/local`, requestConfig)
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                return false;
            }

            saveUser(json.jwt, json.user);

            return true;
        }).catch(err => {
            console.log(err);
        });


    //   try {
    //     const response = await fetch(`${url}/auth/local`, requestConfig);
    //     const json = await response.json();

    //     if (json.error) {
    //       return false;
    //     }

    //     saveUser(json.jwt, json.user);

    //     return true;
    //   } catch (err) {
    //     console.log(err);
    //   }
};

/**
 * @param {UserModel} user
 */
export const logout = async user => {
    deleteUser();
};