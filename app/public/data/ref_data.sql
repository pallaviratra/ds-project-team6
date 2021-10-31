CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS refs;


create table refs (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	age INT,
	referee_grade INT,
	referee_skill INT,
	details VARCHAR(50)
);
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (1, 'Ab', 'Harsnep', 47, 84, 30, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (2, 'Myrilla', 'Furminger', 27, 6, 40, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (3, 'Karisa', 'Goldis', 56, 15, 95, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (4, 'Ewen', 'Danelut', 34, 41, 87, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (5, 'Rollie', 'Puddan', 40, 5, 82, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (6, 'Cedric', 'Harder', 27, 2, 75, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (7, 'Antonino', 'Scanlin', 57, 69, 43, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (8, 'Chiquita', 'Mart', 46, 23, 36, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (9, 'Vinny', 'Lusk', 44, 65, 90 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details) values (10, 'Delphinia', 'Grouer', 41, 87, 79, 'official');


create table admin (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	role VARCHAR(50)
);
insert into users (id, first_name, last_name) values (1, 'Earlie', 'Warrick');
insert into users (id, first_name, last_name) values (2, 'Feliza', 'Phoenix');
insert into users (id, first_name, last_name) values (3, 'Evvy', 'Choppin');
insert into users (id, first_name, last_name) values (4, 'Lazare', 'Boom');
insert into users (id, first_name, last_name) values (5, 'Ranice', 'Wannes');
insert into users (id, first_name, last_name) values (6, 'Eward', 'Jersch');
insert into users (id, first_name, last_name) values (7, 'Luelle', 'Fessby');
insert into users (id, first_name, last_name) values (8, 'Katuscha', 'McKinnell');
insert into users (id, first_name, last_name) values (9, 'Serene', 'Comettoi');
insert into users (id, first_name, last_name) values (10, 'Nadya', 'Bloys');

create table game_details (
	id INT,
	date DATE,
	time VARCHAR(50),
	field VARCHAR(50)
);
insert into game_details (game_id, date, time, field) values (1, '3/2/2021', '2:19 PM', 'Purple');
insert into game_details (game_id, date, time, field) values (2, '2/13/2021', '2:26 PM', 'Orange');
insert into game_details (game_id, date, time, field) values (3, '12/11/2020', '6:54 PM', 'Green');
insert into game_details (game_id, date, time, field) values (4, '2/5/2021', '4:46 PM', 'Aquamarine');
insert into game_details (game_id, date, time, field) values (5, '10/7/2021', '2:24 PM', 'Green');
insert into game_details (game_id, date, time, field) values (6, '1/21/2021', '1:16 PM', 'Khaki');
insert into game_details (game_id, date, time, field) values (7, '12/17/2020', '5:50 PM', 'Khaki');
insert into game_details (game_id, date, time, field) values (8, '3/14/2021', '5:10 PM', 'Aquamarine');
insert into game_details (game_id, date, time, field) values (9, '6/21/2021', '1:55 PM', 'Red');
insert into game_details (game_id, date, time, field) values (10, '9/4/2021', '1:17 PM', 'Indigo');
insert into game_details (game_id, date, time, field) values (11, '5/23/2021', '3:13 PM', 'Khaki');
insert into game_details (game_id, date, time, field) values (12, '2/19/2021', '4:12 PM', 'Maroon');
insert into game_details (game_id, date, time, field) values (13, '7/6/2021', '12:54 PM', 'Blue');
insert into game_details (game_id, date, time, field) values (14, '11/29/2020', '11:21 AM', 'Goldenrod');


create table ref_assignments (
	id INT,
	game_id INT,
	status VARCHAR(50)
);
insert into ref_assignments (ref_id, game_id, status) values (1,'Assigned');

-- SELECT studentname, username, max(salary), count(offers)
-- FROM student LEFT OUTER JOIN offer ON student.id = offer.studentID
-- Group by username, name;
