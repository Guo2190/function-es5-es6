/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0
    }
    const arr = new Array(amount + 1).fill(Number.MAX_VALUE)
    arr[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (let c = 0; c < coins.length; c++) {
            if (i - coins[c] < 0) continue;
            arr[i] = Math.min(arr[i], arr[i - coins[c]] + 1)
        }
    }
    return arr[amount] == amount ? -1 : arr[amount]
};
console.log(coinChange([1, 2, 5], 11))