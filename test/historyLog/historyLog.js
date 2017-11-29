var webConf = require('../../config/config.ap.js'),
    request = require('supertest'),
    should = require('should');

describe('History Log service test:', function () {

    var collectSeq = webConf.globUsage.collectSeq;

    it('Check History Log service category.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/historyLog/category')
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log('#3');
                //console.log(res.text);
                if(err) return done(err);
                done();
            });

    });

    it('Check History Log service operationType.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/historyLog/operationType')
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log('#3');
                //console.log(res.text);
                if(err) return done(err);
                done();
            });

    });

    it('Check History Log service operator.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/historyLog/operator')
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log('#3');
                //console.log(res.text);
                if(err) return done(err);
                done();
            });

    });

    it('Check History Log service place.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/historyLog/place')
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log('#3');
                //console.log(res.text);
                if(err) return done(err);
                done();
            });

    });

    it('Check History Log service historyLog.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/historyLog?start=0&pagesize=5&dateStart=2016-09-25&dateEnd=2016-09-25&category=-1&operationType=-1&operator=-1&place=-1')
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log('#3');
                //console.log(res.text);
                if(err) return done(err);
                done();
            });

    });

});