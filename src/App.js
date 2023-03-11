import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import HeaderTags from './HeaderTags';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderTags />
      <Header />
      <Content />
    </div>
  );
}

export default App;
