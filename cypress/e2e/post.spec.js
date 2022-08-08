it('POST', () => {
    cy.api(
      {
        method:'POST',
        url: '/post'
      },
      'POST method')
      .then(res => {
          //Verifies correct status code
          expect(res.status).to.eq(200)
          expect(res.statusText).to.eq('OK')
          expect(res.body.url).to.eq(Cypress.config('baseUrl') + '/post')

          //Verifies response has a payload
          expect(res).to.be.a('object')
          expect(res.body).to.have.all.keys('args','data', 'files', 'form', 'headers','json', 'origin','url')

          //Verifies response headers
          expect(res.body.headers).to.have.all.keys( "Accept","Accept-Encoding", "Content-Length", "Host", "User-Agent","X-Amzn-Trace-Id")
          expect(res.headers).to.have.all.keys("date","content-type","content-length","connection","server","access-control-allow-origin","access-control-allow-credentials")

          //Verifies correct application state
         }) 
  });