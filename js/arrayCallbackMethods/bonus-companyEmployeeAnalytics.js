/*
==================================================
Problem:
Company Employee Analytics
==================================================
*/

// Solution

const employees=[{name:"Rahul",salary:30000},{name:"Priya",salary:45000},{name:"Kiran",salary:25000},{name:"Sneha",salary:50000}]; console.log(employees.map(e=>e.name)); console.log(employees.find(e=>e.salary===50000)); console.log(employees.reduce((s,e)=>s+e.salary,0)); console.log([...employees].sort((a,b)=>a.salary-b.salary));

/*
==================================================
Output:
Names array, employee with 50000 salary, total salary 150000, sorted employees
==================================================
*/
