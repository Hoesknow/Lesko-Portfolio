function range(a, b) {
  var array = [];

  while (a < b + 1) {
    array.push(a++);
  }
	 return array;
}
console.log(range(-4, 2))