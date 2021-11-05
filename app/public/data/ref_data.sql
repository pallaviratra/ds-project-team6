CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS refs;


create table refs (
	ref_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	age INT,
	referee_grade INT,
	referee_skill INT,
	details VARCHAR(50),
	role VARCHAR(50)
);
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (0, '', '',0, 0, 0, '', '');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (1, 'Ab', 'Harsnep', 47, 84, 30, 'assistant', 'assignor');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (2, 'Myrilla', 'Furminger', 27, 6, 40, 'assistant', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (3, 'Karisa', 'Goldis', 56, 15, 95, 'official', 'assignor');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (4, 'Ewen', 'Danelut', 34, 41, 87, 'official', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (5, 'Rollie', 'Puddan', 40, 5, 82, 'official', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (6, 'Cedric', 'Harder', 27, 2, 75, 'official', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (7, 'Antonino', 'Scanlin', 57, 69, 43, 'assistant', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (8, 'Chiquita', 'Mart', 46, 23, 36, 'assistant', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (9, 'Vinny', 'Lusk', 44, 65, 90 'official', 'user');
insert into refs (ref_id, first_name, last_name, age, referee_grade, referee_skill, details, role) values (10, 'Delphinia', 'Grouer', 41, 87, 79, 'official','user');


DROP TABLE IF EXISTS game_details;


create table game_details (
	id INT,
	date DATE,
	time VARCHAR(50),
	field VARCHAR(50),
	level VARCHAR(50)

);
insert into game_details (game_id, date, time, field, level) values (1, '3/2/2021', '2:19 PM', 'Purple', 'low');
insert into game_details (game_id, date, time, field, level) values (2, '2/13/2021', '2:26 PM', 'Orange', 'high' );
insert into game_details (game_id, date, time, field, level) values (3, '12/11/2020', '6:54 PM', 'Green', 'high');
insert into game_details (game_id, date, time, field, level) values (4, '2/5/2021', '4:46 PM', 'Green', 'low');
insert into game_details (game_id, date, time, field, level) values (5, '10/7/2021', '2:24 PM', 'Green', 'high');
insert into game_details (game_id, date, time, field, level) values (6, '1/21/2021', '1:16 PM', 'Black', 'high');
insert into game_details (game_id, date, time, field, level) values (7, '12/17/2020', '5:50 PM', 'Orange', 'low');
insert into game_details (game_id, date, time, field, level) values (8, '3/14/2021', '5:10 PM', 'Purple', 'low');
insert into game_details (game_id, date, time, field, level) values (9, '6/21/2021', '1:55 PM', 'Red', 'high');
insert into game_details (game_id, date, time, field, level) values (10, '9/4/2021', '1:17 PM', 'Black', 'low');
insert into game_details (game_id, date, time, field, level) values (11, '5/23/2021', '3:13 PM', 'Black', 'high');
insert into game_details (game_id, date, time, field, level) values (12, '2/19/2021', '4:12 PM', 'Purple','low');
insert into game_details (game_id, date, time, field, level) values (13, '7/6/2021', '12:54 PM', 'Orange','high');
insert into game_details (game_id, date, time, field, level) values (14, '11/29/2020', '11:21 AM', 'Orange','high');


DROP TABLE IF EXISTS ref_assignment;

create table ref_assignment (
	assign_id INT,
	game_id INT,
	ref_id INT,
	assign_status VARCHAR(50)
);
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (1, 1, 1, 'assigned');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (2, 2, 2, 'assigned');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (3, 3, 3, 'unassigned');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (4, 4, 4, 'tentative');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (5, 5, 5, 'accepted');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (6, 6, 6, 'accepted');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (7, 7, 7, 'assigned');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (8, 8, 8, 'unassigned');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (9, 9, 9, 'accepted');
insert into ref_assignment (assign_id, game_id, ref_id, assign_status) values (10, 10, 10, 'tentative');

-- SELECT studentname, username, max(salary), count(offers)
-- FROM student LEFT OUTER JOIN offer ON student.id = offer.studentID
-- Group by username, name;
