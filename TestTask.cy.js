function checkTodos(i) {
    cy.request({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/todos/${[i]}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('title =>', response.body.title)
        expect(response.body.title.length).to.be.at.least(25);
    })
}
describe('Test task', () => {
    for (let i = 1; i <= 100; i++) {
        it(`Check Todos ${i}`, () => {
            checkTodos(i);
        })
    }
})