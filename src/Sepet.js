// rfce
import React, { useState } from 'react'
import SepetOge from './SepetOge';

function Sepet() {
    const [ogeler, setOgeler] = useState([
        { ad: "ekmek", adet: 1 },
        { ad: "tadelle", adet: 2 }
    ]);

    const [yeniOgeAd, setYeniOgeAd] = useState("");

    const handleAdetDegisti = function(indeks, degisim) {
        let yeniOgeler = [...ogeler];
        yeniOgeler[indeks].adet += degisim;
        yeniOgeler = yeniOgeler.filter(x => x.adet > 0);
        setOgeler(yeniOgeler);
    };

    const handleOgeSubmit = function(event) {
        event.preventDefault();
        let yeniOgeler = [...ogeler];
        yeniOgeler.push({ ad: yeniOgeAd, adet: 1});
        setOgeler(yeniOgeler);
        setYeniOgeAd("");
    };

    return (
        <div>
            <hr />
            <h2>Sepet ({ ogeler.reduce((toplam, oge) => toplam + oge.adet, 0) })</h2>
            <form onSubmit={handleOgeSubmit}>
                <input value={yeniOgeAd} onChange={(e) => setYeniOgeAd(e.target.value)} type="text" placeholder="alınacak.." required /> 
                <button>Ekle</button>
            </form>

            {ogeler.map((x, i) => <SepetOge key={i} indeks={i} ad={x.ad} adet={x.adet} adetDegisti={handleAdetDegisti} />)}
            <hr />
        </div>
    );
}

export default Sepet;