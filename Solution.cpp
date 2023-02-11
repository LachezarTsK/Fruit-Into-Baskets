
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
    
public:
    int totalFruit(const vector<int>& fruits) const {
        unordered_map<int, int> fruitToFrequency;
        int maxNumberOfFruits = 0;
        int head = 0;
        int tail = 0;

        while (head < fruits.size()) {

            ++fruitToFrequency[fruits[head]];

            while (fruitToFrequency.size() > 2) {
                if (--fruitToFrequency[fruits[tail]] == 0) {
                    fruitToFrequency.erase(fruits[tail]);
                }
                ++tail;
            }

            maxNumberOfFruits = max(maxNumberOfFruits, head - tail + 1);
            ++head;
        }
        return maxNumberOfFruits;
    }
};
