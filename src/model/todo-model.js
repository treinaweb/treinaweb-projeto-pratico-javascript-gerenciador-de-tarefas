export class TarefaModel {
    #title;
    #dueDate;
    #status;
    #id;

    constructor(title, dueDate) {
        this.#title = title;
        this.#dueDate = dueDate;
        this.#status = 'pending';
        this.#id = Date.now();
    }


    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(value) {
        this.#dueDate = value;
    }

    get status() {
        return this.#status;
    }

    set status(value) {
        this.#status = value;
    }

    get id() {
        return this.#id;
    }
}


export class TodoListModel {
    todoList = [];
    constructor() { }

    add(tarefa) {
        this.todoList.push(tarefa);
    }

    getAll() {
        return this.todoList;
    }

    get(id) {
        return this.todoList.find(tarefa => tarefa.id === id);
    }

    update(id, data) {
        const tarefa = this.get(id);
        Object.assign(tarefa, data);
    }
}