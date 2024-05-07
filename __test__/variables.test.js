const {LEARNERS, TEAMS} = require('../js/logic')

describe('LEARNERS, TEAMS', () => {
  test('LEARNERS is defined', () => {
    expect(LEARNERS).toBeDefined()
  })

  test('LEARNERS is an array and has have 15 names', () => {
    expect(Array.isArray(LEARNERS)).toBeTruthy()
    expect(LEARNERS.length).toBe(15)
  })

  test('TEAM is defined and is an array', () => {
    expect(TEAMS).toBeDefined()
    expect(Array.isArray(TEAMS)).toBeTruthy()
  })

})
