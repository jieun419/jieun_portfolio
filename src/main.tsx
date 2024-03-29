import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import './index.css'
import App from './App';
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
)
