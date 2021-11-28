it('GET', () => {
    cy.api(
      {
        method:'GET',
        url:'/get'
      },
      'GET method')
      .then(res => {
          //Verifies correct status code
          expect(res.status).to.eq(200)
          expect(res.statusText).to.eq('OK')
          expect(res.body.url).to.eq(Cypress.config('baseUrl') + '/get')

          //Verifies response has a payload
          expect(res).to.be.a('object')
          expect(res.body).to.have.all.keys('args','headers','origin','url')

          //Verifies response headers
          expect(res.body.headers).to.have.all.keys( "Accept","Accept-Encoding", "Host", "User-Agent","X-Amzn-Trace-Id")
          expect(res.headers).to.have.all.keys("date","content-type","content-length","connection","server","access-control-allow-origin","access-control-allow-credentials")

          //Verifies correct application state
         })
    
  });