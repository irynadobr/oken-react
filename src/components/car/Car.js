export default function Car ({item}) {
    return (
        <div>
            <h2> {item.producer} {item.model}
                <button> {item.producer} {item.model}</button>
            </h2>
            <p> {item.year}</p>
            <p> {item.color}</p>
            <p> {item.type}</p>
            <p> engine:{item.engine} volume:{item.volume} power:{item.power}</p>

        </div>
    );
}