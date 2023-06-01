import { NameContainer, ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/lucascprazeres.png" alt="" />
      <NameContainer>
        <strong>Lucas Prazeres</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </NameContainer>
    </ProfileContainer>
  )
}
