import { ReactNode } from 'react'
import { Wrapper } from './styles'
import imgBackground from '../../assets/images/background-main.svg'

type MainProps = {
    children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Wrapper src={imgBackground}>
      {children}
    </Wrapper>
  )
}

export { Main }
