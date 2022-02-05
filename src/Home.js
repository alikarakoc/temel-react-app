import { useState } from "react";

const Home = () => {

    const [sayac, setSayac] = useState(0);

    const handleClick = () => {
        console.log('Merhaba');
    }

    const handleClick2 = (isim) => {
        console.log(isim);
    }

    const handleClick3 = (isim, e) => {
        console.log(isim, e.target);
    }

    const handleClickSayac = () => {
        setSayac(sayac + 1);
        console.log(sayac);
    }

    return (
        <div>
            <h2>Anasayfa</h2>
            <p>Sayaç : {sayac}</p>
            <button onClick={(e) => handleClick3('Ali', e)}>Tıkla</button>
            <button onClick={() => handleClickSayac()}>Sayaç Arttır</button>
        </div>
    );
}

export default Home;