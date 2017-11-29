var _ = require('underscore'),
    request = require('supertest'),
    should = require('should'),
    webConf = require('../config/config.ap.js');


function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe('Init', function(){
    before(function(done){
        importTest('Login',webConf.globUsage.login);
        request(webConf.WEB_BASE_URL)
            .post('/loginAction')
            .type('form')
            .send({"username": webConf.LOGIN_ACCOUNT, "password": webConf.LOGIN_PASSWORD})
            .expect('Location', '/gcmsweb/index')
            .expect('set-cookie', /connect.sid/)
            .end(function (err, res) {
                //console.log(res.headers['set-cookie']);
                webConf.globUsage.cookie = res.headers['set-cookie']; //Setting the cookie type Object
                if(err) return done(err);
                done();
            });
    })

    describe('Start', function() {

        _.each(webConf.globUsage.filePatch,function(val,key){
            importTest(key,val);
        });

        after(function () {
            console.log("Tests finished");
        });

    });
});