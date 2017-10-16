const MySql = require('mysql');
const inquirer = require('inquirer');
const Table = require('console.table');

const connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});
var newStock = 0;
// List a set of menu options:
var listOptions = [(
    {
        name: 'list',
        message: 'Select Option:',
        type: 'list',
        choices: [
            'View Products',
            'View Low Inventory',
            'Add to Inventory',
            'Add New Product'
        ]
    }
)]
var addInventory = [
    {
        name: 'product',
        message: 'Please enter the item_Id of the product you wish to add inventory to.',
        type: 'input',
    },
    {
        name: 'qty',
        message: 'Please enter the qty. to be added.'
    }
]
var addProduct = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Product?'
    },
    {
        type: 'input',        
        name: 'department',
        message: 'What is the Department it belongs to?'
    },
    {
        type: 'input',        
        name: 'price',
        message: 'what is the unit price?'
    },
    {
        type: 'input',        
        name: 'stock',
        message: 'What is the initial stock count?'
    }
]
inquirer.prompt(listOptions).then(function(ans){
    var listItem = ans.list;
    switch (listItem) {
        // If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
        case 'View Products':
            connection.query('SELECT * FROM Products',function(error,result,fields){
                if(error) throw error;
                console.log(console.table(result));
                connection.end();                
            })
            break;
            // If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
        case 'View Low Inventory':
            connection.query('SELECT * FROM Products WHERE stock_quantity < 5',function(error,result,fields){
            if(error) throw error;
            console.log(console.table(result));
            connection.end();            
        })
            break;
            // If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.        
        case 'Add to Inventory':
            inquirer.prompt(addInventory).then(function(ans){
                // console.log(ans)
                connection.query('SELECT stock_quantity FROM Products where?',{item_id: ans.product},function(error,result,fields){
                    if(error) throw error;
                    newStock = parseInt(ans.qty) + parseInt(result[0].stock_quantity);
                    // connection.end();                                        
                    console.log('New Inventory Count: '+newStock);
                connection.query('UPDATE Products SET ? WHERE ?',[{stock_quantity: newStock}, {item_id: ans.product}],function(error,result){
                    if(error) throw error;
                    console.log('updated inventory');
                    connection.end();                    
                })
            })
            })
            break;
            // If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
        case 'Add New Product':
            inquirer.prompt(addProduct).then(function(ans){
            // Add New Product
            connection.query('INSERT INTO Products SET ?',{
                product_name: ans.name,
                department_name: ans.department,
                price: ans.price,
                stock_quantity: ans.stock          
            },function(error,result){
                if(error) throw error;
                connection.end();                
            })
        })
            break;
            default:
                console.log('huh?');
    }
    
})







