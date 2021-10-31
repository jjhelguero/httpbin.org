
const deleteResponseSchema = {
    "args": {},
    "data": "",
    "files": {},
    "form": {},
    "headers": {
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.5",
      "Host": "httpbin.org",
      "Origin": "https://httpbin.org",
      "Referer": "https://httpbin.org/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",
      "X-Amzn-Trace-Id": "Root=1-61214fcb-5ae2789b74b2ced95ad93a38"
    },
    "json": null,
    "origin": "76.185.119.253",
    "url": "https://httpbin.org/delete"
  }

describe('HTTP Methods', () => {
  before(() => {
    
  })

    it('DELETE', () => {
      cy.request('DELETE','/delete')
        .then(res => {
            //Verifies correct status code
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
            expect(res.body.url).to.eq(Cypress.config('baseUrl') + '/delete')

            //Verifies response has a payload
            expect(res).to.be.a('object')
            expect(res.body).to.have.all.keys('args','data','files','form','headers','json','origin','url')

            //Verifies response headers
            expect(res.body.headers).to.have.all.keys( "Accept","Accept-Encoding","Content-Length", "Host", "User-Agent","X-Amzn-Trace-Id")
            expect(res.headers).to.have.all.keys("date","content-type","content-length","connection","server","access-control-allow-origin","access-control-allow-credentials")

            //Verifies correct application state
           })
        
    });

    it('GET', () => {
      cy.request('GET','/get')
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

    it('PATCH', () => {
      cy.request('PATCH','/patch')
        .then(res => {
            //Verifies correct status code
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
            expect(res.body.url).to.eq(Cypress.config('baseUrl') + '/patch')

            //Verifies response has a payload
            expect(res).to.be.a('object')
            expect(res.body).to.have.all.keys('args','data', 'files', 'form', 'headers','json', 'origin','url')

            //Verifies response headers
            expect(res.body.headers).to.have.all.keys( "Accept","Accept-Encoding", "Content-Length", "Host", "User-Agent","X-Amzn-Trace-Id")
            expect(res.headers).to.have.all.keys("date","content-type","content-length","connection","server","access-control-allow-origin","access-control-allow-credentials")

            //Verifies correct application state
           })
      
    });

    it('POST', () => {
      cy.request('POST','/post')
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

    it('PUT', () => {
      cy.request('POST','/post')
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
});