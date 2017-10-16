const MySql = require('mysql');
const inquirer = require('inquirer');
const Table = require('console.table');

const connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});
var listOptions = [(
    {
        name: 'list',
        type: 'list',
        message: 'Please select an option to proceed.',
        choices: ['View Product Sales by Department', 'Create New Department']
    }
)]
var addDepartment = [
    {
        name: 'department',
        message: 'Please input department Name.',
    }, 
    {
        name: 'overhead',
        message: 'What is the over head cost?',
    },
]
inquirer.prompt(listOptions).then(function(ans){
    var listItem = ans.list;
    console.log(listItem);
    switch (listItem) {
        // If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
        case 'View Product Sales by Department':
        select = 'SELECT d.department_id, d.department_name, d.over_head_cost, p.product_sales, (p.product_sales - d.over_head_cost) as total_profit FROM Products p LEFT JOIN departments d ON p.department_name = d.department_name GROUP BY d.department_id, d.department_name, d.over_head_cost, p.product_sales'
            connection.query(select,function(error,result,fields){
                if(error) throw error;
                console.table(result);
                connection.end();                
            })
            break;
            // If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
        case 'Create New Department':
        inquirer.prompt(addDepartment).then(function(ans){
            console.log(ans);
            connection.query('INSERT INTO departments SET ?', {
                department_name: ans.department,
                over_head_cost: ans.overhead}
                ,function(error, result){
                if(error) throw error;
                console.log('New department added!');
                connection.end();
            })
        })
            break;
    }
})







