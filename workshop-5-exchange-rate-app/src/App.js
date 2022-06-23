import { useEffect, useState } from "react";
import logo from './assets/images/logo.png';
import CurrencyComponent from './Components/CurrencyComponent/CurrencyComponent';

function App() {

  const [currencyChoice, setCurrencyChoice] = useState([]);

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");

  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(1);

  const [checkFormCurrency, setCheckFormCurrency] = useState(true);

  let fromAmount, toAmount;

  if (checkFormCurrency){
    fromAmount = amount;
    toAmount = amount * exchangeRate.toFixed(2);
  }else{
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(()=>{
    const base_url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    fetch(base_url)
    .then(res=>res.json())
    .then(data=>{
      setCurrencyChoice([...Object.keys(data.rates)])
      setExchangeRate(data.conversion_rates[toCurrency])
    })
    },[fromCurrency, toCurrency]//! [] is for dependency array to avoid infinite loop, if you don't put it, it will run every time the component is rendered
  )

  const amountFromCurrency = (e)=>{
    setAmount(e.target.value);
    setCheckFormCurrency(true);
  }

  const amountToCurrency = (e)=>{
    setAmount(e.target.value);
    setCheckFormCurrency(false);
  }

  return (
    <div className="App">
        <img src={logo} alt="logo" className='exchange-img'/>
        <h1>Exchange Rate</h1>
        <div className='container'>
            <CurrencyComponent 
            currencyChoice={currencyChoice} 
            selectCurrency={fromCurrency} 
            changeCurrency={(e)=>setFromCurrency(e.target.value)}
            amount={fromAmount}
            onChange={amountFromCurrency}
            />
            <div className='equal'> = </div>
            <CurrencyComponent 
            currencyChoice={currencyChoice} 
            selectCurrency={toCurrency}
            changeCurrency={(e)=>setToCurrency(e.target.value)}
            amount={toAmount}
            onChange={amountToCurrency}
            />
        </div>
    </div>
  );
}

export default App;
