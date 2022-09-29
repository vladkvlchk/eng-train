import React from 'react'
import Confetti from 'react-confetti'

export default () => {
  return (
    <Confetti
      recycle={false}
      numberOfPieces={2000}
    />
  )
}