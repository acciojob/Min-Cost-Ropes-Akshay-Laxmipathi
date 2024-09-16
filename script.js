function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;
	while(arr.length > 1) {
	    arr.sort((a,b) => a-b);
		let first = arr.shift();
		let second = arr.shift();
		cost += first + second;
		arr.push(first + second);
		arr.sort((a,b) => a-b);
	}
	return cost;
}

module.exports=mincost;
