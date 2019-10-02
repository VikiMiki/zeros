module.exports = function zeros(expression) {
  // your solution
 // получили массив 
 let str=expression;
 let arrZero = str.split("*");
 let elmFactorial=0;
 let countZero=0;
 let countZeroFive=0;
 let countZeroTwo=0;
 let arrCountAll=[];

 arrZero.forEach(function(element) {
   elmFactorial=0;
   let elmZero=element.split("!");
   let elmLength=elmZero.length;
   elmFactorial=elmZero[0];
   if (elmLength == 2){
     arrCountAll=SingleFactorial(elmFactorial);
   } else {
     arrCountAll=DoubleFactorial(elmFactorial);
   }
   countZeroFive=countZeroFive+arrCountAll[0];
   countZeroTwo=countZeroTwo+arrCountAll[1];
    
  if (countZeroFive < countZeroTwo) {
    countZero= countZeroFive;     
  } else {
    countZero= countZeroTwo;
  }
});

return  countZero;

function SingleFactorial(num) {
  let degTwo = 0;
  let degFive = 0;
  let f= 1;
  let d= 1;
  let countTwo = 0;
  let countFive = 0;
  let arrCount = [];
  // для 5
  while (f>= 1) {
    degFive++;
    f = Math.floor(num / Math.pow(5, degFive));
    countFive = countFive + f;
  }
  // для 2
  while (d >= 1) {
    degTwo++;
    d = Math.floor(num / Math.pow(2, degTwo));
    countTwo = countTwo + d;
  }

  arrCount[0] = countFive;
  arrCount[1] = countTwo;
  return arrCount;
}

  function OddFactorialDouble(num) {
    let deg=0; 
    let degdec=0;    // степень для нечет
    let n=1;
    let d=1;
    let countfive=0;
    let five=0;
    let dec=0;
    let arrCount=[];
    let degri=0;
      // если нечетное
      while(n>=1){
        deg++;
        n=Math.floor(num/Math.pow(5,deg));
        five=five+n;
      }
      while(d>=1){
        degdec++;
        //d=Math.floor(num/Math.pow(10,degdec));
        degri=2*(Math.pow(5,degdec));
        d = Math.floor(num /degri);
        dec=dec+d;
      } 
      countfive= five-dec;
      
      arrCount[0]=countfive;
      arrCount[1]=0;

    return arrCount;
  }

  function EvenFactorialDouble(num){
    let degchet=0; //степень для 2
    let deg=0;  //степень для 5
    let n=1; // для 5
    let d=1; //для 2
    let counttwo=0;
    let countfive=0;
    let arrCount=[];
    let degri=0;
      // для 5
      while(n>=1){
        deg++;
        degri=2*(Math.pow(5,deg));
        //n=Math.floor(num/2*Math.pow(10,deg));
        n = Math.floor(num /degri);
        countfive=countfive+n;
      }
      // для 2
      while(d>=1){
        degchet++;
        d=Math.floor(num/Math.pow(2,degchet));
        counttwo=counttwo+d;
      } 
      arrCount[0]=countfive;
      arrCount[1]=counttwo;
    return arrCount;  
  }
 
  function DoubleFactorial(num){
    let arrsum=[];
    if (num % 2 === 0){
      arrsum=EvenFactorialDouble(num);
    } else {
      arrsum=OddFactorialDouble(num);
    }
    return arrsum;
  }
}