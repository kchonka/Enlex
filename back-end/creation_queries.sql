CREATE TABLE Users(
  user_id INT AUTO_INCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  salt  VARCHAR(255),
  hashed_pass VARCHAR(255),
  PRIMARY KEY (user_id)
);

CREATE TABLE All_Languages(
  language_id CHAR(5),
  language_name VARCHAR(100)
);

CREATE TABLE Target_Languages(
  user_id INT,
  language_id CHAR(2)
);

CREATE TABLE Status_Codes(
  status_code CHAR(1),
  status_title VARCHAR(100)
);

CREATE TABLE Status(
  user_id INT,
  category_id INT,
  language_id CHAR(2),
  status_code CHAR(1)
);

CREATE TABLE Categories(
  category_id INT,
  category_name VARCHAR(255)
);

CREATE TABLE Words(
  category_id INT,
  word_id INT,
  word VARCHAR(255)
);
