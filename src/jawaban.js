function numberGenerator() {
	for (let i = 0; i < 100; i++) {
		arrayRandom.push(Math.ceil(Math.random() * 50));
	}
}

function splitNumber(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			arrayGenap.push(arr[i]);
		}
		if (i % 2 != 0) {
			arrayGanjil.push(arr[i]);
		}
	}
}

function minArray(arr) {
	let temp = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (temp > arr[i]) {
			temp = arr[i];
		}
	}
	return temp;
}

function maxArray(arr) {
	let temp = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (temp < arr[i]) {
			temp = arr[i];
		}
	}
	return temp;
}

function totalArray(arr) {
	let temp = 0;
	for (let i = 0; i < arr.length; i++) {
		temp += arr[i];
	}
	return temp;
}

function avgArray(arr) {
	let temp = 0;
	for (let i = 0; i < arr.length; i++) {
		temp += arr[i];
	}

	return temp / arr.length;
}

function funCompareMin(genap, ganjil) {
	if (genap > ganjil) {
		return "Min lebih besar Genap";
	} else if (genap < ganjil) {
		return "Min lebih besar Ganjil";
	} else {
		return "Min ganjil dan genap setara";
	}
}

function funCompareMax(genap, ganjil) {
	if (genap > ganjil) {
		return "Max lebih besar Genap";
	} else if (genap < ganjil) {
		return "Max lebih besar Ganjil";
	} else {
		return "Max ganjil dan genap setara";
	}
}

function funCompareTotal(genap, ganjil) {
	if (genap > ganjil) {
		return "Total lebih besar Genap";
	} else if (genap < ganjil) {
		return "Total lebih besar Ganjil";
	} else {
		return "Total ganjil dan genap setara";
	}
}

function funCompareAvg(genap, ganjil) {
	if (genap > ganjil) {
		return "Rata-rata lebih besar Genap";
	} else if (genap < ganjil) {
		return "Rata-rata lebih besar Ganjil";
	} else {
		return "Rata-rata ganjil dan genap setara";
	}
}

const arrayRandom = [];
const arrayGenap = [];
const arrayGanjil = [];

numberGenerator();
splitNumber(arrayRandom);

const minArrayGenap = minArray(arrayGenap);
const minArrayGanjil = minArray(arrayGanjil);

const maxArrayGenap = maxArray(arrayGenap);
const maxArrayGanjil = maxArray(arrayGanjil);

const totalArrayGenap = totalArray(arrayGenap);
const totalArrayGanjil = totalArray(arrayGanjil);

const avgArrayGenap = avgArray(arrayGenap);
const avgArrayGanjil = avgArray(arrayGanjil);

const compareMin = funCompareMin(minArrayGenap, minArrayGanjil);
const compareMax = funCompareMax(maxArrayGenap, maxArrayGanjil);
const compareTotal = funCompareTotal(totalArrayGenap, totalArrayGanjil);
const compareAvg = funCompareAvg(avgArrayGenap, avgArrayGanjil);

console.log(arrayRandom);
console.log(arrayGenap);
console.log(arrayGanjil);
console.log(compareMin);
console.log(compareMax);
console.log(compareTotal);
console.log(compareAvg);
