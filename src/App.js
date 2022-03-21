import { useState } from 'react';
import './App.css';
import KayitFormu from './KayitFormu';
import SayiliButonlar from './SayiliButonlar';
import Sepet from './Sepet';

function App() {
  const [sonUye, setSonUye] = useState("-");

  const kayitVar = function(ad, soyad) {
    setSonUye(ad + " " + soyad);
  };

  return (
    <div className="App">
        <h1>Formlarla Çalışma</h1>
        <SayiliButonlar />
        <Sepet />
        <p>En Son Üyemiz: {sonUye}</p>
        <KayitFormu kaydedildiginde={kayitVar} />
    </div>
  );
}

export default App;
