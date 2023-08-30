import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import './index.css'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
)
