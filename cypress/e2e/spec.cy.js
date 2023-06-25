describe('Validate user registration', () => {
  it('passes', () => {

    let url = Cypress.config().baseUrl;
    cy.visit(url);
    
    cy.get("a:contains('Signup')").click();

    var name = stringGenName();
    cy.get("input[name='name']").type(name)
    cy.get("input[name='email']").type(name+"@gmail.com")
    cy.get("input[name='age']").type("34")
    cy.get("input[name='password']").type("abcdef")
    cy.get("button[type='submit']").click()

    cy.get("a:contains('Customers')").click();

    let getText;
    cy.get("ul p").then(($value) => {
      getText = $value.text()
    })

    let items = [];
    cy.get('ul h2').each(($h2) => items.push($h2.text()))

    cy.wrap(items).should('contain',name)



  })
})

function stringGenName() {
  var text = "";
  
  var charset = "abcdefghijklmnopqrstuvwxyz";
  
  for (var i = 0; i < 5; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return text;
}