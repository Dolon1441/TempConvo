
function convertTemperature(inputType){
    const celsiusInput= document.getElementById('celsius');
    const fahrenheitInput= document.getElementById('fahrenheit');
    const kelvinInput= document.getElementById('kelvin');

    if(inputType=='celsius'){
        const celsiusValue= celsiusInput.value;
        if(celsiusValue!=''){
            const fahrenheitValue= (celsiusValue*(9/5))+32;
            fahrenheitInput.value= fahrenheitValue.toFixed(2);
            const kelvinValue= (celsiusValue) + 273.15;
            kelvinInput.value= kelvinValue.toFixed(2);
        }
        else{
            fahrenheitInput.value='';
            kelvinInput.value='';
        }
    }
    else if(inputType=='fahrenheit'){
        const fahrenheitValue= fahrenheitInput.value;
        if(fahrenheitValue!=''){
            const celsiusValue= (fahrenheitValue-32)*(5/9);
            celsiusInput.value= celsiusValue.toFixed(2);
            const kelvinValue= (fahrenheitValue-32)*(5/9)+273.15;
            kelvinInput.value= kelvinValue.toFixed(2);
        }
        else{
            celsiusInput.value='';
            kelvinInput.value='';
        }
    }
    else{
        const kelvinValue= kelvinInput.value;
        if(kelvinValue!=''){
            const celsiusValue= (kelvinValue - 273.15);
            celsiusInput.value= celsiusValue.toFixed(2);
            const fahrenheitValue= (kelvinValue - 273.15) * (9/5) + 32;
            fahrenheitInput.value= fahrenheitValue.toFixed(2);
        }
        else{
            celsiusInput.value='';
            fahrenheitInput.value='';
        }
    }
 
}


btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})