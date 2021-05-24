import './Car.css';

export default function Car(props) {
    let {model, color, power, wolume, driver} = props;
    return (
        <div>
            <h2> {model} </h2>
            <p> {color} </p>
            <p> {power} </p>
            <p> {wolume} </p>
            <p> {driver} </p>


        </div>
    );
}