/*
==================================================
Problem:
Food Delivery App
==================================================
*/

// Solution

const orders=[{id:1,status:"Delivered"},{id:2,status:"Pending"},{id:3,status:"Delivered"},{id:4,status:"Cancelled"},{id:5,status:"Pending"}]; console.log(orders.filter(o=>o.status==="Pending"));

/*
==================================================
Output:
[{ id: 2, status: "Pending" }, { id: 5, status: "Pending" }]
==================================================
*/
