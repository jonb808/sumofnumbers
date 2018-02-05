const listNums = [1, 2, 3, 4];

function sumFor(nums){
  let total = 0;
  for (const num of nums){
    total += num;
  }
  return total;
}

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while (i < nums.length){
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums){
  if(nums.length == 0){
    return 0;
  }//else{
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums){
  return _.reduce(nums, function(memo, num) {return memo + num;}, 0);
}

console.log(sumFor(listNums));
console.log(sumWhile(listNums));
console.log(sumRecursion(listNums));
console.log(sumTheSimpleWay(listNums));
