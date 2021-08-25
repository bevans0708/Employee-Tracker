const inquirer = require("inquirer");
const mysql = require("mysql");
const { createConnection } = require("net");
const connect = mysql.createConnection( {
   host: "localhost",
   port: 3306,
   user: "root",
   password: "kristy891!",
   database: "employee_db"
});
let rolesArr;
let departmentsArr;
let employeeArr;
let employeeIdArr;

connect.connect(function (err) {
   if (err) {
      console.log("error connecting: " + err.stack);
      return;
   }
   console.log("connected as id " + connect.threadId);
});

function init() {
   rolesArr = [];
   departmentsArr = [];
   employeeArr = [];
   employeeIdArr = [];
   connect.query("SELECT department FROM departments", )
}