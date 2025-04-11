-- Nouvel user:
CREATE USER 'app_user'@'%' IDENTIFIED BY 'user_password';
-- Privilèges du nouvel user:
GRANT SELECT, INSERT, UPDATE, DELETE ON dbname.* TO 'app_user'@'%';

FLUSH PRIVILEGES;
