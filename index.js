const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function removeLastKitten(name){
  var array = kittens;
  array.pop();
  return array;
}

function removeFirstKitten(){
  var array = kittens;
  array.shift();
  return array;
}
