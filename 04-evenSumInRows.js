//my approach

function evenSumRows(N,M,arr){
  for(let i=0; i<N; i++){
	  let sum = 0;
	  for(let j=0; j<M; j++){
	    if(arr[i][j]%2===0){
	      sum+=arr[i][j];
	    }
	  }
	  console.log(sum);
	}
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
  evenSumRows(N, M, ar);
}
