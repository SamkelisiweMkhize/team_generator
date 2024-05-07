const LEARNERS = [
  'dudu',
  'yonela',
  'sabina',
  'angela',
  'lindelani',
  'fifi',
  'lundi',
  'solomon',
  'calvin',
  'jabu',
  'kwazi',
  'mike',
  'samkelisiwe',
  'zandile',
  'kenelwe',
]

const TEAMS = []

function set_teamsFn(numOfTeam) {
  TEAMS.length = 0

  if (LEARNERS.length < numOfTeam || isNaN(numOfTeam)) {
    throw new error('Provide the correct number')
    alert('Provide the correct number')
  }

  for (let i = 0; i < numOfTeam; i++) {
    TEAMS.push({id: Date.now(), members: []})
  }

  return TEAMS.length
}

function place_intoTeamFn() {
  let copy_LEARNERS = [...LEARNERS].sort(() => Math.random() - 0.5)

  while (copy_LEARNERS.length > 0) {
    for (let i = 0; i < TEAMS.length; i++) {
      TEAMS[i].members.push(copy_LEARNERS.splice(0, 1))
    }
  }

  for (let i = 0; i < TEAMS.length; i++) {
    TEAMS[i].members = TEAMS[i].members.flat()
  }
}

module.exports = {LEARNERS, TEAMS, set_teamsFn, place_intoTeamFn}
