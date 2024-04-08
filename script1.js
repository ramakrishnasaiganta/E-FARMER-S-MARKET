function updatePrices() {
  // Simulate fetching live data (replace with actual API call)
  const priceChanges = {
    "product-1": {
      price: 80.75,
      change: -0.25
    },
    "product-2": {
      price: 130.89,
      change: -0.10
    },
    // Add price and change data for additional products here
    "product-3": {
      price: 130.25,
      change: -20.50
    },
    "product-4": {
      price: 155.49,
      change: -0.20
    },
    "product-5": {
      price: 54.49,
      change: -0.20
    },
    "product-6": {
      price: 25.49,
      change: -5.20
    },
    "product-7": {
      price: 45.49,
      change: -10.20
    },
    "product-8": {
      price: 125.49,
      change: -10.20
    },
    "product-9": {
      price: 43.49,
      change: -5.20
    },
    "product-10": {
      price: 90.49,
      change: -50.20
    },
    "product-11": {
      price: 120.49,
      change: -0.20
    },
    // ... and so on
  }

  // Update prices and color classes on the page
  for (const productId in priceChanges) {
    const priceElement = document.getElementById(productId).querySelector(".product-price span");
    const priceChange = priceChanges[productId].change;

    priceElement.textContent = priceChanges[productId].price;
    if (priceChange > 0) {
      priceElement.classList.add("increase");
    } else if (priceChange < 0) {
      priceElement.classList.add("decrease");
    }
  }
}
