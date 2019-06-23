// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Students', () => {
    describe('GET /students', () => {
        // Test to get all students record
        it('should get all students record', (done) => {
            chai.request(app)
                .get('/students')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    console.log(res.body);
                    done();
                });
        });
        // Test to get single student record
        it('should get a single student record', (done) => {
            const id = 1;
            chai.request(app)
                .get(`/students/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    console.log(res.body);
                    done();
                });
        });

        // Test to get single student record
        it('should not get a single student record', (done) => {
            const id = 5;
            chai.request(app)
                .get(`/students/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    console.log(res.body);
                    done();
                });
        });
    });

    describe('POST /students', () => {
        // Test create a student
        it('should create a student', (done) => {
            chai.request(app)
                .post('/students')
                .send({ id: 100, name: 'Jon Snow', age: 23, email: 'jon@snow.com' })
                .end((err, res) => {
                    res.should.have.status(201);
                    console.log(res.body);
                    done();
                });
        });

        it('should not create a student', (done) => {
            chai.request(app)
                .post('/students')
                .send({ id: 100, name: 'Jon Snow', age: 23, email: 'john@gmail.com' })
                .end((err, res) => {
                    res.should.have.status(422);
                    console.log(res.body);
                    done();
                });
        });
    });

    describe('PUT /students/:id', () => {
        // Test update a student
        it('should update a student', (done) => {
            const id = 1;
            chai.request(app)
                .put(`/students/${id}`)
                .send({ id: 1, name: 'Updated Student', age: 23, email: 'jonUpdated@snow.com' })
                .end((err, res) => {
                    res.should.have.status(202);
                    console.log(res.body);
                    done();
                });
        });

        it('should not update a student', (done) => {
            const id = 101;
            chai.request(app)
                .put(`/students/${id}`)
                .send({ id: 101, name: 'Otro Jon Snow', age: 23, email: 'john@gmail.com' })
                .end((err, res) => {
                    res.should.have.status(404);
                    console.log(res.body);
                    done();
                });
        });
    });

    describe('DELETE /students/:id', () => {
        // Test delete a student
        it('should delete a student', (done) => {
            const id = 1;
            chai.request(app)
                .delete(`/students/${id}`)
                .end((err, res) => {
                    res.should.have.status(202);
                    console.log(res.body);
                    done();
                });
        });

        it('should not delete a student', (done) => {
            const id = 101;
            chai.request(app)
                .delete(`/students/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    console.log(res.body);
                    done();
                });
        });
    });
});