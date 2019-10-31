# **WebbIII-Project-Admin**
-------

## Description
> This is the Admin site to use when creating, reading, updating or deleting posts in the WebbIII-Project-CV-API which is a REST API built in PHP.

## Site
> The Internet address to this site is [https://www.anst9000.xyz/panel](https://www.anst9000.xyz/panel) . This folder is protected with a password to decrease the possibilities to enter the API trying to change the content of it. See under login to Admin. When entering the site for the first time you have to create a username and a password which is hashed and stored in a datatbase. After doing this you can enter the Admin pages and there is full CRUD functionality for this REST API.

## Login to Admin
1.
> [https://www.anst9000.xyz/panel](https://www.anst9000.xyz/panel)  
> **USERNAME**: anst9000  
> **PASSWORD**: dt173g_project  

2.
> On the page **Logga in**, create a new username and password via the link *Har du inget konto? Skaffa ett nu!*. Go back to the page **Logga in** and login with your new credentials.

## Database
The database for storing users is built up from and id, username and password. There is also a column for when user was created.
```sql
CREATE TABLE webiii_users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    webiii_users (username, password)
VALUES
    ('Anders', 'Strömberg')
```

