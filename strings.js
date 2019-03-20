// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (str, count) {
		if (count === 0) {
			return "";
		}
	return str + repeatStr(str,count - 1)
	};