const lengthOfLIS = function(nums) {
  // Error handling: check if input is an array
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array of numbers.");
  }

  // Check if all elements are numbers
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') {
      throw new TypeError(`All elements must be numbers. Found ${typeof nums[i]} at index ${i}.`);
    }
  }

  // Handle empty array case
  if (nums.length === 0) {
    return 0;
  }
  const sub = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let left = 0;
    let right = sub.length - 1;
    let pos = sub.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sub[mid] >= num) {
        pos = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    if (pos < sub.length) {
      sub[pos] = num;
    } else {
      sub.push(num);
    }
  }
  return sub.length;
};

