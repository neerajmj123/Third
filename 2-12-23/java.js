{
    let arr = [10,20,30,40,50];
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum=sum + arr[i];
    }
    console.log("Sum :",sum);
    let avg =sum/arr.length;
    console.log("avg:",avg);



    let min = arr[0];
    for(i=0;i<=arr.length;i++){
        if(arr[i]<min){
            min =arr[i];
        }
    }
    console.log("min:",min);

    let max = arr[0];
    for(i=0;i<=arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log("max:",max);

    let arr1=[-1,2,-3,5,6];
    for(i=0;i<=arr1.length;i++){
        if(arr1[i]<0){
            arr1[i]=arr1[i]*-1;
        }
    }
    console.log("arr1 :",arr1);
  


    let str ="neeraj";
    let reverse ='';
    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    console.log("reverse :",reverse);


    let arrLetter =['a','b','C','D','e','g'];
    let uppCase= [];
    uppCase =arrLetter.toUpperCase();
    

    
}
