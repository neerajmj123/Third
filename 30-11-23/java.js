{
    let a =20;
    if (a==10){
        console.log("Success");
    }else if (a==15){
        console.log("processing");
    }else if (a==20){
        console.log("completed")
    }
    else {
        console.log("failed")
    }

    let num1=10;
    let preInc= ++num1;
    console.log("preIncNum",preInc);

    let num2=10;
    let postInc=num2++;
    console.log("postIncNum",postInc);

    let num3=10;
    let preDec=  --num3;
    console.log("preDecNum",preDec);

    let num4=10;
    let postDec= num4--;
    console.log("postDecNum",postDec);

    let num6=10;
    let num5=10;
    if(num5 == num6){
        console.log("both values are same");
    }
    if (num5 === num6 ){
        console.log("both values and datatypes are same ");
    }

    let day =1;
    switch(day) {
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5 :
            console.log("friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("sunday");
            break;
    }





} 