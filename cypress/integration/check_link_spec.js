describe('Scrum Primer Home', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('/')
    cy.title().should('include', 'Short Introduction to Scrum')
  })
  it('.should() switch to Japanese', function () {
    cy.visit('/')
    cy.get('a[href="/jp/"]').click()
    cy.contains('body', '翻訳')
  })
})
