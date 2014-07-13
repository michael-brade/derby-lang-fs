var defiler = require('json-defiler');

module.exports = function (options) {
  return function (req, res, next) {
    defiler(options.dir, function (err, data) {
      if (err) return next(err);
      var model = req.getModel();
      var path = options.path || '$lang.dict';
      model.set(path, data.json);
      next();
    });
  };
};
