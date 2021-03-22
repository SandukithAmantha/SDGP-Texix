CREATE TABLE UserDetails (
    ID uuid PRIMARY KEY NOT NULL,
    F_NAME varchar(10) NOT NULL,
    L_NAME varchar(10) NOT NULL,
    EMAIL varchar(30) NOT NULL,
    PASSWORD varchar(10) NOT NULL,
    USERTYPE varchar(1) NOT NULL
);