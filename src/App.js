import './App.css';
import Home from './containers/Home/home';
import Helmet from 'react-helmet';

function App() {
  return (
   <>
<Helmet>
  <title>Doodle Shop</title>
  <Home/>
</Helmet>
   </>
  );
}

export default App;
