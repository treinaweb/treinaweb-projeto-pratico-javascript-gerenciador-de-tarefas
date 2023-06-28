import inquirer from "inquirer";
const todoList = [];

async function addItem() {
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
    ])
    todoList.push({ title, dueDate, status: 'pending', id: Date.now() });
    console.log(`\nTarefa "${title}" adicionado\n`);
}


async function listarTarefa() {
    todoList.forEach(function (tarefa) {
        console.log(`Titulo: ${tarefa.title} - Data: ${tarefa.dueDate} - Status: ${tarefa.status}`);
    });
}


async function completarTarefa() {
    if (!todoList.length) {
        console.log(`\nNenhuma tarefa encontrada\n`)
        return;
    }

    const { id } = await inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Qual tarefa você quer marcar como concluída?',
            choices: todoList.map((tarefa) => ({ name: tarefa.title, value: tarefa.id })),
        }
    ]);

    const tarefa = todoList.find((tarefa) => tarefa.id === id);

    tarefa.status = 'done';
    console.log(`\nTarefa "${tarefa.title}" marcado como concluído.\n`);

}


async function editarTarefa() {
    if (!todoList.length) {
        console.log(`\nNenhuma tarefa encontrada\n`)
        return;
    }

    const { id } = await inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Qual tarefa você quer editar?',
            choices: todoList.map((tarefa) => ({ name: tarefa.title, value: tarefa.id })),
        }
    ]);

    const tarefa = todoList.find((tarefa) => tarefa.id === id);

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
    ])

    tarefa.title = title;
    tarefa.dueDate = dueDate;
    console.log(`\nTarefa "${title}" editada com sucesso\n`);

}

async function main() {
    do {

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
                    "Sair"
                ]
            }
        ])


        switch (option) {
            case 'Adicionar tarefa':
                await addItem();
                break;
            case 'Listar tarefas':
                await listarTarefa();
                break;
            case 'Marcar tarefa como concluído':
                await completarTarefa();
                break;
            case 'Editar tarefa':
                await editarTarefa();
                break;
            case 'Sair':
                return;
        }
    } while (true);
}

main();