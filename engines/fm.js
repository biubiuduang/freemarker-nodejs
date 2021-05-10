var Freemarker = require('freemarker.js');
var path = require('path');
var viewRoot = path.join(__dirname, '../templates');
var menu = require('../data/menu');
var fm = new Freemarker({
    viewRoot,
    options: {

    }
});
exports.viewRoot = viewRoot;
exports.engine = function(filePath, options, callback) {
    var sourceAbsolutePath = path.normalize(filePath);
    // 增加公共数据
    options.menus = menu.menu;
    fm.render(sourceAbsolutePath.substring(path.normalize(viewRoot).length),options,
        function(err, html, output){
        if (err) {
            return callback(new Error(err));
        }
        return callback(null, html)
    });
}
