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

  // Needs correct SQL query:
  updateEmployeeRole: function(employeeId, roleId) {
    return connection.query("UPDATE employee SET role_id = id FROM department WHERE ? = ?", employeeId, roleId);
  },

  // Needs correct SQL query:
  findAllPossibleManagers: function(employeeId) {
    return connection.query("", employeeId)
  },

  // Needs correct SQL query:
  updateEmployeeManager: function(employeeId, managerId) {
    return connection.query("", employeeId, managerId)
  },

  // Needs correct SQL query:
  findAllEmployeesByManager: function(managerId) {
    return connection.query("", managerId)
  },

  removeEmployee: function(employeeId){
    return connection.query("DELETE FROM employee WHERE id = ?", employeeId)
  },

  removeDepartment: function(departmentId){
    return connection.query("DELETE FROM department WHERE id = ?", departmentId)
  },

  removeRole: function(roleId){
    return connection.query("DELETE FROM role WHERE id = ?", roleId)
  },

  // Needs correct SQL query:
  findAllEmployeesByDepartment: function(departmentId) {
    return connection.query("", departmentId)
  }

}
 
module.exports = db;