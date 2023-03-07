import { saveUser, deleteUser } from '../../redux/actions/UserActions';

const url = 'http://localhost:1337';

export const login = async user => {
    const requestConfig = JSON.stringify({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier: user.identifier,
            password: user.password,
        }),
    });

    try {
        const response = await fetch(`${url}/auth/local`, requestConfig);
        const json = await response.json();

        if (json.error) {
            return false;
        }

        saveUser(json.jwt, json.user);

        return true;

    } catch (error) {
        alert(err);
        return false;
    }
};

export const logout = async user => {
    deleteUser();
};

