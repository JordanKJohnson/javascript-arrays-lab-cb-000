const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function prependKitten(name){
  var array = kittens;
  array.unshift(name);
  return array;
}

function removeLastKitten(){
  var array = kittens;
  array.pop();
  return array;
}

function removeFirstKitten(){
  var array = kittens;
  array.shift();
  return array;
}
