 create database t20_world_cup;

  use t20_world_cup
 create table teams(id int Not Null AUTO_INCREMENT,
                 name varchar(100) Not Null Unique,
                 country varchar(100) Not Null,
                 founded year,
                 Primary Key (id)
                  );

 Insert into teams(name,country,founded) values
    ('Team A', 'USA', 1901),    
    ('Team B', 'UK', 1958),
    ('Team C', 'Spain', 1920),
    ('Team D', 'Germany', 1975),
    ('Team E', 'Italy', 1905),
    ('Team F', 'France', 1945),
    ('Team G', 'Brazil', 1910),
    ('Team H', 'Argentina', 1913),
    ('Team I', 'Mexico', 1922),
    ('Team J', 'Netherlands', 1905);

select * from teams;

select name from teams;

select * from teams where name='Team C';

select * from teams where founded < '1922';

Insert into teams(name,country,founded) values('Team K', 'Norway', 1947);

Update teams set country='Ireland' where name='Team D';

Delete from teams where name='Team K';

