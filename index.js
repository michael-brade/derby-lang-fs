var defiler = require('json-defiler');

module.exports = function (options) {
  return function (req, res, next) {
    var model = req.getModel();
    module.exports.load(options, function (err, dict) {
      if (err) return next(err);
      var path = options.path || '$lang.dict';
      model.set(path, dict);
      next();
    });
  };
};

module.exports.load = function (options, callback) {
  var opts = {dir: options.dir, split: true};
  defiler(opts, function (err, data) {
    if (err) return callback(err);
    var dict = {messageformat: {}};
    dict.messageformat.locale = data.js || {};
    dict.strings = data.json;
    for (key in dict.messageformat.locale) {
      var val = dict.messageformat.locale[key];
      dict.messageformat.locale[key] = val.toString();
    }
    callback(null, dict);
  });
};
