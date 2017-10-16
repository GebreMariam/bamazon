BAMAZON CUSTOMER 1. A

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonCustomer.js
item_id  product_name     department_name    price   stock_quantity  product_sales
-------  ---------------  -----------------  ------  --------------  -------------
1        Chips            Food               3.44    10              null
2        Gas Mask         Doomsday Ready     33.44   10              null
3        Bow and Arrow    Hunting            11.22   29896           49861.7
4        Fairy Dust       Doomsday Ready     129.99  3444            null
5        Life Potion      Health and Beauty  12.44   1               null
6        Vicks Vaporub    Health and Beauty  9.23    4343            null
7        Lollipop         Doomsday Ready     0.99    1234            null
8        Baby Powder      Health and Beauty  2.33    24              null
9        Sriracha         Food               2.34    32              7.02
10       Pineapple Juice  Food               4.44    433             null
11       Whiskey          Doomsday Ready     23.31   304             null

? Please enter the id of the product you are interested in buying 3
? Please enter the qty. 434
Amount Due: $4869.48
new stock: 29462 prodSales: 54731.18prod 3
Remaining Stock: 29462
Gebremariams-MacBook-Pro:Bamazon gebremariam$

BAMAZON CUSTOMER 1. B

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonCustomer.js
5item_id  product_name     department_name    price   stock_quantity  product_sales
-------  ---------------  -----------------  ------  --------------  -------------
1        Chips            Food               3.44    10              null
2        Gas Mask         Doomsday Ready     33.44   10              null
3        Bow and Arrow    Hunting            11.22   29462           54731.2
4        Fairy Dust       Doomsday Ready     129.99  3444            null
5        Life Potion      Health and Beauty  12.44   1               null
6        Vicks Vaporub    Health and Beauty  9.23    4343            null
7        Lollipop         Doomsday Ready     0.99    1234            null
8        Baby Powder      Health and Beauty  2.33    24              null
9        Sriracha         Food               2.34    32              7.02
10       Pineapple Juice  Food               4.44    433             null
11       Whiskey          Doomsday Ready     23.31   304             null

? Please enter the id of the product you are interested in buying 5
? Please enter the qty. 2
Sorry, insufficient stock to fulfill order.


-----------------------------------------------
BAMAZON MANAGER 1. A

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonManager.js
? Select Option: (Use arrow keys)
❯ View Products
  View Low Inventory
  Add to Inventory
  Add New Product
----------------------

BAMAZON MANAGER 1. B

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonManager.js
? Select Option: View Products
item_id  product_name     department_name    price   stock_quantity  product_sales
-------  ---------------  -----------------  ------  --------------  -------------
1        Chips            Food               3.44    10              null
2        Gas Mask         Doomsday Ready     33.44   10              null
3        Bow and Arrow    Hunting            11.22   29462           54731.2
4        Fairy Dust       Doomsday Ready     129.99  3444            null
5        Life Potion      Health and Beauty  12.44   1               null
6        Vicks Vaporub    Health and Beauty  9.23    4343            null
7        Lollipop         Doomsday Ready     0.99    1234            null
8        Baby Powder      Health and Beauty  2.33    24              null
9        Sriracha         Food               2.34    32              7.02
10       Pineapple Juice  Food               4.44    433             null
11       Whiskey          Doomsday Ready     23.31   304             null

undefined
Gebremariams-MacBook-Pro:Bamazon gebremariam$

BAMAZON MANAGER 1. C 

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonManager.js
? Select Option: View Low Inventory
item_id  product_name  department_name    price  stock_quantity  product_sales
-------  ------------  -----------------  -----  --------------  -------------
5        Life Potion   Health and Beauty  12.44  1               null

undefined
Gebremariams-MacBook-Pro:Bamazon gebremariam$

BAMAZON MANAGER 1. D

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonManager.js
? Select Option: Add to Inventory
? Please enter the item_Id of the product you wish to add inventory to. 5
? Please enter the qty. to be added. 4
New Inventory Count: 5
updated inventory

BAMAZON MANAGER 1. E 

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonManager.js
? Select Option: Add New Product
? What is the name of the Product? Candles
? What is the Department it belongs to? 4344
? what is the unit price? 2.33
? What is the initial stock count? 1234

--------------------------------------------------

BAMAZON SUPERVISOR 1. A 

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonSupervisor.js
? Please select an option to proceed. (Use arrow keys)
❯ View Product Sales by Department
  Create New Department

BAMAZON SUPERVISOR 1. B 

Gebremariams-MacBook-Pro:Bamazon gebremariam$ node bamazonSupervisor.js
? Please select an option to proceed. View Product Sales by Department
View Product Sales by Department
department_id  department_name    over_head_cost  product_sales  total_profit
-------------  -----------------  --------------  -------------  ------------------
null           null               null            null           null
1              Food               1234.33         null           null
1              Food               1234.33         7.02           -1227.309956073761
2              Doomsday Ready     42364.4         null           null
3              Hunting            4364.45         54731.2        50366.7294921875
4              Health and Beauty  7664.45         null           null


BAMAZON SUPERISOR 1. C 

? Please select an option to proceed. Create New Department
Create New Department
? Please input department Name. Kitchen & Thangs
? What is the over head cost? 343.23
{ department: 'Kitchen & Thangs', overhead: '343.23' }
New department added!

