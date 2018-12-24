create database restdb;

create table EventData (id int,
 event_date date,
 event_type varchar(20),
 event_summary varchar(100), 
 event_size varchar(20),
 event_details Text);