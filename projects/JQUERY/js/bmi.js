const MIN_WEIGHT = 1;
const MAX_WEIGHT = 777;
const MIN_HEIGHT = 12;
const MAX_HEIGHT = 96;

$(document).ready(function () {
    $("#main").click(function () {
        var total_under_weight = 0,
            total_over_weight = 0,
            total_obese = 0,
            total_optimal = 0;

        var errorFound = false;

        do {
            var weight = prompt("Please enter your weight in pounds(1-777lbs)", "");
            if (isNaN(weight) || weight == null || weight <= MIN_WEIGHT || weight >= MAX_WEIGHT) {
                $('#weightError').text("* Please enter a valid number 1 - 777 pounds").fadeIn().delay(3000).fadeTo(function () {
                    $('#weightError').text("*");
                });
                errorFound = true;
            }
            var height = prompt("Please enter your height in inches (12-96in)", "");
            if (isNaN(height) || height == null || height <= MIN_HEIGHT || height >= MAX_HEIGHT) {
                $('#heightError').text("* Please enter a valid number 12 - 96 inches").fadeIn().delay(3000).fadeTo(function () {
                    $('#heightError').text("*");
                });
                errorFound = true;
            }

            if (errorFound != true) {
                var BMIResult = BMI(height, weight);
                BMIResult = BMIResult.toFixed(2);
            }

            var again = prompt("You want to continue (y/n) ", "")
            if (!(again == "y")) {
                errorFound = true
            }


            var x = "";

            if (BMIResult < 18.5) {
                x = "Underweight";
                total_under_weight = total_under_weight + 1;
            } else if (BMIResult >= 18.5 && BMIResult < 25) {
                x = "Normal";
                total_optimal = total_optimal + 1;
            } else if (BMIResult >= 25 && BMIResult < 30) {
                x = "Overweight";
                total_over_weight = total_over_weight + 1;
            } else if (BMIResult >= 30) {
                x = "Obese";
                total_obese = total_obese + 1;
            }

            $('#weight').val(weight);
            $('#height').val(height);
            $('#bmiresult').val("BMI = " + BMIResult + " " + x);
            $('#underweight').val(total_under_weight);
            $('#normal').val(total_optimal);
            $('#overweight').val(total_over_weight);
            $('#obese').val(total_obese);

        }
        while (errorFound == false);

    });
});

function BMI(height, weight) {
    return (weight / (height * height)) * 703;
}