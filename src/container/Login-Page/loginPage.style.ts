import styled from 'styled-components';



export const LoginPageWrapper = styled.div`
  height: 100vh;
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1.2fr 2fr; 
  gap: 0px 0px; 
  background:
    radial-gradient(ellipse at top   , #31FF9C  -100% , transparent 60%), 
    radial-gradient(ellipse at top    right, #9A3AFA -10% , transparent 70%),
    radial-gradient(circle at bottom right, #FF72A1  -50% , transparent 70%);

    @media(max-width: 800px){
      background:
          radial-gradient(ellipse at top   , #fff  -100% , transparent 60%), 
          radial-gradient(ellipse at     right, #9A3AFA  -100% , transparent -90%),
          radial-gradient(circle at bottom right, #9A3AFA  -20% , transparent 70%);
        }
`



