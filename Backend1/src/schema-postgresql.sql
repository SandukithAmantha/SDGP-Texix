DROP TABLE IF EXISTS user;

CREATE TABLE user (
    ID UUID PRIMARY KEY NOT NULL,
    F_NAME varchar(10) NOT NULL,
    L_NAME varchar(10) NOT NULL,
    EMAIL varchar(30) NOT NULL,
    PASSSWORD varchar(10) NOT NULL,
    TYPE int(1) NOT NULL
);