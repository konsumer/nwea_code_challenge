import React from 'react'
import './Card.css'

/**
 * Get color of a value card
 * @param  {number} value A value 0-51 that represents a card
 * @return {string}       "red" or "black"
 */
export const getColor = value => (value % 4) > 1 ? 'red' : 'black'

/**
 * Get suit of a value card
 * @param  {number} value A value 0-51 that represents a card
 * @return {string}       The 1-character suit symbol
 */
export const getSuit = value => ('♠♣♥♦')[value % 4]

/**
 * Get value of card
 * @param  {number} value A value 0-51 that represents a card
 * @return {string}       One of A 1 2 3 4 5 6 7 8 9 10 J Q K
 */
export const getVal = value => {
  const n = ('234567890JQKA')[(value / 4) | 0]
  return n === '0' ? '10' : n
}

export const Card = ({card}) => {
  const value = card % 52
  const suit = getSuit(value)
  const val = getVal(value)
  return (
    <div className={`Card ${getColor(value)}`}>
      <div className='top'>
        <span className='n'>{val}</span>
        <span className='s'>{suit}</span>
      </div>
      <div className='bottom'>
        <span className='n'>{val}</span>
        <span className='s'>{suit}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  card: React.PropTypes.number
}

export default Card
