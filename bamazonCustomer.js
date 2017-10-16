const MySql = require('mysql');
const inquirer = require('inquirer');
const Table = require('console.table');

const connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon'
});
var amntDue = 0;
var qtyOrdered = 0;
var prod = 0;

connection.query('SELECT * FROM Products',function(error,result,fields){
    if(error) throw error;
    console.table(result)
    if(result){
    inquirer.prompt(whatToBuy).then(function(ans){
        //    console.log(parseInt(ans.Product));
           qtyOrdered = ans.Quantity;
           prod = ans.Product;           
           checkStock(prod,qtyOrdered);   
    })   
    }     
});
function checkStock(prod,qtyOrdered){
    // console.log('check stock');
    connection.query('SELECT * FROM Products where item_id = ?',[prod],function(error,result,fields){
        if(error) throw error;
        products = result[0];
        // console.log(products);
        var price = products.price;
        var stock = products.stock_quantity;
        var itemId = products.item_id;
        var sales = products.product_sales;
        // console.log(qtyOrdered);
        if(parseInt(stock) >= parseInt(qtyOrdered)){
            // console.log('sufficient stock. all yours');
            amntDue = qtyOrdered * price;
            console.log('Amount Due: $' +amntDue.toFixed(2));            
            // console.log('Current Stock: ' +stock);
            newStock = stock - qtyOrdered;
            prodSales = sales + amntDue;
            console.log('new stock: '+newStock + ' prodSales: '+ prodSales + 'prod ' +prod);
    connection.query('UPDATE Products SET stock_quantity = ?, product_sales = ? WHERE item_id = ?',[newStock,prodSales,prod],function(error,result){
        // console.log('reduce stock');
        if(error) throw error;
        console.log('Remaining Stock: ' +newStock);
        // console.log('Product Sales: ' +prodSales);        
    })    
        } else {
            console.log('Sorry, insufficient stock to fulfill order.'); 
        }
        connection.end();     
    })       
}

var whatToBuy = [
    {  name: 'Product',
        message: 'Please enter the id of the product you are interested in buying',
        type: 'input'
    },
    {
        name: 'Quantity',
        message: 'Please enter the qty.',
        type: 'input'
    }
];


