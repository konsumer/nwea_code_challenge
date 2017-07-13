import React from 'react'
import { connect } from 'react-redux'

import './Game.css'

import Card from './Card'

export const Game = ({ showing, hands, numberOfPlayers }) => (<section className='Game'>
  {showing.map((c, i) => (hands[i].length
    ? (<div key={i} className='player'>
      <Card card={c} />
      player {i + 1} ({hands[i].length >= (52 - numberOfPlayers) ? 'winner' : hands[i].length + 1})
    </div>)
    : (<div key={i} className='player'>
      <div className='Card red out'>✘</div>
      player {i + 1} (loser)
    </div>)
  ))}
</section>)

export default connect(state => state, dispatch => ({}))(Game)
