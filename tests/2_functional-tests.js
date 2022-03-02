const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: 'Mangoes are my favorite body part like wow, eon',
            locale: 'american-to-british'
        })
        .end((err, res) => {
            assert.equal(200, res.status)
            assert.isObject(res.body)
            assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> body part like wow, <span class="highlight">aeon</span>')
            done()
        })
    })

    test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: 'Mangoes are my favorite body part like wow, eon',
            locale: 'martian-to-human-language'
        })
        .end((err, res) => {
            assert.equal(200, res. status)
            assert.isObject(res.body)
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'Invalid value for locale field')
            done()
        })
    })

    test('Translation with missing text field: POST request to /api/translate', (done) => {
        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: undefined,
            locale: 'american-to-british'
        })
        .end((err, res) => {
            assert.equal(200, res. status)
            assert.isObject(res.body)
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'Required field(s) missing')
            done()
        })
    })

    test('Translation with missing locale field: POST request to /api/translate', (done) => {
        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: 'Mangoes are my favorite body part like wow, eon',
            locale: undefined
        })
        .end((err, res) => {
            assert.equal(200, res. status)
            assert.isObject(res.body)
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'Required field(s) missing')
            done()
        })
    })

    test('Translation with empty text: POST request to /api/translate', (done) => {
        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: '',
            locale: 'english-to-british'
        })
        .end((err, res) => {
            assert.equal(200, res. status)
            assert.isObject(res.body)
            assert.property(res.body, 'error')
            assert.equal(res.body.error, 'No text to translate')
            done()
        })
    })

    test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
        chai
        .request(server)
        .post('/api/translate')
        .send({
            text: 'My name is Vince',
            locale: 'american-to-british'
        })
        .end((err, res) => {
            assert.equal(200, res.status)
            assert.isObject(res.body)
            assert.equal(res.body.translation, 'Everything looks good to me!')
            done()
        })
    })
});
