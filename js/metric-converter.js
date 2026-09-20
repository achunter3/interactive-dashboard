function metricConverter(number, conversion) {
    if (conversion === "Inch to Centimeter") {
        return number * 2.54;
    } else if (conversion === "Foot to Centimeter") {
        return number * 30.48;
    } else if (conversion === "Yard to Meter") {
        return number * 0.91;
    } else if (conversion === "Mile to Kilometer") {
        return number * 1.61;
    } else if (conversion === "Centimeter to Inch") {
        return number * 0.39;
    } else if (conversion === "Centimeter to Foot") {
        return number * 0.0328;
    } else if (conversion === "Meter to Yard") {
        return number * 1.09;
    } else if (conversion === "Kilometer to Mile") {
        return number * 0.62;
    } else {
        return "Invalid conversion selection";
    }
}


document.getElementById("convert-btn").addEventListener("click", function(event) {
  event.preventDefault();
  let number = parseFloat(document.getElementById("numeric-value").value);
  let conversion = document.getElementById("conversion-type").value;
  let starting_unit, ending_unit;
  if (conversion === "Inch to Centimeter") {
        starting_unit = "Inches";
        ending_unit = "Centimeters";
    } else if (conversion === "Foot to Centimeter") {
        starting_unit = "Feet";
        ending_unit = "Centimeters";
    } else if (conversion === "Yard to Meter") {
        starting_unit = "Yards";
        ending_unit = "Meters";
    } else if (conversion === "Mile to Kilometer") {
        starting_unit = "Miles";
        ending_unit = "Kilometers";
    } else if (conversion === "Centimeter to Inch") {
        starting_unit = "Centimeters";
        ending_unit = "Inches";
    } else if (conversion === "Centimeter to Foot") {
        starting_unit = "Centimeters";
        ending_unit = "Feet";
    } else if (conversion === "Meter to Yard") {
        starting_unit = "Meters";
        ending_unit = "Yards";
    } else if (conversion === "Kilometer to Mile") {
        starting_unit = "Kilometers";
        ending_unit = "Miles";
    } else {
        starting_unit = "Unknown";
        ending_unit = "Unknown";
    }
  let result = metricConverter(number, conversion).toFixed(2);
  let output = number.toFixed(2) + " " + starting_unit + " is equal to " + result + " " + ending_unit;
  document.getElementById("conversion-result").innerHTML =  output;
});