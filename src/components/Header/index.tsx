import { Wrapper } from './styles'
import { ReactNode } from 'react'

type HeaderProps = {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export { Header }
