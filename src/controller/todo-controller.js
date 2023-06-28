import { TarefaModel } from '../model/todo-model.js';


export class TodoListController {

    constructor(todoListModel, view) {
        this.todoListModel = todoListModel;
        this.view = view;
    }


    async addItem() {
        const { title, dueDate } = await this.view.displayAddItem();
        const tarefa = new TarefaModel(title, dueDate);
        this.todoListModel.add(tarefa)
        this.view.log(`\nTarefa "${title}" adicionado\n`);
    }

    listarTarefa() {
        const todoList = this.todoListModel.getAll();
        this.view.displayItens(todoList);
    }
}