import React from 'react'
import { connect } from 'react-redux'
import './App.css'

import Game from './Game'

export const App = ({ numberOfPlayers, onNewGame, onPlayer, onNextMove}) => (<div>
  <header>
    <h1>NWEA War</h1>
    <form>
      <select onChange={onPlayer} value={numberOfPlayers}>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
      </select>
      <button type='submit' onClick={onNewGame}>New Game</button>
    </form>
  </header>
  <main onClick={onNextMove}>
    Click the gameboard to progress.
    <Game />
  </main>
</div>)

export default connect(state => state, dispatch => ({
  onNewGame: e => {
    e.preventDefault()
    dispatch({type: 'NEWGAME'})
  },
  onPlayer: e => {
    dispatch({type: 'SET', data: {field: 'numberOfPlayers', value: e.target.value}})
  },
  onNextMove: e => {
    dispatch({type: 'MOVE'})
  }
}))(App)
