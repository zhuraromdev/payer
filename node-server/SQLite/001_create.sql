DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id INTEGER PRIMARY KEY,
    dollars_received INTEGER,
    dollars_sent INTEGER
);

INSERT INTO user (id, dollars_received, dollars_sent) VALUES (1, 1, 2);
INSERT INTO user (id, dollars_received, dollars_sent) VALUES (2, 122, 12);
INSERT INTO user (id, dollars_received, dollars_sent) VALUES (3, 12, 25);
INSERT INTO user (id, dollars_received, dollars_sent) VALUES (4, 21, 22);
INSERT INTO user (id, dollars_received, dollars_sent) VALUES (5, 441, 278);