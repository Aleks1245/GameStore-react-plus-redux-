import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import { store } from './redux';
import GamePage from './pages/game-page/game-page';
import OrderPage from './pages/order-page/order-page';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/app/:title" element={<GamePage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
