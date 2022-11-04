describe('API Test', () => {
  // Please update the url to yours first
  const url = 'https://d7266ea5-znkgy6uqgnfsv4q8rflbqsyshkahbixkxxfa.did.abtnet.io/api/txs'
  const a = '0xeb2a81e229b68c1c22b6683275c00945f9872d90'

  it('Request with the address parameter', () => {
    cy.request({ url, qs: { a } })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })

  it('Request without the address parameter', () => {
    cy.request({ url, failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(400)
      })
  })

  it('Request with the correct page parameter', () => {
    const p = 2
    cy.request({ url, qs: { a, p } })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })

  it('Request with the incorrect page parameter', () => {
    const p = 'abc'
    cy.request({ url, qs: { a, p }, failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(400)
      })
  })

  it('Request with the over limit page parameter', () => {
    const p = 999
    cy.request({ url, qs: { a, p }, failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })

  it('Request with the correct ps parameter', () => {
    const ps = 10
    cy.request({ url, qs: { a, ps } })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf.at.most(ps)
      })
  })

  it('Request with the incorrect ps parameter', () => {
    const ps = 'abc'
    cy.request({ url, qs: { a, ps }, failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(400)
      })
  })

  it('Request with the over limit ps parameter', () => {
    const ps = 999
    cy.request({ url, qs: { a, ps }, failOnStatusCode: false })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
      })
  })
})
