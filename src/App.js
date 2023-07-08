import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utils/Store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
      <Header />
      <Body />
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
