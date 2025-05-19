const find = function(nums, target) {
    if (!Array.isArray(nums)) {
        throw new Error("First argument must be an array.");
    }

    if (typeof target !== "number") {
        throw new Error("Second argument must be a number.");
    }

    if (nums.length < 2) {
        throw new Error("Array must have at least two elements.");
    }

    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number") {
            throw new Error("Array must contain only numbers.");
        }

        let diff = target - nums[i];
        if (obj[diff] !== undefined) {
            return [obj[diff], i];
        }

        obj[nums[i]] = i;
    }

    throw new Error("No solution found.");
};
