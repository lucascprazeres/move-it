import { useEffect, useState } from 'react'
import styles from '../styles/components/Coundown.module.css'

export function Countdown() {
  const [isActive, setIsActive] = useState(false)
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60)

  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  useEffect(() => {
    if (isActive && remainingSeconds > 0) {
      setTimeout(() => {
        setRemainingSeconds(seconds => seconds - 1)
      }, 1000)
    }
  }, [isActive, remainingSeconds])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button type='button' className={styles.countdownButton} onClick={startCountdown}>
        Iniciar um ciclo
      </button>
    </div>
  )
}