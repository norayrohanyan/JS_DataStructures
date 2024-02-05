// function BubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//         let flag = true;
//         for (let j = 0; j < arr.length - i - 1; ++j) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 flag = false;
//             }
//         }
//         if (flag) {
//             return arr;
//         }
//     }
//     return arr;
// }

// console.log(BubbleSort([7, 2, 3, 5, 8]));


// function InsertionSort(arr) {
//     for (let i = 1; i < arr.length; ++i) {
//         let tmp = arr[i];
//         let j = i - 1;
//         while(j >= 0 && tmp < arr[j]) {
//             arr[j + 1] = arr[j];
//             --j;
//         }
//         arr[j + 1] = tmp;
//     }
//     return arr;
// }

// console.log(InsertionSort([2, 7, 3, 8, 5]));


// function SelectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; ++i) {
//         let index = i;
//         for (let j = i + 1; j < arr.length; ++j) {
//             if (arr[index] > arr[j]) {
//                 index = j;
//             }
//         }
//         [arr[i], arr[index]] = [arr[index], arr[i]];
//     }
//     return arr;
// }

// console.log(SelectionSort([2, 7, 3, 8, 5]));


// function merge(arr, start, mid, end) {  
//     let tmp = [];
//     let s1 = start;
//     let e1 = mid;
//     let s2 = mid + 1;
//     let e2 = end;
//     let k = 0;

//     while((s1 <= e1) && (s2 <= e2)) {
//         if (arr[s1] > arr[s2]) {
//             tmp[k++] = arr[s2];
//             s2++;
//         }
//         else {
//             tmp[k++] = arr[s1];
//             s1++;
//         }
//     }

//     while(s1 <= e1) {
//         tmp[k++] = arr[s1];
//         s1++;
//     }
//     while(s2 <= e2) {
//         tmp[k++] = arr[s2];
//         s2++; 
//     }
//     for(let i = 0; i < k; ++i) {
//         arr[start++] = tmp[i];
//     }
//     return arr;
// }

// function mergeSort(arr, start = 0, end = arr.length - 1) {
//     if (start >= end) {
//         return;
//     }
//     let mid = Math.floor((start + end) / 2);
//     mergeSort(arr, start, mid);
//     mergeSort(arr, mid + 1, end);
//     merge(arr, start, mid, end);
//     return arr;
// }
// console.log(mergeSort([4, 8, 7, 2, 11, 1, 3]));

function Partition(arr, start, end) {
    let pivot = arr[end];
    let i = start - 1;
    for (let j = start; j < end; ++j) {
        if (arr[j] < pivot) {
            ++i;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

function QuickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }
    let pivot = Partition(arr, start, end);
    QuickSort(arr, start, pivot - 1);
    QuickSort(arr, pivot + 1, end);
    return arr;
}

console.log(QuickSort([4, 8, 7, 2, 11, 1, 3]));
