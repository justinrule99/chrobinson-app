import '../styles/App.css';
import {useState} from "react";
import {getCountries} from "../utils";
import CountryMap from "./CountryMap";

const App = () => {
    const [input, setInput] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [countryError, setCountryError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length <= 3) {
            setInput(e.target.value.toUpperCase());
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const list = getCountries(input);
        if (!list.length) {
            // error popup
            setCountryError(true);
        } else {
            setCountryError(false);
        }

        setCountryList(list);

    }

    const handleClear = () => {
        setCountryList([]);
        setInput('');
    }

    return (
        <div className="App">
            <h1 className="headerText">{"C.H. Robinson Country List"}</h1>
            <h3 className="headerText">{"Enter a 3 letter country code below, then click 'Submit' to get the path from the USA to your country"}</h3>
            <form onSubmit={handleSubmit} className="inputForm">
                <label>
                    <input
                        className="inputField"
                        type="text"
                        value={input}
                        spellCheck={false}
                        onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit" className="submitButton"/>
                <input type="reset" value="Clear" className="submitButton" onClick={handleClear}/>
            </form>
            {countryList.length ?
                <p>{countryList}</p>
                : <p>{`Error: Invalid Country`}</p>}
            <CountryMap list={countryList} />
            <h4>{"Created by Justin Rule for C.H. Robinson, October 2021"}</h4>
        </div>
    );
}

export default App;
