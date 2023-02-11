
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public int totalFruit(int[] fruits) {

        Map<Integer, Integer> fruitToFrequency = new HashMap<>();
        int maxNumberOfFruits = 0;
        int head = 0;
        int tail = 0;

        while (head < fruits.length) {

            fruitToFrequency.put(fruits[head], fruitToFrequency.getOrDefault(fruits[head], 0) + 1);

            while (fruitToFrequency.size() > 2) {
                fruitToFrequency.put(fruits[tail], fruitToFrequency.get(fruits[tail]) - 1);
                if (fruitToFrequency.get(fruits[tail]) == 0) {
                    fruitToFrequency.remove(fruits[tail]);
                }
                ++tail;
            }

            maxNumberOfFruits = Math.max(maxNumberOfFruits, head - tail + 1);
            ++head;
        }
        return maxNumberOfFruits;
    }
}
