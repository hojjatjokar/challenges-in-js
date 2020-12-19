function finalPrices(prices) {
  result = prices.map((value, index) => {
    for (let j = index + 1; j < prices.length; j++) {
      if (prices[j] <= value) {
        return value - prices[j];
      }
    }

    return value;
  });

  return result;
}
