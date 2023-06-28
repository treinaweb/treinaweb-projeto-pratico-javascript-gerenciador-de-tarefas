import inquirer from "inquirer";

export class TodoListView {

    async displayMenu() {
        const { option } = await inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Escolha uma opção',
                choices: [
                    'Adicionar tarefa',
                    'Listar tarefas',
                    'Marcar tarefa como concluído',
                    'Editar tarefa',
                    'Deletar tarefa',
                    "Sair"
                ]
            }
        ]);
        return option;
    }

    async displayAddItem() {
        const { title, dueDate } = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Digite o titulo da tarefa',
            },
            {
                type: 'input',
                name: 'dueDate',
                message: 'Digite a data de vencimento da tarefa',
            }
        ]);

        return { title, dueDate };
    }

    displayItens(todoList) {
        todoList.forEach(function (tarefa) {
            console.log(`Titulo: ${tarefa.title} - Data: ${tarefa.dueDate} - Status: ${tarefa.status}`);
        });
    }

    async displaySelectItem(todoList) {
        const { id } = await inquirer.prompt([
            {
                type: 'list',
                name: 'id',
                message: 'Selecione um tarefa',
                choices: todoList.map((tarefa) => ({ name: tarefa.title, value: tarefa.id })),
            }
        ]);
        return id;
    }

    async displayEditItem(tarefa) {
        const { title, dueDate } = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Digite um novo titulo',
                default: tarefa.title,
            },
            {
                type: 'input',
                name: 'dueDate',
                message: 'Digite uma nova data da tarefa',
                default: tarefa.dueDate,
            },
        ]);
        return { title, dueDate };
    }


    log(text) {
        console.log(text);
    }
}