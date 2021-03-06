// Best Time To Buy And Sell Stock

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// 121. Best Time to Buy and Sell Stock
// Easy

// 6915

// 302

// Add to List

// Share
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {  
	let profit = 0;
	
	for (let i = 0; i < prices.length; i++) {
			if (i === prices.length - 1) break;
			
			for (let j = i + 1; j < prices.length; j++) {
					if (prices[j] > prices[i]) {
							profit = Math.max(profit, prices[j] - prices[i]);
					}
			}
	}
			
	return profit;
};


// First Attempt
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
// 	let pricesSorted = Array.from(prices).sort( function (a, b) {
// 			return a - b;
// 	});
	 
// 	 console.log(prices, '@@@@@prices@@@@@');
// 	 console.log(pricesSorted, '@@@@@pricesSorted@@@@@');
	 
// 	 let profit = 0;
	 
// 	 for (let i = 0; i < pricesSorted.length; i++) {
// 			 if (i === pricesSorted.length - 1) break;
			 
// 			 for (let j = i + 1; j < pricesSorted.length; j++) {
// 					 console.log(i, '@@@@@i@@@@@');
// 					 console.log(j, '@@@@@j@@@@@');
// 					 console.log(pricesSorted[i], prices.indexOf(pricesSorted[i]), '@@@@@pricesSorted[i]@@@@@');
// 					 console.log(pricesSorted[j], prices.indexOf(pricesSorted[j]), '@@@@@pricesSorted[j]@@@@@');
					 
// 					 if (prices.indexOf(pricesSorted[j]) > prices.indexOf(pricesSorted[i])) {
// 							 profit = Math.max(profit, pricesSorted[j] - pricesSorted[i]);
// 							 console.log(profit, '@@@@@new profit@@@@@');
// 					 }
// 			 }
// 	 }
			 
// 	 return profit;
// };