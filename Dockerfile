FROM node:12-alpine
ARG BUILD_COLOR
WORKDIR /usr/app
ADD package.json .
EXPOSE 3000
ENV PASSWORD_FILE=/run/secrets/password
ENV COLOR=${BUILD_COLOR}
RUN ["npm", "install"]
ADD . .
ENTRYPOINT [ "npm" ,"start"]
