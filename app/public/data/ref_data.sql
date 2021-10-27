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


-- SELECT studentname, username, max(salary), count(offers)
-- FROM student LEFT OUTER JOIN offer ON student.id = offer.studentID
-- Group by username, name;
