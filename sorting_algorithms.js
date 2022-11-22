//Given this array: 
const arr = [12, 3, 14, 18, 2, 7, 9]
// Start by visualizing the sorting algorithm and solve without looking at the class notes!
// Please sort from smallest to largest using:

const javaScriptMethod = (arr) => {
    return arr.sort((a, b) => a - b)
}
// console.log(javaScriptMethod(arr))

const bubbleSortMethod = (arr) => {
    let noSwap

    for(let i = arr.length - 1; i >  0; i++){
        noSwap = true 
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + i]){
                let temp = arr[j]
                arr[j] = arr[j + i]
                arr[j + 1] = temp
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}
// console.log(bubbleSortMethod(arr))

const selectionSortMethod = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let low = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[low]){
                low = j
            }
        }
        if (low !== i) {
            [arr[i], arr[low]] = [arr[low], arr[i]]
        }
    }
    return arr
}
// console.log(selectionSortMethod(arr))

const insertionSortMethod = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let currVal = arr[i]
        j = i - 1

        while(j >= 0 && arr[j] > currVal){
            arr[j+1] = arr[j]
            j--
        }
        arr[j + 1] = currVal
    }
    return arr
}
// console.log(insertionSortMethod(arr))
