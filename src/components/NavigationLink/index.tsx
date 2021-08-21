import { Wrapwer } from './styles'
import { ReactNode } from 'react'

type NavigationLinkProps = {
    children: ReactNode;
    source: string;
    title: string;
}

const NavigationLink = (props: NavigationLinkProps) => {
  const { children, source, title } = props

  return (
    <Wrapwer
      href={source}
      title={title}
    >
      {children}
    </Wrapwer>
  )
}

export { NavigationLink }
