import './App.css'
import Adidas from './assets/img/Adidas-Logo-.jpeg'
import Tenniscard from './tenniscard';

function App () {
  
  return (
  <div className='Addidas'>
<h1> Adidas</h1>
<h2> <img className='logo' src={Adidas} /> Imposible is Nothing </h2>
<Tenniscard />


</div>
  );
}

export default App;
