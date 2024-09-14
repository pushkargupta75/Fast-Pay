function buyStock(symbol) {
    alert('You are buying stock: ' + symbol);
  }
  
  function sellStock(symbol) {
    alert('You are selling stock: ' + symbol);
  }
  
  function executeTrade(action) {
    const symbol = document.getElementById('stockSymbol').value;
    const quantity = document.getElementById('quantity').value;
  
    if (symbol === '' || quantity === '') {
      alert('Please fill in all fields.');
    } else {
      alert(You are ${action}ing ${quantity} shares of ${symbol});
    }
  }