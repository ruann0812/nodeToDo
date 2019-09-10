var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds341247.mlab.com:41247/nodetodoapp';
    }

}