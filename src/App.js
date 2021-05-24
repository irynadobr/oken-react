import {useState} from "react";
import Cars from "./components/cars/Cars";

export default function App () {
    let [counter, setCount] = useState(0);
    let increment = () => {
        counter += 100;
        setCount(counter);
    }
    let decrement = () => {
        counter -= 100;
        setCount(counter);
    }
    let reset = () => {
        counter = 0;
        setCount(counter);
    }
    return (
        <div>
            <div>
                <br/>
                <h2>counter is - {counter}</h2>
                <button onClick={increment}> + 100</button>
                <button onClick={decrement}> - 100</button>
                <button onClick={reset}> 0</button>
            </div>
            <h1></h1>
            <div>
                <Cars/>

            </div>
        </div>
    );
}
