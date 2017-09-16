const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function removeLastKitten(){
  var array = kittens;
  kittens.pop();
  return kittens;
}

function removeFirstKitten(){
  var array = kittens;
  array.shift();
  return array;
}
