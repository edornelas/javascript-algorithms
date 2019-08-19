// O(2^n)
//Fibobacci Recursive
function fib(n){
    if (n > 30){
        console.log("Numero muy grande, la solucion tardara mucho. Se cancela");
       return undefined;
    }

    if(n <= 2) return 1;

    console.log("N: "+n);
    console.log(n-1,n-2);
    return fib(n-1) + fib(n-2);
}

// O(N)
//Fibobacci Memoized
function fib_plus(n, memo = []){
    if(memo[n] !== undefined) return memo[n];

    if(n <= 2) return 1;

    let res = fib_plus(n-1,memo) + fib_plus(n-2,memo);

    memo[n] = res;

    return res;

}


//Fibobacci Memoized 2
function fib_plus_plus(n, memo = [undefined,1,1]){
    if(memo[n] !== undefined) return memo[n];

    let res = fib_plus(n-1,memo) + fib_plus(n-2,memo);

    memo[n] = res;

    return res;

}

//Bottom-up
//Fibobacci Memoized 2
function fib_tab(n){

    if(n <= 2) return 1;

    let fibNums = [0,1,1]
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n];

}