'use strict';

const routes = [
  require('./index'),
  require('./linebot')
];

module.exports = function router(app,firebaseRef) {
  return routes.forEach((route) => {
    route(app,firebaseRef);
  });
};