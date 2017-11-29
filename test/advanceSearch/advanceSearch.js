var webConf = require('../../config/config.ap.js'),
    request = require('supertest'),
    should = require('should'),
    ruleIdx;

describe('Advance Search service test:', function () {

    var sectionSerial   = webConf.globUsage.sectionSerial,
        memberSerial    = webConf.globUsage.memberSerial;

    it('Check advance search service rank.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/memberAnalyze/advanceSearch/rank')
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log('#3');
                //console.log(res);
                if(err) return done(err);
                done();
            });

    });

    it('Check advance search service gameType.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/memberAnalyze/advanceSearch/gameType')
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

    it('Check advance search service gameTheme.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/memberAnalyze/advanceSearch/gameTheme')
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

    it('Check advance search service rules.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/memberAnalyze/advanceSearch/rules?SectionSerial='+sectionSerial+'&MemberSerial='+memberSerial)
            .set('Cookie',webConf.globUsage.cookie)
            .expect(200)
            //.expect('Content-Type',/json/)
            .end(function(err,res){
                //console.log(res);
                if(err) return done(err);
                done();
            });

    });


    it('Check advance search service advanceSearch.', function(done){

        request(webConf.WEB_BASE_URL)
            .post('/service/common/memberAnalyze/advanceSearch/rule')
            .set('Cookie',webConf.globUsage.cookie)
            .type('form')
            .send({
                "name": 'demo',
                "conditions":'[[{"type":"dateRange","value":"2016/10/14","subValue":"2016/11/14"},{"type":"percent","value":1,"subValue":1}]]'
            })
            .expect(200)
            .end(function (err, res) {
                //console.log('#1');
                //console.log(res.body);
                should(res.body).have.property('ruleIdx');
                ruleIdx = res.body.ruleIdx;

                if(err) return done(err);
                done();
            });

    });

    it('Check advance search service advanceSearch delete.', function(done) {
        // Going ahead to delete added rule.
        console.log(ruleIdx);
        request(webConf.WEB_BASE_URL)
            .delete('/service/common/memberAnalyze/advanceSearch/rule?ruleIdx='+ruleIdx+'&OperatorIdx='+webConf.OPERATOR_IDX)
            .set('Cookie', webConf.globUsage.cookie)
            .expect(200)
            .end(function (err, res) {
                //console.log('delete');
                //console.log(res.text);

                if (err) return done(err);
                done();
            });

    });

    it('Check advance search service filters.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/memberAnalyze/advanceSearch/filters')
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


    it('Check advance search service search.', function(done){

        request(webConf.WEB_BASE_URL)
            .get('/service/common/memberAnalyze/advanceSearch/search')
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


    it('Check advance search service advanceSearch.', function(done){

        request(webConf.WEB_BASE_URL)
            .post('/service/common/memberAnalyze/advanceSearch/advanceSearch')
            .set('Cookie',webConf.globUsage.cookie)
            .type('form')
            .send({
                "condition":"[ [ { type: 'dateRange',value: '2016/10/10',subValue: '2016/11/10' },{ type: 'gameTheme', value: 1 } ] ]"
            })
            .expect(200)
            .end(function (err, res) {
                //console.log('#1');
                //console.log(res.text);

                if(err) return done(err);
                done();
            });

    });

    it('Check advance search service advanceSearch.', function(done){

        var memberList = [{MemberSerial:sectionSerial,SectionSerial:memberSerial}];

        request(webConf.WEB_BASE_URL)
            .put('/service/common/memberAnalyze/advanceSearch/updateRank')
            .set('Cookie',webConf.globUsage.cookie)
            .type('form')
            .send({
                "memberList":memberList,
                "rank":0
            })
            .expect(200)
            .end(function (err, res) {
                //console.log('#1');
                //console.log(res.text);

                if(err) return done(err);
                done();
            });

    });
});