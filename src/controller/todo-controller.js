import { TodoListModel, TarefaModel } from '../model/todo-model.js';
import { TodoListView, } from '../view/todo-view.js'

export class TodoListController {
    // view = new TodoListView();
    // todoListModel = new TodoListModel();
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
}