INSERT INTO departments (department) 
VALUES("Finance"),
("Accounting"),
("Engineering"),
("Corporate");
INSERT INTO roles (title,salary,department_id) 
VALUES ("Junior Engineer",50000,3),
("Accountant",48000,2),
("Manager",65000,4),
("Analyst",55000,1);
INSERT INTO employees (first_name,last_name,role_id,department_id) 
VALUES ("Boba","Fett", 1, 3),
("Count","Dooku",2,2),
("Darth","Vader",3,4),
("Emperor","Palpatine",4,1);