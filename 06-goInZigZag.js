//my approach

function goInZigZag(N, M, matrix){
  let fullStr = '';
    for(let i=0; i<N; i++){
      let str = '';
      if(i%2===0){
        for(let j=M-1; j>=0; j--){
          str+=matrix[i][j] + ' ';
        }
      }else{
        for(let k=0; k<M; k++){
          str+=matrix[i][k] + ' ';
        }
      }
      fullStr+= str;
    }
    console.log(fullStr);
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  let [N, M] = a[0].split(' ').map(Number);
  let ar = [];
  for(let i=1; i<a.length; i++){
    let b = a[i].split(' ').map(Number);
    ar.push(b);
  }
  goInZigZag(N, M, ar);
}
