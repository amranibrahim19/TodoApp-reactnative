import { store } from '../../redux/Store';

const url = 'http://localhost:1337/todos';


export const save = async todo => {
    const requestBody = JSON.stringify({
        title: todo.title,
        description: todo.description,
        finished: todo.finished,
        user: todo.user.id
    });

    const requestConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.getState().jwt}`
        },
        body: requestBody
    };

    const response = await fetch(url, requestConfig);

    const json = await response.json();

    if (json.error) {
        throw new Error(json.error);
    }

    return json._id;
};

export const edit = async todo => {
    const requestBody = JSON.stringify({
        title: todo.title,
        description: todo.description,
        finished: todo.finished,
        user: todo.user.id
    });

    const requestConfig = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${store.getState().jwt}`,
            'Content-Type': 'application/json',
        },
        body: requestBody
    };

    const response = await fetch(`${url}/${todo._id}`, requestConfig);
    const json = await response.json();

    if (json.error) {
        throw new Error(json.error);
    }

    return true;
};

export const dissmiss = async todo => {
    const response = await fetch(`${url}/${todo._id}`, {
        headers: { Authorization: `Bearer ${store.getState().jwt}` },
    });

    const json = await response.json();

    if (json.error) {
        throw new Error(json.error);
    }

    return true;
};