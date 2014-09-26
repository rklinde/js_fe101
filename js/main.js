// .js Calculator

// Square a number
function squareNumber(num) {
	var square = num*num;
	console.log('The result of squaring ' + num + ' is ' + square)
	return square;
}
squareNumber(3);


// Half a number 
function halfNumber(num) {
	var half = num / 2;
	console.log('Half of ' + num + ' is ' + half);
	return half;
}
halfNumber(7);


// Percentage 
function percentage(num1, num2) {
	var percent = (num1 / num2) * 100;
	console.log(num1 + ' is ' + percent + '% of ' + num2);
	return percent;
}
percentage(17,135);



// Area of a circle
function areaOfCircle(num) {
	var equation = Math.PI * (num * num);
	var area = equation.toFixed(2);
	console.log('The area for a circle with a radius of ' + num + ' is ' + area);
	return area;
}



// Calculator
function calculate(num) {
	var half = halfNumber(num);
	var square = squareNumber(half);
	var area = areaOfCircle(square);
	var percent = percentage(area, square);

	console.log(half, square, area, percent);

}

calculate(4);

