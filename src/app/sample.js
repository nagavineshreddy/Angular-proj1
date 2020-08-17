var p="a3c9b2c1";

var q=p.split("");
var obj={};
for(var i=0;i<q.length;i++){
    if(i%2!=0){
        
        obj[q[i-1]]=parseInt([q[i]])+(parseInt(obj[q[i-1]])||0);
    
    }
}
console.log(obj);
k=[];
for(var j in obj){
    k.push(j);
}
k.sort();
console.log(k);



// var g=p.split("");
// var k='';


// for(var i=0;i<p.length;i++){

//     if(i%2!=1){
//         q=parseInt(p[i+1]);
//         while(q!=0){
//             k=k+p[i];
//             q--;
//         }
//     }
// }
// m=k.split('');
// n=new Set(m);
// b=[...n];
// m.sort();
// obj={};

// for(var x=0;x<m.length;x++){
//     obj[m[x]]=1+((parseInt(obj[m[x]]))||0);
// }
// d='';
// for (let y in obj){
//     d=d+y+obj[y]
// }
// console.log(d);






