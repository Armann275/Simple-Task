function triangle(N){
    let resultStr = '';
    resultStr += '* '.repeat(N);
    let count = resultStr.length - 4;
    for(let i = 1; i < N; i++){
        resultStr+= '\n'
        resultStr+= `*${" ".repeat(count)}*`;
        count-=2
    }
    return resultStr;
}
const res = triangle(10);
console.log(res);





