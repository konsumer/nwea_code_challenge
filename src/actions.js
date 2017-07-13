/**
 * Determine winner(s) of a set of cards, In the case of a tie, return all tied cards
 * @param  {number[]}  showing An array of the card values
 * @return {number[]}          An array of the card values of winner(s)
 */
export const getWinners = (showing) => {
  // XXX: 1st player always wins, now
  return [showing[0]]
}

/**
 * Shuffle and deal hands
 * @param  {Number} players The number of players to split the deck into
 * @return {Number[][]}     An array of number-arrays that represent all player's hands from a single deck
 */
export const shuffle = (players) => {
  // generate new deck and shuffle
  const cards = Array(52)
    .fill(0)
    .map((v, i) => i)
    .sort((a, b) => 0.5 - Math.random())
  const hands = []
  cards.forEach((card, c) => {
    const p = c % players
    if (!hands[p]) hands.push([])
    hands[p].push(card)
  })
  return hands
}

/**
 * Utility: set state value
 * @param  {object} state Current redux state
 * @param  {object} data  Incoming data for redux action
 * @return {object}       Modifications to redux state
 */
export const SET = (state, data) => ({[data.field]: data.value})

/**
 * Reshuffle cards and distribute hands to each player
 * @param  {object} state Current redux state
 * @param  {object} data  Incoming data for redux action
 * @return {object}       Modifications to redux state
 */
export const NEWGAME = ({numberOfPlayers}) => {
  const hands = shuffle(numberOfPlayers)
  const showing = Array(numberOfPlayers).fill(0)
  for (let i = 0; i < numberOfPlayers; i++) {
    showing[i] = hands[i].pop()
  }
  return { hands, showing }
}

/**
 * Lay down cards for 1 turn
 * @param  {object} state Current redux state
 * @param  {object} data  Incoming data for redux action
 * @return {object}       Modifications to redux state
 */
export const MOVE = ({numberOfPlayers, ...state}) => {
  const showing = state.showing.slice()
  const hands = state.hands.slice()
  const winners = getWinners(showing)
  if (winners.length === 1) { // 1 winner, no war, all others give this player their card
    const winner = showing.indexOf(winners[0])
    showing.forEach(card => {
      if (card !== null) {
        hands[winner].unshift(card)
      }
    })
  }
  for (let i = 0; i < numberOfPlayers; i++) {
    if (hands[i].length) {
      const card = hands[i].pop()
      showing[i] = card
    } else {
      showing[i] = null
    }
  }
  return { hands, showing }
}

// exposed actions
export default { SET, NEWGAME, MOVE }
