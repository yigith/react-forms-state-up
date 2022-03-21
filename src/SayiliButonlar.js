import React, { useState } from 'react';
import SayiliButon from './SayiliButon';

function SayiliButonlar() {

    const butonlar = [];
    const [sayilar, setSayilar] = useState([1,2,3,4]);
    const toplam = sayilar.reduce((sonuc, x) => sonuc + x);

    const handleDegerDegisti = function(indeks, yeniDeger) {
        const yeniSayilar = [...sayilar];
        yeniSayilar[indeks] = yeniDeger;
        setSayilar(yeniSayilar);
    };

    for (let i = 0; i < sayilar.length; i++) {
        butonlar.push(<SayiliButon key={i} indeks={i} deger={sayilar[i]} degerDegisti={handleDegerDegisti} />);     
        butonlar.push(<span key={"span" + i}>{i < sayilar.length - 1 ? " + " : " = "}</span>);   
    }

    return (
        <div>
            <h2>Sayılı Butonlar</h2>
            <div>
                { butonlar }{ toplam }
            </div>
        </div>
    );
}

export default SayiliButonlar;