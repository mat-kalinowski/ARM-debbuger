FROM node:13.12.0

WORKDIR /node 
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install && npm install react-codemirror2 codemirror --save && npm install @material-ui/core 

CMD ["npm","start"]

