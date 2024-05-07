const {set_teamsFn, TEAMS, place_intoTeamFn} = require('../js/logic')

describe('set_teamsFn', () => {
  afterEach(() => {
    TEAMS.length = 0
  })

  test('set_teamsFn is defined', () => {
    expect(set_teamsFn).toBeDefined()
  })

  test('given a number greater then the LEARNERS, it should throw an error', () => {
    const numOfTeam = 20
    expect(() => set_teamsFn(numOfTeam)).toThrow()
  })

  test('not given a number, it should throw an error', () => {
    const numOfTeam = 'hello'
    expect(() => set_teamsFn(numOfTeam)).toThrow()
  })

  test('given 2, it should return the length of 2', () => {
    const numOfTeam = 2
    expect(set_teamsFn(numOfTeam)).toBe(2)
  })
})

describe('place_intoTeamFn', () => {
  test('place_intoTeamFn is defined', () => {
    expect(place_intoTeamFn).toBeDefined()
  })

  test('called place_intoTeamFn after setTeam, TEAMS[0] members should not be empty', () => {
    set_teamsFn(4)
    place_intoTeamFn()
    expect(TEAMS[0].members.length).toBeGreaterThan(0)
  })
})
