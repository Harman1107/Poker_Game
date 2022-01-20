import logo from './logo.svg';
import './App.css';
import CardGameBoard from './CardGameBoard'
import RedRectangle, { Layout, Header, CardLayout } from './Layout-Components';

function App() {
  return (
    <div className="App">
      <Header>This is a Card Game</Header>
      <Layout>
        <CardLayout>
          <CardGameBoard />
        </CardLayout>
      </Layout>
    </div>
  );
}

export default App;
