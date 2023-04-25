import cy from 'cypress';

describe('template spec', function () {
  it('passes', function () {
    cy.visit('https://frabjous-pudding-cfcda6.netlify.app/');

    cy.get('input[type="text"]').type('ireland');
    cy.get('button[type=submit').click();

    cy.get('a').each(page => {
      cy.request(page.prop('href'));
    });
  });
});
