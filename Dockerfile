FROM node:0.11.14-slim

RUN npm install bower@1.3.12 -g

expose 80

WORKDIR /site/src/

CMD bower install --allow-root

#CMD ["bash","-c", "npm install --verbose; npm start"]