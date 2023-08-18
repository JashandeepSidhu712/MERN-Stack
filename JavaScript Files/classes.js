function student() //The student function acts as a constructor function.
{
    this.name;
    this.branch;

    this.setData=function(nm, brn)
    {
        this.name = nm;
        this.branch = brn;
    }

    this.getData=()=>
    {
        return [this.name,this.branch];
    }
};
const obj = new student(); // it creates a new object instance.

obj.setData("jashan","cse");

// console.log(obj.name, obj.branch);
// console.log(obj.getData());

class employee
{
    constructor(salary, tax)
    {
        this.salary = salary;
        this.tax = tax;
    }

    netSalary()
    {
        return this.salary-this.tax;
    }
}
var objEmp = new employee(1000,10);
console.log(objEmp.netSalary());

const car = class
{
    constructor(cost, discount)
    {
        this.cost = cost;
        this.discount = discount;
    }

    netCost()
    {
        return this.cost-this.discount;
    }
}
var objcar = new car(1000,10);
console.log(objcar.netCost());