var mysql      = require('mysql');
const util = require('util');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Ro1128Da#',
  database : 'employees'
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to the database");
});

connection.query = util.promisify(connection.query)

const db ={
  createEmployee: function(employee) {
    connection.query("INSERT INTO employee SET ?", employee)
  },

  createDepartment: function(department) {
    connection.query("INSERT INTO department SET ?", department)
  },

  createRole: function(role) {
    connection.query("INSERT INTO role SET ?", role)
  },

  findAllEmployees: function(){
     return connection.query('SELECT * FROM employee')
  },

  findAllDepartments: function() {
    return connection.query("SELECT * FROM department")
  },

  findAllRoles: function() {
    return connection.query("SELECT * FROM role")
  },

  removeEmployee: function(id){
    return connection.query("DELETE FROM employee WHERE id = ?", id)
  },

  removeDepartment: function(id){
    return connection.query("DELETE FROM department WHERE id = ?", id)
  },

  removeRole: function(id){
    return connection.query("DELETE FROM role WHERE id = ?", id)
  },

  updateEmployeeRole: function(emp, role) {
    return connection.query("UPDATE employee SET role = ? WHERE id = ?", emp, role);
  },

  findAllEmployeesByDepartment: function(id) {
    return connection.query("SELECT FROM employee WHERE id = ?", id)
  },

  findAllEmployeesByManager: function(id) {
    return connection.query("SELECT FROM role WHERE id = ?", id)
  }

}
 
module.exports = db;