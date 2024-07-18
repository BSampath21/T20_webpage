
-- create database t20_world_cup; 

-- use t20_world_cup;

-- create table teams(id int Not Null AUTO_INCREMENT,
--                  name varchar(100) Not Null Unique,
--                  country varchar(100) Not Null,
--                  founded year,
--                  Primary Key (id)
--                   );

--  Insert into teams(name,country,founded) values
--     ('Team A', 'USA', 1901),    
--     ('Team B', 'UK', 1958),
--     ('Team C', 'Spain', 1920),
--     ('Team D', 'Germany', 1975),
--     ('Team E', 'Italy', 1905),
--     ('Team F', 'France', 1945),
--     ('Team G', 'Brazil', 1910),
--     ('Team H', 'Argentina', 1913),
--     ('Team I', 'Mexico', 1922),
--     ('Team J', 'Netherlands', 1905);

--  select * from teams;

-- select * from teams where name='Team C';

-- select * from teams where founded < '1922';

-- Insert into teams(name,country,founded) values('Team K', 'Norway', 1947);

-- Update teams set country='Ireland' where name='Team D';

-- Delete from teams where name='Team K';

INSERT INTO players (name, age, position, team_id,created_at,updated_at) VALUES
                                                       ('Player 1', 25, 'Forward', 1,now(),now()),
                                                       ('Player 2', 30, 'Midfielder', 1,now(),now()),
                                                       ('Player 3', 22, 'Defender', 2,now(),now()),
                                                       ('Player 4', 27, 'Goalkeeper', 2,now(),now()),
                                                       ('Player 5', 24, 'Forward', 3,now(),now()),
                                                       ('Player 6', 29, 'Midfielder', 3,now(),now()),
                                                       ('Player 7', 21, 'Defender', 4,now(),now()),
                                                       ('Player 8', 26, 'Goalkeeper', 4,now(),now()),
                                                       ('Player 9', 23, 'Forward', 5,now(),now()),
                                                       ('Player 10', 28, 'Midfielder', 5,now(),now()),
                                                       ('Player 11', 31, 'Defender', 6,now(),now()),
                                                       ('Player 12', 20, 'Goalkeeper', 6,now(),now()),
                                                       ('Player 13', 22, 'Forward', 7,now(),now()),
                                                       ('Player 14', 24, 'Midfielder', 7,now(),now()),
                                                       ('Player 15', 26, 'Defender', 8,now(),now()),
                                                       ('Player 16', 25, 'Goalkeeper', 8,now(),now()),
                                                       ('Player 17', 29, 'Forward', 9,now(),now()),
                                                       ('Player 18', 27, 'Midfielder', 9,now(),now()),
                                                       ('Player 19', 21, 'Defender', 10,now(),now()),
                                                       ('Player 20', 30, 'Goalkeeper', 10,now(),now()),
                                                       ('Player 21', 23, 'Forward', 1,now(),now()),
                                                       ('Player 22', 25, 'Midfielder', 2,now(),now()),
                                                       ('Player 23', 28, 'Defender', 3,now(),now()),
                                                       ('Player 24', 31, 'Goalkeeper', 4,now(),now()),
                                                       ('Player 25', 20, 'Forward', 5,now(),now()),
                                                       ('Player 26', 22, 'Midfielder', 6,now(),now()),
                                                       ('Player 27', 27, 'Defender', 7,now(),now()),
                                                       ('Player 28', 29, 'Goalkeeper', 8,now(),now()),
                                                       ('Player 29', 24, 'Forward', 9,now(),now()),
                                                       ('Player 30', 26, 'Midfielder', 10,now(),now()); 