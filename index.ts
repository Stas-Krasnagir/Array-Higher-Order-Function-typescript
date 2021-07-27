var _ = require('lodash');

// 1. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
function sumElementToTen(list: number[]) {
  let res = list.reduce((s, v, i) => (console.log(s, v, i), { summ: s.summ + v, pos: s.summ + v > 10 ? s.pos : i + 2 }), { summ: 0, pos: 0 })
  return res.summ >= 10 ? res.pos : 0
}

let sumToTen: number[] = [2, 3, 4, 2, 5, 5];
console.log(sumElementToTen(sumToTen) === 4)
let sumToTen1: number[] = [1, 1, 1, 1, 1, 1];
console.log(sumElementToTen(sumToTen1) === 0)
let sumToTen2: number[] = [1];
console.log(sumElementToTen(sumToTen2) === 0)
let sumToTen3: number[] = [];
console.log(sumElementToTen(sumToTen3) === 0)
let sumToTen4: number[] = [21, 3, 4, 2, 5, 5];
console.log(sumElementToTen(sumToTen4) === 0)

// 2.  Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6]
// - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.

function sumElemToNull(list: number[]): number {
  if (!list.length) return 0;
  return list.slice(0, ((list.indexOf(0) === -1) ? list.length : list.indexOf(0)))
    .reduce((sum: number, currentValue: number) => sum + currentValue, 0)
}

let sumToNull1 = [1, 2, 3, 0, 4, 5, 6]
console.log(sumElemToNull(sumToNull1) === 6)
let sumToNull2 = [1, 2, 3, 4, 5, 6]
console.log(sumElemToNull(sumToNull2) === 21)
let sumToNull3 = [0, 2, 3, 4, 5, 6]
console.log(sumElemToNull(sumToNull3) === 0)
let sumToNull4 = [0]
console.log(sumElemToNull(sumToNull4) === 0)
let sumToNull5 = [1]
console.log(sumElemToNull(sumToNull5) === 1)
let sumToNull6 = []
console.log(sumElemToNull(sumToNull6) === 0)


// 3. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

function countNegativeNum(list: number[]): number {
  return list.filter(item => item < 0).length
};

let nums = [1, -2, 8, -4, 9, -11, 34]
console.log(countNegativeNum(nums) === 3)
let nums1 = [1, 2, 8, 4, 9, 11, 34]
console.log(countNegativeNum(nums1) === 0)
let nums2 = [-1, -2, -8, -4, -9, -11, -34]
console.log(countNegativeNum(nums2) === 7)
let nums3 = [-1]
console.log(countNegativeNum(nums3) === 1)
let nums4 = [1]
console.log(countNegativeNum(nums4) === 0)
let nums5 = []
console.log(countNegativeNum(nums5) === 0)


// 4. Даны два массива с числами. Найти общие числа

function findSameNum(list_1: number[], list_2: number[]): number[] {
  return list_1.filter(item => (_.includes(list_2, item)))
}

let firstNums = [1, 2, 3, 4, 5, 6];
let secondNums = [2, 5, 3, 7, 10, 9];
console.log(_.isEqual(findSameNum(firstNums, secondNums), [2, 3, 5]))

let firstNums1 = [1, 2, 3, 4, 5, 6];
let secondNums1 = [7, 10, 9];
console.log(_.isEqual(findSameNum(firstNums1, secondNums1), []))