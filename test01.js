

var answer =prompt('半角数字を入力してください');
if(answer.length !== 0){
  if( answer >= 0){
   alert('正の数');
  } else if( answer < 0){
   alert('負の数');
  }   else{
   alert('数値を入力してください');
  }
}else{
  alert('数値を入力してください');
}

var animals = ['パンダ','ライオン','キリン']

var i =0;
while(i<animals.length){
alert(animals[i]);
i++;
}

var animals = ['パンダ','ライオン','キリン']
var answer2 =prompt('パンダとライオンとキリンどれが好きですか？');
var i =0;
while(i<animals.length){
  if(answer2 =="ライオン"){
   alert("ライオン[1]");
    break;
  }
alert(animals[i]);
i++;
}

var animalWeight=[
  {'name':'パンダ','weight':'80'},
  {'name':'ライオン','weight':'200'},
  {'name':'キリン','weight':'300'},
];

var answer3 =prompt('パンダとライオンとキリンどれが好きですか？');
switch(answer3){
  case 'パンダ':alert('パンダの体重は80キロです');
 break;
  case 'ライオン':alert('ライオンの体重は100キロです');
 break;
  case 'キリン':alert('キリンの体重は300キロです');
 break;
}

var answer4 =prompt('半角数字を入力してください');

function calc(x){
  return x * x *3.14;
}

alert(calc(answer4));





