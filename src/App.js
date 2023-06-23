import logo from './assets/menu-button.svg';
import logoGloboCom from './assets/logo-globo.png'
import perfil from './assets/ademario-perfil.jpeg'
import g1 from './assets/g1.png'
import ge from './assets/ge.png'
import globoplay from './assets/globoplay.png'
import gshow from './assets/gshow.svg'
import cartola from './assets/cartola-logo.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='div-header-1'> 
          <div style={{display:'flex'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logoGloboCom} className="App-logo-globo-com" alt="logo" />
          </div>
          <img src={perfil} className="perfil" alt="logo" />
        </div>
        
        <div className='div-header-2'> 

            <img src={g1} className="sites" alt="logo" />
            <img src={ge} className="sites" alt="logo" />
            <img src={gshow} className="sites" alt="logo" />
            <img src={globoplay} className="sites" alt="logo" />
            <img src={cartola} className="sites" alt="logo" />
         
        </div>
      </header>
    </div>
  );
}

export default App;
