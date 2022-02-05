
function App() {
  const baslik = "Ali Karakoç";
  let okunmaSayisi = 300;
  return (
    <div className="App">
      <div className="content">
        <h1>{baslik}</h1>
        <p>Okunma Sayısı : {okunmaSayisi}</p>
      </div>
    </div>
  );
}

export default App;
