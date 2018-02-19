import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:8083`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    await t
        .expect(Selector('title').innerText).eql('Scrum Primer - Short Introduction to Scrum');
});
