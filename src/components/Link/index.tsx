import { Wrapwer } from './styles'
import { ReactNode } from 'react'

type LinkProps = {
    children: ReactNode;
    source: string;
    title: string;
}

const Link = (props: LinkProps) => {
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

export { Link }
