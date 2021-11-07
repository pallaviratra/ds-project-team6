CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS refs;


create table refs (
	ref_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	age INT NOT NULL,
	referee_grade INT NOT NULL,
	referee_skill INT NOT NULL,
	ref_role VARCHAR(50) NOT NULL
);

insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (1, 'Ab', 'Harsnep', 47, 84, 30, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (2, 'Myrilla', 'Furminger', 27, 6, 40, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (3, 'Karisa', 'Goldis', 56, 15, 95, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (4, 'Ewen', 'Danelut', 34, 41, 87, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (5, 'Rollie', 'Puddan', 40, 5, 82, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (6, 'Cedric', 'Harder', 27, 2, 75, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (7, 'Antonino', 'Scanlin', 57, 69, 43, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (8, 'Chiquita', 'Mart', 46, 23, 36, 'assistant');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (9, 'Vinny', 'Lusk', 44, 65, 90, 'official');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, ref_role) values (10, 'Delphinia', 'Grouer', 41, 87, 79, 'official');

 

DROP TABLE IF EXISTS game_details;


create table game_details (
	game_id INT PRIMARY KEY AUTO_INCREMENT,
	date DATE NOT NULL,
	time TIME NOT NULL,
	field VARCHAR(50) NOT NULL,
	level VARCHAR(50) NOT NULL

);
insert into game_details (game_id, date, time, field, level) values (1, '3-2-2021', '14:19:00', 'Purple', 'low');
insert into game_details (game_id, date, time, field, level) values (2, '2-13-2021', '14:26:00', 'Orange', 'high' );
insert into game_details (game_id, date, time, field, level) values (3, '12-11-2020', '18:54:00', 'Green', 'medium');
insert into game_details (game_id, date, time, field, level) values (4, '2-5-2021', '16:46:00', 'Green', 'low');

DROP TABLE IF EXISTS ref_assignment;

create table ref_assignment (
	assign_id INT PRIMARY KEY AUTO_INCREMENT,
	game_assign_id INT NOT NULL REFERENCES game_details(game_id),
	ref_assign_id INT NOT NULL REFERENCES refs(ref_id),
	assign_status VARCHAR(50) NOT NULL
);
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (1, 1, 1, 'assigned');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (2, 2, 2, 'assigned');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (3, 3, 3, 'unassigned');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (4, 4, 4, 'tentative');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (5, 5, 5, 'accepted');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (6, 6, 6, 'accepted');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (7, 7, 7, 'assigned');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (8, 8, 8, 'unassigned');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (9, 9, 0, '');
insert into ref_assignment (assign_id, game_assign_id, ref_assign_id, assign_status) values (10, 10, 0, '');