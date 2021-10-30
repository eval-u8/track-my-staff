INSERT INTO departments(department_name)
VALUES("Engineering"), ("Sales"), ("Finance"), ("Legal");

INSERT INTO roles(title, salary, department_id)
VALUES("Engineer", 85000, 1), ("Lead Engineer", 125000, 1), ("Salesman", 50000, 2), ("Finance Analyst", 60000, 3), ("Lawyer", 4000000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Pedro', 'Pomez', 2, 1), ('James', 'Rodriguez', 1, null), ('Jose', 'Altuve', 1, 2), ('Alberto', 'Bohorquez', 3, 2), ('Barbara', 'Brunette', 4, null);
