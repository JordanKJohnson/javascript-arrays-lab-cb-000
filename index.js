const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function removeFirstKitten(){
  var array = kittens;
  array.shift();
  return array;
}
