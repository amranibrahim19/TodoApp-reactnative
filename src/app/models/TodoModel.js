import { edit, save, dismiss } from '../controllers/TodoController';

class TodoModel {
    constructor(user, title, description, finished = false, id = undefined) {
        this.user = user;
        this.title = title;
        this.description = description;
        this.finished = finished;
        this.id = id;
    }

    async save() {
        const id = await save(this);

        if (!id) {
            throw new Error('Error saving todo');
        }

        this.id = id;
        return true;
    }

    async edit() {
        if (!this.id) {
            throw new Error('Cannot edit TODO before it was saved.');
        }

        const edited = await edit(this);

        if (!edited) {
            throw new Error('Error editing todo');
        }

        return true;
    }

    async dismiss() {
        if (!this.id) {
            throw new Error('Cannot dismiss TODO before it was saved.');
        }

        const dismissed = await dismiss(this);

        if (!dismissed) {
            throw new Error('Error dismissing todo');
        }

        return true;
    }

}

export default TodoModel;