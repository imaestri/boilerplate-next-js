import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, ReactJs e styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor criando código"
    />
  </S.Wrapper>
)

export default Main
