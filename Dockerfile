FROM node:0.11.14-slim

RUN apt-get install -y ruby1.9.1
RUN gem install sass --version=3.2

#RUN npm install -g bower@1.3.12
#RUN npm install -g grunt-cli@0.1.13
#RUN npm install -g grunt@0.4.5
#RUN npm install -g grunt-contrib-sass@0.8.1
#RUN npm install -g grunt-contrib-watch@0.6.1

expose 80

WORKDIR /site/src/

CMD bower install --allow-root

#CMD ["bash","-c", "npm install --verbose; npm start"]