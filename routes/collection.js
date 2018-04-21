'use strict';

const routes = [
  require('./index'),
  require('./linebot')
];

module.exports = function router(app,linebotParser) {
  return routes.forEach((route) => {
    route(app,linebotParser);
  });
};