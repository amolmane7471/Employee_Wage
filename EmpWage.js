/*
* purpose : Employee Wage Computation Problem
* @uthor : Amol
* since : 2022/09/19
*/
console.log("Welcome To EmpWage Problem")
const IS_ABSENT = 1
let empCheck =Math.floor(Math.random()*10 % 2);
// console.log(empCheck)
if(empCheck == IS_ABSENT)
{
    console.log("employee is present");
}
else
{
    console.log("employee is absent");
}