
import './App.css';
import {Footer, Blog, Possibilty , Whatgpt3,  Header } from './containers';
import { Cta, Brand, Navbar} from './Components'
import { Features } from './containers';
function App() {
  return (
    <div className="App">
     <div className="gradient__bg">
< Navbar />
< Header />
     </div>
     <Brand />
 <Whatgpt3/>
    <Features />
   <Possibilty/>
    <Cta />
    <Blog />
    <Footer />

    </div>
  );
}

export default App;
