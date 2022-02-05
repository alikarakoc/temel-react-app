const Home = () => {

    const handleClick = () => {
        console.log('Merhaba');
    }

    const handleClick2 = (isim) => {
        console.log(isim);
    }

    const handleClick3 = (isim, e) => {
        console.log(isim, e.target);
    }

    return (
        <div>
            <h2>Anasayfa</h2>
            <button onClick={(e) => handleClick3('Ali', e)}>Tıkla</button>
        </div>
    );
}

export default Home;