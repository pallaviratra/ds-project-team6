CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS referees;


create table referees (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	age INT,
	referee_grade INT,
	details VARCHAR(50)
);
insert into referees (id, first_name, last_name, age, referee_grade, details) values (1, 'Ab', 'Harsnep', 47, 84, 'Optimized multi-state contingency');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (2, 'Myrilla', 'Furminger', 27, 6, 'Re-engineered content-based frame');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (3, 'Karisa', 'Goldis', 56, 15, 'Progressive discrete open architecture');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (4, 'Ewen', 'Danelut', 34, 41, 'Customizable bi-directional flexibility');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (5, 'Rollie', 'Puddan', 40, 5, 'Enterprise-wide real-time function');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (6, 'Cedric', 'Harder', 27, 2, 'Persevering reciprocal attitude');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (7, 'Antonino', 'Scanlin', 57, 69, 'Visionary contextually-based moderator');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (8, 'Chiquita', 'Mart', 46, 23, 'Decentralized maximized synergy');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (9, 'Vinny', 'Lusk', 44, 65, 'Persevering 4th generation ability');
insert into referees (id, first_name, last_name, age, referee_grade, details) values (10, 'Delphinia', 'Grouer', 41, 87, 'Visionary leading edge migration');


create table users (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	role VARCHAR(50)
);
insert into users (id, first_name, last_name, role) values (1, 'Earlie', 'Warrick', 'assignor');
insert into users (id, first_name, last_name, role) values (2, 'Feliza', 'Phoenix', 'non-assignor');
insert into users (id, first_name, last_name, role) values (3, 'Evvy', 'Choppin', 'non-assignor');
insert into users (id, first_name, last_name, role) values (4, 'Lazare', 'Boom', 'non-assignor');
insert into users (id, first_name, last_name, role) values (5, 'Ranice', 'Wannes', 'assignor');
insert into users (id, first_name, last_name, role) values (6, 'Eward', 'Jersch', 'non-assignor');
insert into users (id, first_name, last_name, role) values (7, 'Luelle', 'Fessby', 'non-assignor');
insert into users (id, first_name, last_name, role) values (8, 'Katuscha', 'McKinnell', 'assignor');
insert into users (id, first_name, last_name, role) values (9, 'Serene', 'Comettoi', 'non-assignor');
insert into users (id, first_name, last_name, role) values (10, 'Nadya', 'Bloys', 'non-assignor');

create table game_details (
	id INT,
	date DATE,
	time VARCHAR(50),
	field VARCHAR(50)
);
insert into game_details (id, date, time, field) values (1, '3/2/2021', '2:19 PM', 'Purple');
insert into game_details (id, date, time, field) values (2, '2/13/2021', '2:26 PM', 'Orange');
insert into game_details (id, date, time, field) values (3, '12/11/2020', '6:54 PM', 'Green');
insert into game_details (id, date, time, field) values (4, '2/5/2021', '4:46 PM', 'Aquamarine');
insert into game_details (id, date, time, field) values (5, '10/7/2021', '2:24 PM', 'Green');
insert into game_details (id, date, time, field) values (6, '1/21/2021', '1:16 PM', 'Khaki');
insert into game_details (id, date, time, field) values (7, '12/17/2020', '5:50 PM', 'Khaki');
insert into game_details (id, date, time, field) values (8, '3/14/2021', '5:10 PM', 'Aquamarine');
insert into game_details (id, date, time, field) values (9, '6/21/2021', '1:55 PM', 'Red');
insert into game_details (id, date, time, field) values (10, '9/4/2021', '1:17 PM', 'Indigo');
insert into game_details (id, date, time, field) values (11, '5/23/2021', '3:13 PM', 'Khaki');
insert into game_details (id, date, time, field) values (12, '2/19/2021', '4:12 PM', 'Maroon');
insert into game_details (id, date, time, field) values (13, '7/6/2021', '12:54 PM', 'Blue');
insert into game_details (id, date, time, field) values (14, '11/29/2020', '11:21 AM', 'Goldenrod');
insert into game_details (id, date, time, field) values (15, '11/23/2020', '2:28 PM', 'Orange');
insert into game_details (id, date, time, field) values (16, '9/24/2021', '1:09 PM', 'Khaki');
insert into game_details (id, date, time, field) values (17, '1/18/2021', '11:27 AM', 'Khaki');
insert into game_details (id, date, time, field) values (18, '11/2/2020', '12:26 PM', 'Fuscia');
insert into game_details (id, date, time, field) values (19, '7/21/2021', '2:40 PM', 'Puce');
insert into game_details (id, date, time, field) values (20, '11/10/2020', '6:43 PM', 'Purple');
insert into game_details (id, date, time, field) values (21, '2/18/2021', '11:12 AM', 'Fuscia');
insert into game_details (id, date, time, field) values (22, '10/16/2021', '2:27 PM', 'Maroon');
insert into game_details (id, date, time, field) values (23, '10/21/2021', '12:00 PM', 'Indigo');
insert into game_details (id, date, time, field) values (24, '1/26/2021', '11:49 AM', 'Puce');
insert into game_details (id, date, time, field) values (25, '9/8/2021', '6:06 PM', 'Pink');
insert into game_details (id, date, time, field) values (26, '3/6/2021', '1:33 PM', 'Turquoise');
insert into game_details (id, date, time, field) values (27, '12/7/2020', '4:41 PM', 'Maroon');
insert into game_details (id, date, time, field) values (28, '6/16/2021', '11:41 AM', 'Purple');
insert into game_details (id, date, time, field) values (29, '10/9/2021', '11:02 AM', 'Goldenrod');
insert into game_details (id, date, time, field) values (30, '4/17/2021', '6:03 PM', 'Turquoise');


create table ref_assignments(
)

create table games(
)

-- SELECT studentname, username, max(salary), count(offers)
-- FROM student LEFT OUTER JOIN offer ON student.id = offer.studentID
-- Group by username, name;
