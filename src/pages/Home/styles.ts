import styled from 'styled-components'

type imageProps = {
    src: string;
}

export const Title = styled.p`
    color: #F5F8FA;
    font-size: 36px;
    margin-left: 140px;
    margin-bottom: 20px;
    padding: 80px 0 0 0;
    line-height: 54px;   

    @media screen and (max-width: 760px) {
        margin-left: 80px;
    }

    @media screen and (max-width: 562px) {
        font-size: 28px;
        margin-top: 0px;        
        padding: 10px 0 0 0;
        margin-left: 16px;
    }
        
    @media screen and (min-width: 280px) and (max-width: 759px) {     
        margin-left: 40px;
    }
`

export const Description = styled.p`
    color: #DADADA;
    font-size: 20px;
    margin-left: 140px;
    line-height: 30px;  
    

    @media screen and (max-width: 562px) {
        font-size: 16px;
        margin-left: 16px;
        padding: 10px 0 0 0;
    }
    @media screen and (max-width: 760px) {
        margin-left: 80px;
    }

    @media screen and (min-width: 280px) and (max-width: 759px) {     
        margin-left: 40px;
    }
`

export const Image = styled.img`
    src: ${({src}: imageProps) => src};
    z-index: 1;
    position: absolute;
    top: 90px;
    left: 1200px;

    @media screen and (max-width: 1864px) {
        left: 1100px;
    }


    @media screen and (max-width: 1400px) {
        left: 800px;
    }

  
    @media screen and (max-width: 1528px) {
        left: 950px;
    }

    @media screen and (max-width: 1378px) {
        left: 900px;
    }

    @media screen and (max-width: 1326px) {
        left: 850px;
    }

    @media screen and (max-width: 1274px) {
        left: 800px;
    }

    @media screen and (max-width: 1230px) {
        display: none;
    }
`
