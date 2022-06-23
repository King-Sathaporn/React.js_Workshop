import "./CurrencyComponent.css";

const CurrencyComponent = (props)=>{

    const {currencyChoice, selectCurrency, changeCurrency, amount, onChange} = props;

    return(
        <div className="currency-container">
            <select value={selectCurrency} onChange={changeCurrency}>
                {
                    currencyChoice.map((item,index)=>{
                        return(
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
            <input 
            type="number" 
            placeholder="Enter Amount" 
            value={amount}
            onChange={onChange}
            />
        </div>
    )
}

export default CurrencyComponent;