
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    const fruitToFrequency = new Map();//Map<Number, Number>
    let maxNumberOfFruits = 0;
    let head = 0;
    let tail = 0;

    while (head < fruits.length) {

        fruitToFrequency.set(fruits[head], fruitToFrequency.has(fruits[head]) ? fruitToFrequency.get(fruits[head]) + 1 : 1);

        while (fruitToFrequency.size > 2) {
            fruitToFrequency.set(fruits[tail], fruitToFrequency.get(fruits[tail]) - 1);
            if (fruitToFrequency.get(fruits[tail]) === 0) {
                fruitToFrequency.delete(fruits[tail]);
            }
            ++tail;
        }

        maxNumberOfFruits = Math.max(maxNumberOfFruits, head - tail + 1);
        ++head;
    }
    return maxNumberOfFruits;
};
