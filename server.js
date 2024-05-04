/**
 * Counts the frequency of each element in an array.
 * 
 * @param {Array} arr - The input array to count the frequency of element.
 * 
 * @returns {Object} - An object where the keys are the unique elements in the array,and the values are the frequency of each element.
 */

function CountFrequency(arr){
    const memo = {}
    arr.forEach((elem)=>{
        if(memo.hasOwnProperty(elem)){
            memo[elem]+=1;
        }else{
            memo[elem]=1;
        }
    })
    return memo;
}

console.log(CountFrequency([2,3,4,2,3,4,2,3,4]))
module.exports ={
    CountFrequency
}