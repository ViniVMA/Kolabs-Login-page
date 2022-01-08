import styled from "styled-components"

export const CreateTechnology = styled.div`
    align-self: end;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    line-height: 112px;
    letter-spacing: -2.5px;

    @media(max-width: 800px){
     line-height: 56px;
     padding-bottom: 15px;

     }

    .create {
     font-size: 7.2rem;

     @media(max-width: 800px){
     font-size: 3.6rem;
     }
    }

    .technology {
      font-size: 14.4rem;

      @media(max-width: 800px){
     font-size: 6.4rem;
     }
    }

`