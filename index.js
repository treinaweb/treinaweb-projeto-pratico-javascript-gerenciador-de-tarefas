import inquirer from "inquirer";
const todoList = [];

async function addItem() {
    const { title, dueDate } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Digite o titulo da todo',
        },
        {
            type: 'input',
            name: 'dueDate',
            message: 'Digite a data de vencimento do item',
        }
    ])
    todoList.push({ title, dueDate, status: 'pending', id: Date.now() });
    console.log(`\nItem ${title} adicionado\n`);
}

async function main() {
    do {

        const { option } = await inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Escolha uma opção',
                choices: [
                    'Adicionar item',
                    "Sair"
                ]
            }
        ])


        switch (option) {
            case 'Adicionar item':
                await addItem();
                break;
            case 'Sair':
                return;
        }
    } while (true);
}

main();