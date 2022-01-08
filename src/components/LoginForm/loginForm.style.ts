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
    }

    .errorMsg {
        color: red;
        font-size: 8px;
        color: #FF5555;
    }

    
    
`

export const Input = styled.input`
    border: none;
    width: 220px;
    height: 36px;
    left: 22px;
    top: 162.56px;
    background: #773db114;
    opacity: 0.5;
    box-shadow: inset 0px 4px 15px #00000040, inset 0px -5.95px 15px 3px #ffffffcc;
    border-radius: 10px; 
    

`


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 265px;
    height: 370px;
    box-shadow: 0px 6px 10px #66009926;
    border-radius: 15px;
    background-color: white;
`

export const Submit = styled.input<ButtonProps>`
    ${({disabled}) =>  css`
    position: relative;
    font-style: normal;
    border: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    width: 220px;
    height: 37px;
    background: linear-gradient(180deg, #45108a33 0%, #a45eff33 94.59%); 
    box-shadow: 0px -4px 6px #ffffff33, 0px 5px 10px #00000026;
    border-radius: 10px;
    margin-top: 15px;
    
    ${disabled} {
        background: linear-gradient(180deg, #45108a80 0%, #a45eff80 94.59%);         
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

