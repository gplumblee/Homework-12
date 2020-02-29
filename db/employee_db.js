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
  findAllEmployees: function(){
     return connection.query('SELECT * FROM employee')
      // console.log(data)
  },

  findAllDepartments: function() {
    return connection.query("SELECT * FROM department")
  },

  findAllEmployeesByDepartment: function(id) {
    return connection.query("SELECT FROM employee WHERE id = ?", id)
  },

  findAllEmployeesByManager: function(id) {
    return connection.query("SELECT FROM role WHERE id = ?", id)
  },

  removeEmployee: function(id){
    return connection.query("DELETE FROM employee WHERE id = ?", id)
  },

  findAllRoles: function() {
    return connection.query("SELECT * FROM role")
  },

  updateEmployeeRole: function(emp, role) {
    return connection.query("UPDATE employee SET role = ? WHERE id = ?", emp, role);
  },

  createRole: function(role) {
    connection.query("INSERT INTO role SET ?", role)
  }

}
 
module.exports = db;