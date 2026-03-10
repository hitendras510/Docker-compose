# Manual installation
-install nodejs locally
-clone the repo
-install the depedencies (npm init -y)
-start the db locally 
    -docker run -e POSTGRES_PASSWORD=mySecretPassword -d -p 5432:5432 postgres
-change the .env file and update your db credentials 
-npx prisma migrate
-npx prisma generate
-npm run build
-npm run start 

# docker installation

# docker compose installation steps