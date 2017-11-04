const binary_search = function(arr, target) {
  let mid_idx = arr.length/2;
  if (arr[mid_idx] == target)
    return mid_idx
  if (target < arr[mid_idx])
    binary_search(arr.slice(0, mid_idx), target)
};

console.log(binary_search([1,2,3,5,7], 5);
