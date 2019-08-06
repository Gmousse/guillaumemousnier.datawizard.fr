FROM node:10.15-alpine

COPY . /app

RUN chmod 777 /app

USER node

WORKDIR /app

RUN yarn install --production

ENTRYPOINT ["yarn"]
CMD ["start:prod"]