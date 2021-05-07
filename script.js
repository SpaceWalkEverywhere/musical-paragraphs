array1=[];
function mend1(){
    for(i=1;i<=6;i++){
        array1.push(document.getElementById("in1-"+i).value);
    }
    ans=array1.join(". ");
    console.log(ans);
    document.getElementById("result").innerHTML="Para1 - "+ans;
}
array2=[];
function mend2(){
    for(x=1;x<=6;x++){
        array2.push(document.getElementById("in2-"+x).value);
    }
    ans1=array2.join(". ");
    console.log(ans1);
    document.getElementById("result1").innerHTML="Para2 - "+ans1;
}
