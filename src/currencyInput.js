import currencies from "./components/currency_count";
function CurrencyInput(props){
    return(
        <div className="group">
            <input type="text" />
            <select>
            {Object.keys(currencies).array.map(element => 
                 <option value={element}>{element}</option>
            )};
            </select>
        </div>
    );
}

export default CurrencyInput;
