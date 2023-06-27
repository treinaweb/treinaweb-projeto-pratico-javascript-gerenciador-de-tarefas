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
            case 'Sair':
                return;
        }
    } while (true);
}

main();