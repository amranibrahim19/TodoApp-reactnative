import { login, logout } from '../controllers/UserController';

class UserModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    async login() {
        const result = await login(this);

        if (!result) {
            // throw new Error('Error logging in');
            alert(result);
        }

        return true;
    }

    async logout() {
        const result = await logout(this);

        if (!result) {
            throw new Error('Error logging out');
        }

        return true;
    }
}

export default UserModel;