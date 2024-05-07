document.querySelector('#teamsection').innerHTML = ''

function set_numberOfTeam() {
  const numOfTeam = Number(document.querySelector('#numOfTeam').value)

  set_teamsFn(numOfTeam)
  place_intoTeamFn()

  const display = document.querySelector('#teamsection')
  display.innerHTML = ``

  for (let i = 0; i < TEAMS.length; i++) {
    display.innerHTML += `<h1>Team-${i + 1}</h1>`
    for (let x = 0; x < TEAMS[i].members.length; x++) {
      display.innerHTML += `<li>${TEAMS[i].members[x]}</li>`
    }
  }
}
