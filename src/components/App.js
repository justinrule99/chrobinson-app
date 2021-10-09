import {useState} from "react";
import '../styles/App.css';
import {getCountries} from "../utils";
import CountryMap from "./CountryMap";

const App = () => {
    const [input, setInput] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [countryError, setCountryError] = useState('');

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
            setCountryError(`Error: ${input} is not a valid country`);
        } else {
            setCountryError('');
        }

        setCountryList(list);
    }

    const handleClear = () => {
        setCountryList([]);
        setCountryError('');
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
                <input type="submit" value="Submit" className="button submitButton"/>
                <input type="reset" value="Clear" className="button cancelButton" onClick={handleClear}/>
            </form>
            <div className="text">
                {countryList.length ?
                    <p>{countryList.join(', ')}</p> :
                    <p>{countryError}</p>
                }
            </div>
            <CountryMap list={countryList} />
            <h4>{"Created by Justin Rule for C.H. Robinson, October 2021"}</h4>
        </div>
    );
}

export default App;
