import styled from 'styled-components'

type wrapperProps = {
    src: string;
}

export const Wrapper = styled.main`
    background-image: url(${({ src }: wrapperProps) => src});
    background-size: cover;
    height: 335px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 280px) and (max-width: 560px) {
        height: 250px;
    }   
`

