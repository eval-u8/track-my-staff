const db = require('./db/connection');
const figlet = require('figlet');
const inquirer = require('inquirer');
// const cTable = require('console.table');

//welcome figlet
db.connect(err => {
    if(err)throw err;
    figlet('Track My Staff', function(err, data) {
        if(err) {
            console.log('Uh oh... Something went wrong...');
            console.dir(err);
            return;
        }
    console.log(data)
    promptAction();
    });
});

//inquirer prompts
const promptAction = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'actions',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                "Update An Employee's Role",
                "Update An Employee's Manager",
                "View Employees By Manager",
                "View Employees By Department",
                "Delete Department",
                "Delete Role",
                "Delete Employee",
                "View Department's Combined Salaries",
                "Exit"
    ]}]).then(actionAnswers => {
        if (actionAnswers.actions === 'View All Departments') {
            viewAllDepartments();
        }
        if (actionAnswers.actions === 'View All Roles') {
            viewAllRoles();
        }
        if (actionAnswers.actions === 'View All Employees') {
            viewAllEmployees();
        }
        if (actionAnswers.actions === "Add A Department") {
            addDepartment();
        }
        if (actionAnswers.actions === "Add A Role") {
            addRole();
        }
        if (actionAnswers.actions === "Add An Employee") {
            addEmployee();
        }
        if (actionAnswers.actions === "Update An Employee's Role") {
            updateEmployeeRole();
        }
        if (actionAnswers.actions === "Update An Employee's Manager") {
            updateEmployeeManager();
        }
        if (actionAnswers.actions === "View Employees By Manager") {
            viewEmployeeByManager();
        }
        if (actionAnswers.actions === "View Employees By Department") {
            viewEmployeeByDepartment();
        }
        if (actionAnswers.actions === "Delete Department") {
            deleteDepartment();
        }
        if (actionAnswers.actions === "Delete Role") {
            deleteRole();
        }
        if (actionAnswers.actions === "Delete Employee") {
            deleteEmployee();
        }
        if (actionAnswers.actions === "View Department's Combined Salaries") {
            viewCombinedSalariesByDepartment();
        }
        if (actionAnswers.actions === "Exit") {
            db.end();
        }
    });
};

//functions for each actions

//view all departments fn
const viewAllDepartments = () => {
    const sql = `SELECT departments.id, departments.department_name FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) throw error;
        console.log('====================');
        console.log('Departments');
        console.log('====================');
        console.table(rows);
        promptAction();
    });
};

//view all roles fn
const viewAllRoles = () => {
    const sql = `SELECT roles.id, roles.title, departments.department_name, roles.salary
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) throw error;
        console.log("====================");
        console.log("Roles");
        console.log("====================");
        console.table(rows);
        promptAction();
    });
};

//view all employees fn
const viewAllEmployees = () => {
    const sql = `SELECT employees.id, 
                  employees.first_name, 
                  employees.last_name, 
                  roles.title, 
                  departments.department_name, 
                  roles.salary
                  FROM employees, roles, departments 
                  WHERE departments.id = roles.department_id 
                  AND roles.id = employees.role_id`;
                  //fix manager here

    db.query(sql, (err, rows) => {
        if (err) throw error;
        console.log("====================");
        console.log("Employees");
        console.log("====================");
        console.table(rows);
        promptAction();
    });
};
