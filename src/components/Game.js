import React from 'react'
import { connect } from 'react-redux'

import './Game.css'

import Card from './Card'

export const Game = ({ showing, hands }) => (<section className='Game'>
  {showing.map((c, i) => <div key={i} className='player'>
    {hands[i].length ? <Card card={c} /> : <div className='Card out'>out</div>}
    player {i + 1} ({hands[i].length ? hands[i].length + 1 : 0})
  </div>)}
</section>)

export default connect(state => state, dispatch => ({}))(Game)
