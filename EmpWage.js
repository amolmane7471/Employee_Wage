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
const NUM_OF_WORKING_DAYS = 20
const MAX_HRS_IN_MONTH = 100
let day = 0, daily_wage 
let totalEmpHrs = 0 , totalWorkingDays = 0

    function getWorkingHrs(empCheck){
        console.log("day "+day+":")
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
    
    while ( totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++   
    day++
    let empCheck =Math.floor(Math.random()*10 % 3)
    totalEmpHrs += getWorkingHrs(empCheck)
    }
    
    daily_wage = totalEmpHrs * WAGE_PER_HRS
    console.log("**************")
    console.log("Total Hrs: "+totalEmpHrs +" Daily Emp Wage = "+daily_wage)