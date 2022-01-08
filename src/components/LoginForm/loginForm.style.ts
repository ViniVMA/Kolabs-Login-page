import styled, { css } from 'styled-components'



interface ButtonProps {
    disabled?: boolean | undefined;
}

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    

    h1 {
        font-size: 50px;
        color: #262626;

    @media(max-width: 800px){
            background: rgb(69,16,138);
            background: linear-gradient(180deg, rgba(69,16,138,1) 16%, rgba(164,94,255,1) 66%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        }
    }

    span {
        font-weight: 600;
        line-height: 16px;
        letter-spacing: 1.5px;

        
    }

    .labels {
        font-size: 10px;
        margin: 5px 0;
        color: #393939;
        
        @media(max-width: 800px){
            color: #9966CC;
        }
    }

    .errorMsg {
        color: red;
        font-size: 8px;
        color: #FF5555;
    }

    
    
`

export const Input = styled.input`
    border: none;
    width: 22.0rem;
    height: 3.6rem;
    left: 22px;
    top: 162.56px;
    background: #773db114;
    opacity: 0.5;
    box-shadow: inset 0px 4px 15px #00000040, inset 0px -5.95px 15px 3px #ffffffcc;
    border-radius: 10px; 
    padding-left: 5px;
    

`


export const FormContainer = styled.div`
    position: relative;
    bottom: 8%;
    grid-row: 2;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 26.5rem;
    height: 37.0rem;
    box-shadow: 0px 6px 10px #66009926;
    border-radius: 1.5rem;
    background: linear-gradient(180deg, #ffffffbf 0%, #ffffff1a 100%);
    backdrop-filter: blur(10px);
    
`

export const Submit = styled.button<ButtonProps>`
    ${({disabled}) =>  css`
    position: relative;
    font-style: normal;
    border: none;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #fff;
    width: 22.0rem;
    height: 3.7rem;
    background: linear-gradient(180deg, #45108a80 0%, #a45eff80 94.59%);  
    box-shadow: 0px -4px 6px #ffffff33, 0px 5px 10px #00000026;
    border-radius: 10px;
    margin-top: 25px;
    
    ${disabled} {
        background: linear-gradient(180deg, #45108a33 0%, #a45eff33 94.59%); 
        margin-top: 15px;
               
    }

        &:before {
    position: absolute;
    content: '';
    width: 93%;
    height: 50%;
    display: block;
    border-radius: 8px;
    border: 0;
    background: linear-gradient(180deg, #ffffff66 0%, rgba(255, 255, 255, 0) 100%);
    top: 2px;
    left: 3%;
    vertical-align: middle;
    `
    }
`

