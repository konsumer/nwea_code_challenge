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
  while (cards.length) {
    for (let i = 0; i < players; i++) {
      if (!hands[i]) hands.push([])
      hands[i].push(cards.pop())
    }
  }
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
  const showing = []
  const scores = Array(numberOfPlayers).fill(0)
  for (let i = 0; i < numberOfPlayers; i++) {
    showing.push(hands[i].pop())
  }
  return { hands, showing, scores, discard: [] }
}

/**
 * Lay down cards for 1 turn
 * @param  {object} state Current redux state
 * @param  {object} data  Incoming data for redux action
 * @return {object}       Modifications to redux state
 */
export const MOVE = (state) => {
  const hands = state.hands.slice()
  const discard = state.discard.slice()
  const showing = []
  for (let i = 0; i < state.numberOfPlayers; i++) {
    discard.push(state.showing[i])
    const card = hands[i].pop()
    showing.push(card)
  }
  return { hands, discard, showing }
}

// exposed actions
export default { SET, NEWGAME, MOVE }
