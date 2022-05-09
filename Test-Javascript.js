// 1) Reverse string

let reverse=(str)=>{
    {

    return str.split(' ').map(function(word) { 
   return word.split('').reverse().join(''); 
}).join(' ');
    }
    }
    
    console.log(reverse("Welcome to this Javascript Guide"));
    
    

    // 2)Append an Object To an Array

    let appendObj=(arr ,obj)=>{
        arr.push(obj);
         console.log(arr);
     }
let array=[1,2,3];
   let object={name:'Sushmi', hometown:'nilgiris'};
     appendObj(array,object);

     

    //  3)Amstrong number

    let amstrong=0;
    let number=371;
    let temp=number;
    while(temp>0){
        let remainder=temp%10;
        amstrong = amstrong + remainder * remainder*remainder;
        temp=parseInt(temp/10);
    }
    if(amstrong == number)
    {
        console.log('Yes');
    }
    else{
        console.log('No');
    }
