import ReactDOM from 'react-dom';
import App from './app';
import { createGlobalStyle } from 'styled-components'
import { StorageProvider } from './contexts/StorageContext';
import { InvoiceProvider } from './contexts/InvoiceInfoContext';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: hsl(0, 0%, 100%);
    --color-grayish-purple: hsl(231, 73%, 93%);
    --color-grayish-white: hsl(240, 27%, 98%);
    --color-green: hsl(159, 66%, 52%);
    --color-red: hsl(0, 80%, 63%);
    --color-strong-orange: hsl(34, 100%, 50%);
    --color-orange: hsl(0, 100%, 80%);
    --color-purple: hsl(252, 94%, 67%);
    --color-light-purple: hsl(252, 100%, 73%);
    --color-dark-purple: hsl(231, 37%, 63%);
    --color-semi-gray: hsl(231, 20%, 61%);
    --color-dark-gray: #254638;
    --color-very-light-black: hsla(233, 30%, 21%, 1);
    --color-light-black: hsl(233, 31%, 17%);
    --color-nearly-black: hsl(233, 30%, 11%);
    --color-darkest: hsl(231, 28%, 7%);
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--color-nearly-black);
  }

  body, 
  input, 
  button, 
  textarea, 
  select {
    font-family: 'Spartan', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <InvoiceProvider>
    <StorageProvider>
      <GlobalStyle />
      <App />
    </StorageProvider>
  </InvoiceProvider>,
  document.getElementById('root')
);

