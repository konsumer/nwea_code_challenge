import React from 'react'
import { connect } from 'react-redux'

import './Game.css'

import Card from './Card'

export const Game = ({ showing }) => (<section className='Game'>
  {showing.map((c, i) => <div className='player'><Card card={c} />player {i + 1}</div>)}
</section>)

export default connect(state => state, dispatch => ({}))(Game)
