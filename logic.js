function formatCurrency(){
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    let formattedAmount;
    
    if (amount === ''){
        alert('Please enter an amount');
        return;
    }

    switch(currency){
        case 'USD':
            formattedAmount = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount);
            break;
        case 'EUR':
            formattedAmount = new Intl.NumberFormat('en-DE', {style: 'currency', currency: 'EUR'}).format(amount);
            break;
        case 'CAD':
            formattedAmount = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(amount);
            break;
        case 'JPY':
            formattedAmount = new Intl.NumberFormat('en-JP', {style: 'currency', currency: 'JPY'}).format(amount);
            break;
        default:
            formattedAmount = amount;

    }
    document.getElementById('output').textContent = formattedAmount;
}