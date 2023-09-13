class Stock {
  constructor(symbol, numShares, currentPrice, purchaseDate = new Date()) {
    this.symbol = symbol;
    this.numShares = numShares;
    this.currentPrice = currentPrice;
    this.purchaseDate = purchaseDate;
  }

  calculateValue = () => {
    return this.numShares * this.currentPrice;
  }

  updatePrice = (newPrice) => {
    if (newPrice < 0) throw new Error('Price cannot be negative');
    this.currentPrice = newPrice;
  }

  addShares = (numShares) => {
    if (numShares < 0) throw new Error('Cannot add negative shares');
    this.numShares += numShares;
  }

  sellShares = (numShares) => {
    if (numShares < 0) throw new Error('Cannot sell negative shares');
    this.numShares -= numShares;
  }

  getInfo = () => {
    return {
      symbol: this.symbol,
      numShares: this.numShares,
      currentPrice: this.currentPrice,
      purchaseDate: this.purchaseDate,
    }
  }
}

class Portfolio {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    this.stocks = [];
    this.creationDate = new Date();
  }

  addStock = (stock) => {
    this.stocks.push(stock);
  }

  removeStock = (stockSymbol) => {
    this.stocks = this.stocks.filter(stock => stock.symbol !== stockSymbol);
  }

  calculateTotalValue = () => {
    return this.stocks.reduce((total, stock) => total + stock.calculateValue(), 0);
  }

  listStocks = () => {
    return this.stocks.map(stock => stock.getInfo());
  }

  getInfo = () => {
    return {
      name: this.name,
      owner: this.owner,
      stocks: this.listStocks(),
      creationDate: this.creationDate,
    }
  }
}

class User {
  constructor(name, username, email) {
    this.id = Math.floor(Math.random() * 1000000);
    this.name = name;
    this.username = username;
    this.email = email;
    this.registrationDate = new Date();
    this.portfolios = [];
    this.balance = 12034;
  }

  addPortfolio = (portfolio) => {
    this.portfolios.push(portfolio);
  }

  deletePortfolio = (portfolioName) => {
    this.portfolios = this.portfolios.filter(portfolio => portfolio.name !== portfolioName);
  }

  listPortfolios = () => {
    return this.portfolios.map(portfolio => portfolio.getInfo());
  }

  withdrawFunds = (amount) => {
    if (amount < 0) throw new Error('Cannot withdraw negative amount');
    this.balance -= amount;
  }

  depositFunds = (amount) => {
    if (amount < 0) throw new Error('Cannot deposit negative amount');
    this.balance += amount;
  }
  getAccountBalance = () => {
    return this.balance;
  }

  getUserInfo = () => {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      registrationDate: this.registrationDate,
      portfolios: this.listPortfolios(),
      balance: this.balance,
    }
  }
}
const user = new User('Lectus Man', 'mrlectus', "mrlectus@example.com");
const portfolio = new Portfolio('lectus', user);
document.querySelector("#username").textContent = user.getUserInfo().username;
document.querySelector("#balance").textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(user.getAccountBalance());
document.querySelectorAll("button").forEach((button) => {
  let stock = undefined;
  switch (button.id) {
    case 'button1':
      button.addEventListener('click', (_e) => {
        stock = new Stock('AAPL', 18, 189.45);
        if (user.getAccountBalance() < stock.calculateValue()) {
          alert('Not enough funds!');
          return;
        }
        portfolio.addStock(stock);
        alert('Stock added!');
        const trow = document.createElement('tr');
        document.querySelector("#mystock").appendChild(trow);
        const fragment = document.createDocumentFragment();
        const stockInfo = [stock.symbol, stock.currentPrice, stock.numShares];
        stockInfo.forEach((info) => {
          const td = document.createElement('td');
          td.textContent = info;
          fragment.appendChild(td);
        });
        trow.appendChild(fragment);
        user.withdrawFunds(stock.calculateValue());
        document.querySelector("#balance").textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(user.getAccountBalance());

      });
      break;
    case 'button2':
      button.addEventListener('click', (_e) => {
        stock = new Stock('AMZN', 12, 999.99);
        if (user.getAccountBalance() < stock.calculateValue()) {
          alert('Not enough funds!');
          return;
        }
        portfolio.addStock(stock);
        alert('Stock added!');
        const trow = document.createElement('tr');
        document.querySelector("#mystock").appendChild(trow);
        const fragment = document.createDocumentFragment();
        const stockInfo = [stock.symbol, stock.currentPrice, stock.numShares];
        stockInfo.forEach((info) => {
          const td = document.createElement('td');
          td.textContent = info;
          fragment.appendChild(td);
        });
        trow.appendChild(fragment);
        user.withdrawFunds(stock.calculateValue());
        document.querySelector("#balance").textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(user.getAccountBalance());

      });
      break;
    case 'button3':
      button.addEventListener('click', (_e) => {
        stock = new Stock('TOMN', 35, 765.34);
        if (user.getAccountBalance() < stock.calculateValue()) {
          alert('Not enough funds!');
          return;
        }
        portfolio.addStock(stock);
        alert('Stock added!');
        const trow = document.createElement('tr');
        document.querySelector("#mystock").appendChild(trow);
        const fragment = document.createDocumentFragment();
        const stockInfo = [stock.symbol, stock.currentPrice, stock.numShares];
        stockInfo.forEach((info) => {
          const td = document.createElement('td');
          td.textContent = info;
          fragment.appendChild(td);
        });
        trow.appendChild(fragment);
        user.withdrawFunds(stock.calculateValue());
        document.querySelector("#balance").textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(user.getAccountBalance());

      });
      break;
  }
});

document.querySelector("#portname").textContent = portfolio.getInfo().name;

document.querySelector("#update-amount").addEventListener('click', () => {
  const amount = document.querySelector("#amount").value;
  try {
    user.depositFunds(Number(amount));
  } catch (error) {
    alert(error.message);
  }
  document.querySelector("#balance").textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(user.getAccountBalance());
})
