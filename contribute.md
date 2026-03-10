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
-Install docker 
-start posegres
    -docker run -e POSTGRES_PASSWORD=mySecretPassword -d -p 5432:5432 postgres
-build the image - `docker build -t project-name`
-start the image - `docker run -p 3000:3000 project-name`

# docker compose installation steps
-install docker,docker-compose
-run `docker-compose-up`