async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '') {
        alert('Please enter an amount');
        return;
    }

    try {
        const apiKey = 'fca_live_upPB987lS2MSKbXgTMpxdUVWoWX2s6cdfSAuA2pl'; // Replace with your actual API key
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
        const data = await response.json();

        if (data.result === "error") {
            throw new Error(data['error-type']);
        }

        const exchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = amount * exchangeRate;

        document.getElementById('output').textContent = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: toCurrency
        }).format(convertedAmount);
    } catch (error) {
        console.error('Error fetching the exchange rates:', error);
        alert('Error fetching the exchange rates. Please try again later.');
    }
}