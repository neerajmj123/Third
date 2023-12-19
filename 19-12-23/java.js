const str1 ="the Cat is white"
const str2 ="rat eats fish"
const str3 ="Is it ok fish"
const str4 =`
Hello
good meat
is always good
hai
`;
const regexp1 =/a/;
const result = regexp1.test(str1)
console.log("result1 = ",result)//result true
//i -case sensentive
const regexp2 = /A/i
const result2 = regexp2.test(str1)
console.log("result2 = ",result2)//true

const regexp3 = /abc/
const result3 =regexp3.test(str1)
console.log("result3 =",result3)//false

const regexp4 =/[crb]a/
const result4 = regexp4.test(str1)
console .log("result4 =",result4)//false

const regexp5 =/[a-z]a/i
const result5 = regexp5.test(str1)
console .log("result5 =",result5)//true

const regexp6 =/[a-z0-9]a/i
const result6 = regexp6.test(str1)
console.log("result6 =",result6)//true

const regexp7 = /^rat/i//^ - starting with rat
const result7 = regexp7.test(str2)
console.log(" result7 =",result7)//true


const regexp8 = /fish$/i //$ - ending with fish
const result8 = regexp8.test(str2)
console.log(" result8 =",result8)//true

const regexp9 = /good$/im//m- using for multiline matching
const result9 = regexp9.test(str4)
console.log(" result9 =",result9)//true


const regexp10 = /^good/im
const result10 = regexp10.test(str4)
console.log(" result10 =",result10)//true

const regexp11 = /fishes?/im //? for  optional matching
const result11 =regexp11.test(str3)
console.log('result11 =',result11)

const regexp12 = /fish(es)?/im //() -represents the groups
const result12 =regexp12.test(str3)
console.log('result12 =',result12)

const regexp13 = /fishes*$/i //* - letter before * can occurance multiple times
const result13 = regexp13.test(str3)
console.log("result 13 =",result13)

const regexp14 =/fishes+$/i// letter before + can occurance multiple times also occur one time atleast
const result14 = regexp14.test(str3)
console.log("result 14 ", result14)

const regexp15 =/fish.$/i
const result15 = regexp15.test(str3)
console.log("result 15 ", result15)

const regexp16 =/fish.*$/i
const result16 = regexp16.test(str3)
console.log("result 16 ", result16)


{
    const regexpinp =/[a-z][a-z0-9]_*$/i
    function checkResult(value){
        const result = regexpinp.test(value)
        if(result){
            return '';
        }else{
            return 'Invalid String'
        }
    }
    const value = "_j_9ashdjd"
    let val
}