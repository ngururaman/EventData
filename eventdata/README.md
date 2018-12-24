Required/Utilized Technologies 
------------------------------
Java 
Spring Boot
Maven
Node.js & npm
HTML & CSS
Angular, Angular Material & CLI
Bootstrap
MySql

Database Setup
--------------
1. Create a profile in MySQL with username as 'root' and password as 'root'
1. The included SQL script to create database and tables in MySQL (CreateEventDataTable.sql)
2. Insert Data into Table (assignment_data_short.sql or assignment_data_full.sql)

included in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/restdb
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

Do install Java/Maven and setup environment in project home directory
---------------------------------------------------------------------
@echo off  
set JAVA_HOME={home directory}\Java\jdk1.8.0_181
set M2_HOME={home directory}\apache-maven-3.6.0
set M2=%M2_HOME%\bin
set PATH=%JAVA_HOME%\bin;%M2%;%PATH%

Install npm and execute the following commands in project home directory
-------------------------------------------------------------------------
> npm install -g @angular/cli
> npm install ngx-bootstrap --save
> npm install bootstrap@3 --save
> npm i angular-6-datatable --save
> npm install ngx-select-dropdown
> npm install jquery --save
> npm install datatables.net --save
> npm install datatables.net-dt --save
> npm install angular-datatables@6.0.0 --save
> npm install @types/jquery --save-dev
> npm install @types/datatables.net --save-dev


From project home directory execute the following command to install and start the server
-------------------------------------------------------------------------------------------------------------
from terminal one:
------------------
mvn clean install
mvn spring-boot:run

from terminal two:
------------------
ng build
npm start 

Once server start , access application http://localhost:4200


