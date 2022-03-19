-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS victors;

CREATE TABLE victors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, -- BIGINT RETURNED AS STRING --
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  middle_name TEXT,
  known_for TEXT
);

INSERT INTO 
  victors (first_name, last_name, middle_name, known_for)
VALUES
  ('Victor', 'Hugo', 'Marie', 'French poet, novelist, and dramatist of the Romantic movement. Best known for being the author of The Hunchback of Notre-Dame and Les Misérables.'),
  ('Viktor', 'Frankl', 'Emil', 'Austrian neurologist, psychiatrist, philosopher, author, and Holocaust survivor. Best known for being the founder of logotherapy and for being the author of Man''s searchfor meaning'),
  ('Victor', 'Garber', 'Joseph', 'Canadian-American actor and singer. Best known for his role as Jack Bristow in the drama series Alias which aired from 2001-2006.'),
  ('Victor', 'Fleming', 'Lonzo', 'American film director, cinematographer, and producer. Best known for his films Gone with the Wind and The Wizard of Oz.');

DROP TABLE IF EXISTS muscle_cars;

CREATE TABLE muscle_cars (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INT NOT NULL
);

INSERT INTO
  muscle_cars (make, model, year)
VALUES
  ('Pontiac', 'GTO', 1964),
  ('Chevrolet', 'Chevelle SS 454', 1970),
  ('Plymouth', 'Road Runner Superbird', 1970),
  ('Chevrolet', 'Camaro Z/28', 1967),
  ('Shelby', 'Mustang GT-350', 1965);

DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  pages SMALLINT
);

INSERT INTO 
  books (title, author, pages)
VALUES
  ('The Name of the Wind', 'Patrick Rothfuss', 662),
  ('The Wise Man''s Fear', 'Patrick Rothfuss', 994),
  ('The Giver', 'Lois Lowry', 208);

DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  platform TEXT NOT NULL,
  genre TEXT NOT NULL,
  has_played BOOLEAN NOT NULL 
);

INSERT INTO 
  games (title, platform, genre, has_played)
VALUES 
  ('Elden Ring', 'PC', 'Action RPG', TRUE),
  ('Bioshock', 'PC', 'First-person shooter RPG', FALSE),
  ('Cuphead', 'PC', 'Run and gun', TRUE);

DROP TABLE IF EXISTS system_requirements;

CREATE TABLE system_requirements (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cpu TEXT NOT NULL,
  ram TEXT NOT NULL,
  gpu TEXT NOT NULL,
  os TEXT NOT NULL
);

INSERT INTO 
  system_requirements (cpu, ram, gpu, os)
VALUES
  ('Intel Core i5-8400 or AMD Ryzen 3 3300X', '12 GB RAM', 'NVIDIA GeForce GTX 1060, 3 GB or AMD Radeon RX 580, 4 GB', 'Windows 10 (64-bit)'),
  ('Intel® Core™ i5-3470 or AMD Ryzen™ 3 1200', '8 GB RAM', 'GeForce GTX 1050 4 GB or AMD Radeon™ RX 560 4 GB', 'Windows® 10, 64-bit'),
  ('Intel i5/Ryzen 5 series', '8 GB RAM', 'Nvidia GeForce GTX 1660 Ti/AMD RX 5600-XT', 'Windows 7 64-bit');