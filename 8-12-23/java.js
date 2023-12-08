{
    let btn =document.getElementById('btn');
    console.log("btn :".btn);
    let inp =document.getElementById('inp')
    console.log("inp ",inp);

    btn.addEventListener('click',function() {
        alert("button clicked");
    });
    btn.addEventListener('mouseover',function(){
        console.log("mouse over event fired....");
    });
    btn.addEventListener('mouseout',function(){
        console.log("mouse out event fired....");
    });
    btn.addEventListener('mousedown',function(){
        console.log("mouse down event fired....");
    });
    btn.addEventListener('mouseup',function(){
        console.log("mouse up event fired....");
    });
    btn.addEventListener('mousemove',function(){
        console.log("mouse move event fired....");
    });

    inp.addEventListener('keyup',function(){
        console.log("keyup event fired")
    })
    inp.addEventListener('keydown',function(){
        console.log("keydown event fired")
    })
}
{
    console.log("math.sqrt(4)",Math.sqrt(16));
    console.log("math.round(11.2)",Math.round(11.2));
    console.log("math.ceil(10.1)",Math.ceil(10.1))
    console.log("math.ceil",Math.ceil(10.9))
    console.log("math.floor(10.8)",Math.floor(10.8))
    console.log("math.abs(-2)",Math.abs(-2))
    console.log("math.pi",Math.PI)
    console.log("math.max(1,2,3)",Math.max(1,2,3))
    console.log("math.min(1,2,3)",Math.min(1,2,3))
    console.log("math.pow(2,4)",Math.pow(2,4))



    setTimeout(function(){
        console.log("frm setTimeout...")
    },4000)

    setInterval(function(){
        console.log("frm setInterval")
    },2000)

}
{
    function putZero(value){
        return value<10?"0"+value:value;
    }
    function show(){
        var time = document.getElementById('time');
        var dt =new Date();
        var hours =dt.getHours();
        var minutes =dt.getMinutes();
        var sec =dt.getSeconds();
        var ampm =hours>12?"pm":"am";
        time.innerHTML=putZero(hours%12) + ":" + putZero(minutes) + ":" + putZero(sec) + ampm ;
        setTimeout(function(){
            show();
        },1000);
    }
    show();
}