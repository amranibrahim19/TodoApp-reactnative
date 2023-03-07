import { login, logout } from '../controllers/UserController';

class UserModel {
    constructor(identifier, password) {
        this.identifier = identifier;
        this.password = password;
    }

    async login() {
        const result = await login(this);

        if (!result) {
            throw new Error('Error logging in');
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