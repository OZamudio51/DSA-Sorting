// 1. Understanding merge sort
// Given the following list of numbers 
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// #1[1, 21], #2 [26,45], #3 [1, 21, 26, 45] 
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]
// What are the first 2 lists to be merged?
// [1, 21, 26, 45]
// Which two lists would be merged on the 7th merge?
// [1, 21, 26, 45] && [2, 9, 28, 29]

/*let arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
      // console.log(array[outputIndex++] = left[i]);
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  // console.log(array);
  return array;
};

function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  // console.log(mergeSort(left));
  right = mergeSort(right);
  // console.log(mergeSort(right));
  // console.log(merge(left, right, array));
  // console.log(array);
  return merge(left, right, array);
};

mergeSort(arr)
// console.log(mergeSort(arr)); */

// 2. Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array 
// in ascending order. After the first partition step has been completed, the contents of the array
//  is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct 
//  about the partition step? Explain your answer.


// The pivot could have been either 14 or 17: The array is currently sorted in such a way that
//  all items to the left of 14 are less than 14 and all items to the right of 14 are greater 
// than 14. This also holds true for 17. Therefore, either of these numbers could have been 
// the pivot. No other value in the array meets this criteria.
// let data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ');
// data = data.map(num => parseInt(num));

// function qSort(array, start = 0, end = array.length) {
//   if (start >= end) {
//       return array;
//   }
//   const middle = partition(array, start, end);
//   array = qSort(array, start, middle);
//   array = qSort(array, middle + 1, end);
//   return array;
// };
// function swap(array, i, j) {
//   const tmp = array[i];
//   array[i] = array[j];
//   array[j] = tmp;
// };

// function partition(array, start, end) {
//   const pivot = array[end - 1];
//   let j = start;
//   for (let i = start; i < end - 1; i++) {
//       if (array[i] <= pivot) {
//           swap(array, i, j);
//           j++;
//       }
//   }
//   swap(array, end-1, j);
//   return j;
// };

// function main(){
//   const sorted = qSort(data);
//   // console.log(sorted);
//   let bool = true;
//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (sorted[i] > sorted[i+1]) bool = false;
//   }
//   // console.log(bool);
// }
// console.log(main())

function mSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort (left);
  right = mSort (right);
  return merge (left, right, arr);
}

function merge (left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      arr[outputI++] = left[leftI++];
    }
    else {
      arr[outputI++] = right[rightI++];
    }
  }
  for (let i = leftI; i < left.length; i++) {
    arr[outputI++] = left[i];
  }
  for (let i = rightI; i < right.length; i++) {
    arr[outputI++] = right[i];
  }
  return arr;
}

// function main(){
//   const sorted = mSort(data);
//   console.log(sorted);
//   let bool = true;
//   for (let i=0; i<sorted.length-1; i++) {
//     if (sorted[i] > sorted[i+1]) bool = false;
//   }
//   console.log(bool);
// }
// main();


class _Node {
  constructor(val, next) {
    this.val = val;
  this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(newItem, beforeItem) {
    if (this.head === null) {
      return this.insertFirst(newItem)
    }
    let currNode = this.head
    let prevNode = this.head

    while (currNode !== null && currNode.val !== beforeItem) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      return this.insertLast(newItem)
    }

    const tempNode = new _Node(newItem, currNode)

    prevNode.next = tempNode;

  }

  insertAfter(newItem, afterItem) {
    if (this.head === null) {
      return this.insertFirst(newItem)
    }

    let currNode = this.find(afterItem)

    if (currNode === null) {
     return this.insertLast(newItem)
    }

    const tempNode = new _Node(newItem, currNode.next)

    currNode.next = tempNode
  }

  insertAt(item, position) {
    if ( this.head === null) {
      return this.insertFirst(item)
    }

    let currNode = this.head;
    let currPosition = 1;

    while(currPosition < position -1) {
      currNode = currNode.next;
      currPosition++
    }

    const tempNode = new _Node(item, currNode.next);

    currNode.next= tempNode;

  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
        /* Return null if it's the end of the list 
           and the item is not on the list */
        if (currNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking 
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){ 
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
        // Save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.next = currNode.next;
  } 
}

function mSortList (list) {
  let currNode = list.head;
  if (currNode.next === null) {
    return list;
  }
  let length = 1;
  while (currNode.next !== null) {
    length++;
    currNode = currNode.next;
  }
  const middleI = Math.floor(length/2);
  // console.log(`middleI is ${middleI}`);
  
  //make a new right-hand list with the second half of the nodes in the list
  let leftList = splitList(list, 0, middleI);
  // console.log('displaying left-hand list');
  // display(leftList);

  //make a new left-hand list
  // console.log('##################################');
  let rightList = splitList(list, middleI, length);
  // console.log('displaying right-hand list');
  // display(rightList);
  //add all of the values up to and including the middle node to leftList
  leftList = mSortList(leftList);
  rightList = mSortList(rightList);

  return mergeLists (leftList, rightList);
  
}

function splitList (list, startI, endI) {
  //make a new list of all nodes between startI and endI, including startI but not endI.
  let currNode = list.head;
  if (currNode === null) return;
  const returnList = new LinkedList();
  let i = 0;
  while (currNode !== null) {
    if (i >= startI && i < endI) {
      returnList.insertLast(currNode.value);
    }    
    i++;
    currNode = currNode.next;
  }
  return returnList;
}

function mergeLists (leftList, rightList) {
  //given two sorted lists, return a sorted list
  //containing all values of the two component lists, in ascending order

  //create a new empty linked list
  const mergedList = new LinkedList();
  let currLeft = leftList.head;
  let currRight = rightList.head;
  
  //while we still have nodes in both lists
  while (currLeft && currRight) {
    //if the value of the left list is lower, append it to the end of mergedList
    //and move currLeft forward one node
    if (currLeft.value <= currRight.value) {
      mergedList.insertLast(currLeft.value);
      currLeft = currLeft.next;
    }
    //otherwise append the value of currRight to mergedList
    //and move currRight forward one node
    else {
      mergedList.insertLast(currRight.value);
      currRight = currRight.next;
    }
  }
  //once we've reached the end of one list
  //append values from the remaining single list until none remain
  while (currLeft) {
    mergedList.insertLast(currLeft.value);
    currLeft = currLeft.next;
  }
  while (currRight) {
    mergedList.insertLast(currRight.value);
    currRight = currRight.next;
  }
  //return the merged list
  return mergedList;
}

function display (linkedList) {
  if (linkedList.head === null) console.log(linkedList.head);
  else {
    let i=0;
    let listItem = linkedList.head;
    while (listItem.next !== null) {
      console.log(`${i}: ${listItem.value}`);
      i++;
      listItem = listItem.next;
    }
    console.log(`${i}: ${listItem.value}`);
  }
}

// function main(){
//   const LL = new LinkedList();
//   LL.insertFirst(7);
//   LL.insertFirst(8);
//   LL.insertFirst(3);
//   LL.insertFirst(6);
//   LL.insertFirst(4);
//   LL.insertFirst(1);
//   LL.insertFirst(2);
//   LL.insertFirst(5);

//   const sorted = mSortList(LL);
//   display(sorted);
// }
// // main();

// function main2() {
//   const LL1 = new LinkedList();
//   LL1.insertFirst(2);

//   const LL2 = new LinkedList();
//   LL2.insertFirst(4);

//   const merged = mergeLists(LL1, LL2);
//   display(merged);

// }
// main2();

function bucketSort (arr, min, max) {

  const numMap = new Map();
  for (let i=0; i< arr.length; i++) {
    if (numMap.get(arr[i]) === undefined) {
      numMap.set(arr[i], 1);
    }
    else {
      numMap.set(arr[i], numMap.get(arr[i])+1);
    }
  }
  let arrI = 0;
  for (let i = min; i <= max; i++) {
    let numAppearing = numMap.get(i);
    while (numAppearing) {
      arr[arrI] = i;
      numAppearing--;
      arrI++;
    }
  }
  return arr;  
}

// function main () {
//   const ARR = [3, 7, 4, 9, 12, 5, 19];
//   const MAX = Math.max(...ARR);
//   const MIN = Math.min(...ARR);
  
//   bucketSort(ARR, MIN, MAX);
//   console.log(ARR);
// }
// main();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle (arr) {
  //randomly shuffles an array in place
  for (let i = 0; i < arr.length; i++) {
    //select a random index
    let randomIndex = Math.floor(Math.random() * arr.length);
    //swap the values at i and at the randomly chosen index
    swap(i, randomIndex, arr);
  }
  //return the randomized array
  return arr;
}

function swap (i, j, arr) {
  //given two indexes in an array, swaps the values of the two.
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(shuffle(arr));


function abcOrder (str1, str2, charIndex=0) {

  if (str1 === str2) {
    return true;
  }
  if (str1.toLowerCase().charCodeAt([charIndex]) < str2.toLowerCase().charCodeAt([charIndex])) {
    return true;
  }
  else if (str1.toLowerCase().charCodeAt([charIndex]) > str2.toLowerCase().charCodeAt([charIndex])) {
    return false;
  }
  else {
    return abcOrder (str1, str2, charIndex+1);
  }
}


function mSortStrings (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSortStrings (left);
  right = mSortStrings (right);
  return mergeStringArr (left, right, arr);
}

function mergeStringArr (left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (abcOrder(left[leftI], right[rightI])) {
      arr[outputI++] = left[leftI++];
    }
    else {
      arr[outputI++] = right[rightI++];
    }
  }
  for (let i = leftI; i < left.length; i++) {
    arr[outputI++] = left[i];
  }
  for (let i = rightI; i < right.length; i++) {
    arr[outputI++] = right[i];
  }
  return arr;
}




function main () {
  const DATA = [
    'The Road to React',
    'Harry Potter and the Sorcerer\'s stone',
    'Can\'t Hurt me',
    'Eloquent JavaScript',
    'American Sniper',
    'Rainbow 6'
  ];
  mSortStrings(DATA);
  // console.log(DATA);
}
console.log(main());