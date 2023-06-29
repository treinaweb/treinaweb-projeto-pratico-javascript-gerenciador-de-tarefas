import { TodoListView } from './view/todo-view.js';
import { TodoListController } from './controller/todo-controller.js';
import { TodoListModel } from './model/todo-model.js';
async function main() {
    const todoListView = new TodoListView();
    const todoListModel = new TodoListModel();
    const controller = new TodoListController(todoListModel, todoListView);


    do {
        const option = await todoListView.displayMenu();

        switch (option) {
            case 'Adicionar tarefa':
                await controller.addItem();
                break;
            case 'Listar tarefas':
                await controller.listarTarefa();
                break;
            case 'Marcar tarefa como concluído':
                await controller.completarTarefa();
                break;
            case 'Editar tarefa':
                await controller.editarTarefa();
                break;
            case 'Deletar tarefa':
                await controller.deletarTarefa();
                break;
            case 'Sair':
                return;
        }
    } while (true);
}

main();