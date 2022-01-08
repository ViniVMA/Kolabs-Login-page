import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
        html {
            overflow-x: hidden;
            font-size: 62.5%;
            max-height: 100vh;

        }
        html, body, #__next {
        }
        body {
            font-family: Rajdhani, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            display: grid;
            
           
        }
      
`