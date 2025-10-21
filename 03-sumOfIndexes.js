//my approach

function sumOfIndexes(N,M,arr){
  for(let i=0; i<N; i++){
    let str = ' ';
    for(let j=0; j<M; j++){
      let sum = i+j;
      str += sum + ' ';
    }
    console.log(str);
  }
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  let [N, M] = a[0].split(' ').map(Number);
  let ar = [];
  for(let i = 1; i<a.length; i++){
    let b = a[i].split(' ').map(Number);
    ar.push(b);
  }
  sumOfIndexes(N,M,ar);
}

main();
