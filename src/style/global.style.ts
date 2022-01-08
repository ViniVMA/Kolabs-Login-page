import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
        html {
            font-size: 62.5%;
        }
        html, body, #__next {
            height: 100%;
        }
        body {
            font-family: Rajdhani, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 16px;
            display: grid;
            
           
        }
      
`