var request = require('supertest');
var server = require('../../server');

describe('GET /', function() {
  it('should render ok', function(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /contact', function() {
  it('should render ok', function(done) {
    request(server)
      .get('/contact')
      .expect(200, done);
  });
});

//Test to get all of the student

describe('GET /students', function(){
  it('should signup ok', function(done) {
    request(server)
    .post('/signup')
    .send({
      'name': 'test',
      'email': 'test@test.com',
      'password': 'abc123',
    })
    .set('Accept', 'application/json')
    .expect(200, done);
  })
  it('should login ok', function(done) {
    request(server)
    .post('/login')
    .send({
      'email': 'test@test.com',
      'password': 'abc123'
    })
    .expect(200, done)
  })
  it('should render ok', function(done) {
      request(server)
      .get('/students')
      .expect(200, done);
  })
});
