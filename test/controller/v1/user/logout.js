const expect = require('expect');
const _ = require('lodash');
const request = require('supertest');
const models = require('./../../../../model');
const { HEADER, ERROR, USER_TYPE, USER_LOG } = require('./../../../../util/constant');
const commonSeed = require('./../../../seed/common.seed');
const userSeed = require('./../../../seed/user.seed');

module.exports = (app, routePrefix) => {

    describe(`POST/${routePrefix}/logout`, () => {

        it('should logout', done => {

            expect(commonSeed.users[1].isActive).toBeTruthy();
            expect(commonSeed.users[1].atWork).toBeTruthy();

            request(app)
                .post(`/${routePrefix}/logout`)
                .set(HEADER.AUTHENTICATION, commonSeed.userTokens[1].token)
                .expect(200)
                .end((err) => {
                    if (err) return done(err);

                    //Find the user
                    models.user.findOne({
                        where: {
                            id: commonSeed.userTokens[1].userId,
                            isActive: false,
                            atWork: false,
                        }   
                    })
                    .then(user => {
                        expect(user).toBeTruthy();

                        //Try to find the token
                        return models.userToken.findOne({
                            where: {
                                userId: commonSeed.userTokens[1].userId
                            }   
                        });

                    })
                    .then((token =>{
                        expect(token).toBeFalsy();
                        done();
                    }))
                    .catch(err => done(err));

                });
            
        });

    });
    
}