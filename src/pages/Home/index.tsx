import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo/'
import { Main } from '../../components/Main'
import { Description, Image, Title } from './styles'
import airPlane from '../../assets/images/airplane.svg'

const Home = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Title>
          5 Continentes, <br/>
          infinitas possibilidades
        </Title>
        <Description>
          Chegou a hora de tirar do papel a viagem que você <br/>
          sempre sonhou.
        </Description>
        <Image src={airPlane} />
      </Main>
    </>
  )
}

export { Home }
