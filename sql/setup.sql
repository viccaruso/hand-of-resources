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

