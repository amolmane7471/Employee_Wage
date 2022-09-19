/*
* purpose : Employee Wage Computation Problem
* @uthor : Amol
* since : 2022/09/199696
*/
console.log("Welcome To EmpWage Problem")

const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const FULL_TIME_HRS = 8
const PART_TIME_HRS = 4
const WAGE_PER_HRS = 20
const NUM_OF_WORKING_DAYS = 10
let daily_wage , empHrs = 0

    function getWorkingHrs(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                console.log("employee is part time present")
                return PART_TIME_HRS
            case IS_FULL_TIME:
                console.log("employee is full time present")
                return FULL_TIME_HRS
            default:
                console.log("employee is absent")
                return 0
        }
    }
    
    for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck =Math.floor(Math.random()*10 % 3)
    empHrs += getWorkingHrs(empCheck)
    }
    
    daily_wage = empHrs * WAGE_PER_HRS
    console.log("**************")
    console.log("Total Hrs: "+empHrs +" Daily Emp Wage = "+daily_wage)