# stocky

stocky (manage stocks)

**Introduction:**

In the development of our Stocky, we leveraged the power of classes, switch statements, and error handling with try-catch-finally to create a robust and user-friendly tool for managing stock portfolios. This write-up aims to provide a detailed explanation of how these programming concepts were utilized to build key features within our application.

**I. Classes for Stocks and Portfolios:**

**Stock Class:**
Our application revolves around the concept of stocks. To model individual stocks effectively, we created a `Stock` class. This class encapsulates the attributes and behavior associated with each stock. Here's how we implemented it:

*   **Properties:** The `Stock` class includes properties such as `symbol`, `numShares`, `purchasePrice`, and `currentPrice` to represent the essential characteristics of a stock.

*   **Methods:** We added methods to calculate the current value of a stock (`calculateValue()`) and update its current price (`updatePrice(newPrice)`). These methods enable users to track the real-time value of their holdings.

**Portfolio Class:**
To organize and manage multiple stocks, we developed a `Portfolio` class:

*   **Properties:** The `Portfolio` class holds properties like `name`, `owner`, and an array of `Stock` objects (`stocks`) to maintain information about each portfolio's name, owner, and constituent stocks.

*   **Methods:** We implemented methods to add and remove stocks from a portfolio (`addStock(stock)`, `removeStock(stockSymbol)`), calculate the total value of a portfolio (`calculateTotalValue()`), and list the portfolio's holdings (`listStocks()`).

**II. Utilizing Switch Statements:**

Switch statements were employed for user interaction within the application. For example:

*   **User Actions:** When users interact with the application, they select actions such as adding stocks from their portfolio. We use switch statements to route these actions to the appropriate methods, providing a clear and intuitive user experience.

**III. Error Handling with Try-Catch-Finally:**

To enhance the robustness of our application, we implemented error handling using try-catch-finally statements. Here's how they were integrated:

*   **Insufficient Funds:** When users attempt to purchase stocks with insufficient funds, we employ try-catch blocks to handle this scenario gracefully, providing informative error messages.

**Conclusion:**

Incorporating classes, switch statements, and error handling with try-catch-finally has been pivotal in the development of our Stock Portfolio Tracker. These programming concepts have enabled us to build a feature-rich and user-friendly application that empowers users to manage their investments effectively, while also ensuring a robust and reliable user experience.
