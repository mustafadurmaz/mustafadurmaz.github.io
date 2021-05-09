    const currencyElOne=document.getElementById('currency-one');
    const amountElOne=document.getElementById('amount-one');
    const currencyElTwo=document.getElementById('currency-two');
    const amountElTwo=document.getElementById('amount-two');

    const rateEl=document.getElementById('rate');
    const swap=document.getElementById('swap');


    function calculate(){
        const currency_one=currencyElOne.value;
        const currency_two=currencyElTwo.value;

        fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
            .then(response=>response.json())
            .then(data=>{
                const rate=data.rates[currency_two];
                rateEl.innerText=`1 ${currency_one}=${rate} ${currency_two}`;

                amountElTwo.value=(amountElOne.value*rate).toFixed(2);
            });

            
        
    }


    currencyElOne.addEventListener('change',calculate);
    amountElOne.addEventListener('input',calculate);
    currencyElTwo.addEventListener('change',calculate);
    amountElTwo.addEventListener('input',calculate);

    swap.addEventListener('click',()=>{
      
        const temp=currencyElOne.value;
        currencyElOne.value=currencyElTwo.value;
        currencyElTwo.value=temp;
		
		calculate();
        
    });


    calculate();