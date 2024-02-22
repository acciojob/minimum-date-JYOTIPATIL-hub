function minDate(dates) {
  //write you code here
	// Define a function minDate that takes an array of dates as a parameter
function minDate(dates) {
  // Declare a variable to store the minimum date, initialized to the first element of the array
  let min = dates[0];

  // Loop through the rest of the array, starting from the second element
  for (let i = 1; i < dates.length; i++) {
    // Compare the current date with the minimum date using the < operator
    // The < operator compares strings lexicographically, which works for the YYYY/MM/DD format
    if (dates[i] < min) {
      // If the current date is smaller than the minimum date, update the minimum date
      min = dates[i];
    }
  }

  // Return the minimum date as a string
  return min;
}

}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
