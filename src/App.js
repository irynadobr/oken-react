import './App.css';
import Car from "./components/car/Car";

export default function App() {
  return (
      <div>


        <Car
            model = {'volvo'}
            color = {'red'}
            power = {500}
            wolume = {200}
            driver = {'olga'}
        />

        <Car
            model = {'BMW'}
            color = {'yellow'}
            power = {600}
            wolume = {700}
            driver={'Olga'}
        />
        <Car mode = {'audi'}
             color = {'gren'}
             power = {300}
             wolume = {400}
             driver = {'Oleg'}
        />
      </div>
  );
}