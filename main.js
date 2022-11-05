function createMatch(player1, hour, player2) {
  return `
    <li>
      <img
        src="./assets/Bandeiras dos países/icon=${player1}.svg"
        alt="Bandeira ${player1}"
      />
      <p>${hour}</p>
      <img
        src="./assets/Bandeiras dos países/icon=${player2}.svg"
        alt="Bandeira ${player2}"
      />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, match) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <div class="date">
        <h2>${date}</h2>
        <p>${day}</p>
      </div>

      <div class="matches">
        <ul>
          ${match}
        </ul>
      </div>
    </div>
  `
}
//  a função createMatch é o argumento 'match' da função createCard

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createMatch("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createMatch("england", "10:00", "iran") +
      createMatch("senegal", "13:00", "netherlands") +
      createMatch("united states", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createMatch("argentina", "07:00", "saudi arabia") +
      createMatch("denmark", "10:00", "tunisia") +
      createMatch("mexico", "13:00", "poland") +
      createMatch("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createMatch("morocco", "07:00", "croatia") +
      createMatch("germany", "10:00", "japan") +
      createMatch("spain", "13:00", "costa rica") +
      createMatch("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createMatch("switzerland", "07:00", "cameroon") +
      createMatch("uruguay", "10:00", "south korea") +
      createMatch("portugal", "13:00", "ghana") +
      createMatch("brazil", "16:00", "serbia")
  )
