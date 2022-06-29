import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="" target="">
          Ashley Cruz
        </a>{" "}
        and is{" "}
        <a href="https://github.com/ashcruzzz/new-react-weather-app">
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
