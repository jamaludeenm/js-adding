

var num=123,
output =[],
get=num.toString(),
lnum=get.split('');
var sum=0;
for( var i=0;i<get.length;i++){
    sum +=parseInt(get[i]);
}
console.log(  lnum[0],'+',lnum[1],'+',lnum[2],'=' ,sum);

