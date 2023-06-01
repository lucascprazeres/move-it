import { BarContainer, ExperienceBarContainer } from './styles'

export function ExperienceBar() {
  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <BarContainer percentage={70}>
        <div />
        <span>300 xp</span>
      </BarContainer>
      <span>600 xp</span>
    </ExperienceBarContainer>
  )
}
