import alfabeto from "./Palavras"

export default function App() {
    return (
        <main className ="main">
            <div className ="top">
                <img className ="img-game" src="assets/forca0.png" />
                <div className ="start">
                    <button className ="start-game">Escolha uma palavra</button>
                    <span className ="mask">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</span>
                </div>
            </div>
            <div className ="bottom">
                <ul className ="keyboard">
                    {alfabeto.map((l) => <li className ="letter"><button className ="letter-button">{l.toUpperCase()}</button></li>)}
                </ul>
                <div className ="guess">
                    <span className ="guess-span">Já sei a palavra?</span>
                    <input className ="guess-input"></input>
                    <button className ="guess-button">Chutar</button>
                </div>
            </div>
        </main>
    )
}