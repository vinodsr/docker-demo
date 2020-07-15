FROM node:12-alpine
WORKDIR /usr/app
ADD package.json .
EXPOSE 3000
ENV PASSWORD_FILE=/run/secrets/password
RUN ["npm", "install"]
ADD . .
ENTRYPOINT [ "npm" ,"start"]
