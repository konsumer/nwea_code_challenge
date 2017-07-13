import test from 'tape'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Card from './Card'

const expected = [
  ['♠', 'A'],
  ['♣', 'A'],
  ['♥', 'A'],
  ['♦', 'A'],
  ['♠', '2'],
  ['♣', '2'],
  ['♥', '2'],
  ['♦', '2'],
  ['♠', '3'],
  ['♣', '3'],
  ['♥', '3'],
  ['♦', '3'],
  ['♠', '4'],
  ['♣', '4'],
  ['♥', '4'],
  ['♦', '4'],
  ['♠', '5'],
  ['♣', '5'],
  ['♥', '5'],
  ['♦', '5'],
  ['♠', '6'],
  ['♣', '6'],
  ['♥', '6'],
  ['♦', '6'],
  ['♠', '7'],
  ['♣', '7'],
  ['♥', '7'],
  ['♦', '7'],
  ['♠', '8'],
  ['♣', '8'],
  ['♥', '8'],
  ['♦', '8'],
  ['♠', '9'],
  ['♣', '9'],
  ['♥', '9'],
  ['♦', '9'],
  ['♠', '10'],
  ['♣', '10'],
  ['♥', '10'],
  ['♦', '10'],
  ['♠', 'J'],
  ['♣', 'J'],
  ['♥', 'J'],
  ['♦', 'J'],
  ['♠', 'Q'],
  ['♣', 'Q'],
  ['♥', 'Q'],
  ['♦', 'Q'],
  ['♠', 'K'],
  ['♣', 'K'],
  ['♥', 'K'],
  ['♦', 'K']
]

test('Card', (it) => {
  it.test('expected suit/value', () => {
    it.plan(105)
    for (let i = 52; i--; i) {
      const c = TestUtils.renderIntoDocument(<Card val={i} />)
      it.equals(TestUtils.scryRenderedDOMComponentsWithClass(c, 'n')[0].innerHTML, expected[i][1])
      it.equals(TestUtils.scryRenderedDOMComponentsWithClass(c, 's')[0].innerHTML, expected[i][0])
    }
  })
})
