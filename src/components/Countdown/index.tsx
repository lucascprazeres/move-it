import { useEffect, useState } from 'react'
import { CountdownButton, CountdownContainer, DigitGroup } from './styles'

export function Countdown() {
  const [isActive, setIsActive] = useState(false)
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60)

  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function toggleCountdown() {
    setIsActive((active) => !active)
  }

  useEffect(() => {
    if (isActive && remainingSeconds > 0) {
      setTimeout(() => {
        setRemainingSeconds((seconds) => seconds - 1)
      }, 1000)
    }
  }, [isActive, remainingSeconds])

  return (
    <div>
      <CountdownContainer>
        <DigitGroup>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </DigitGroup>
        <span>:</span>
        <DigitGroup>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </DigitGroup>
      </CountdownContainer>

      <CountdownButton type="button" onClick={toggleCountdown}>
        {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
      </CountdownButton>
    </div>
  )
}
