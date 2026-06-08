class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            console.log({ i });
            for (let j = i; j < heights.length; j++) {
                // console.log({ j });
                maxArea = Math.max(maxArea, Math.min(heights[i], heights[j]) * (j - i));
            }
        }

        console.log({ maxArea });

        return maxArea
    }
}
