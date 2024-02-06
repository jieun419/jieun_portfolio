import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import './index.css';
import App from './App';
import store from './store';



ReactGA.initialize(import.meta.env.VITE_GOOGLE_AL_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
)
