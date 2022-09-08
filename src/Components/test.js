const solution = (x, y) => {
    let saldo = y;
    if (x % 5 === 0 && saldo > x + 0.5) {
        saldo = saldo - (x + 0.5);
    }

    console.log(saldo);
    return saldo;
};

solution(30, 120);
solution(42, 100);

function solution3(ip) {
    console.log(ip);
    let result = [];

    for (let i = 0; i < ip.length; i++) {
        if (ip[i] !== '.') {
            result.push(ip[i]);
        } else if (ip[i] === '.') {
            result.push('()');
        }
    }

    return result.join('');
}

console.log(solution3('1.1.1.1'));

function solution4(num) {
    let str = num.toString().split('');
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result = result + parseInt(str[i]);
    }

    return result;
}

console.log('\nSolution4 : \n');
console.log(solution4(2022));
console.log(solution4(0101));

const solution5 = (str) => {
    
	for(let i = 0; i<Attr.length; i++){
		
	}
    const jarak = Math.abs(indexa - indexb);
	
    return jarak >= 3 ? 'YES!' : 'NO!';
};

console.log('\nSolution5 : \n');

console.log(solution5('acdebae')); //yes
console.log(solution5('cdaecba')); //no
console.log(solution5('abababab')); //no
