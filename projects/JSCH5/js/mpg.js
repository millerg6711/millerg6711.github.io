var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function () {
    calculate();
};

var calculate = function () {
    if ($('milesDrivenError').value !== '') {
        $('milesDrivenError').firstChild.nodeValue = '';
    }
    if ($('gallonsUsedError').value !== '') {
        $('gallonsUsedError').firstChild.nodeValue = '';
    }
    if ($('priceGallonError').value !== '') {
        $('priceGallonError').firstChild.nodeValue = '';
    }

    var miles = $('milesDriven').value;
    var gallons = $('gallonsUsed').value;
    var pricePerGallon = $('priceGallon').value;
    var mpg = parseFloat(miles / gallons).toFixed(1);
    var costOfTrip = parseFloat(gallons * pricePerGallon).toFixed(2);
    var perMile = parseFloat(pricePerGallon / mpg).toFixed(2);

    var errorFound = "n";

    const MINGALLONS = 1 //	Minimum gallons of gas used
    const MAXGALLONS = 100 //	Maximum gallons of gas used
    const MINMILES = 1 //	Minimum miles driven
    const MAXMILES = 1000 //	Maximum miles driven
    const MINPPG = 1.00 //	Minimum price per gallon of gas
    const MAXPPG = 5.00 //	Minimum price per gallon of gas

    if (isNaN(miles) || miles < MINMILES || miles > MAXMILES || miles == "") {
        $('milesDrivenError').firstChild.nodeValue =
            "Please enter a valid number 1 - 1000 for Miles ";
        errorFound = "y";
    }

    if (gallons < MINGALLONS || gallons > MAXGALLONS || isNaN(gallons) || gallons == "") {

        $('gallonsUsedError').firstChild.nodeValue =
            "Please enter a valid number 1 - 100 for Gallons";
        errorFound = 'y';
    }

    if (pricePerGallon < MINPPG || pricePerGallon > MAXPPG || isNaN(pricePerGallon) || pricePerGallon == "") {
        $("priceGallonError").firstChild.nodeValue =
            "Please enter a valid number 1 - 5 for Price per Gallon";
        errorFound = "y";
    }

    if (errorFound == "y") {
        $('mpg').firstChild.nodeValue = "Please fix the above errors and re-calculate"
    } else {
        $('mpg').value = "Your average MPG is " + mpg;
        $('cost').value = "Your trip cost you $" + costOfTrip;
        $('perMile').value = "That is $" + perMile + " per mile";
    }
};

var clearForm = function () {
    $('milesDriven').value = "";
    $('gallonsUsed').value = "";
    $('priceGallon').value = "";

    if ($('milesDrivenError').value !== '') {
        $('milesDrivenError').firstChild.nodeValue = '';
    }
    if ($('gallonsUsedError').value !== '') {
        $('gallonsUsedError').firstChild.nodeValue = '';
    }
    if ($('priceGallonError').value !== '') {
        $('priceGallonError').firstChild.nodeValue = '';
    }

    if ($('mpg').value !== "") {
        $('mpg').value = ""
    }
    if ($('cost').value !== "") {
        $('cost').value = ""
    }

    if ($('perMile').value !== "") {
        $('perMile').value = ""
    }

};

window.onload = function () {
    $('btnCalc').onclick = processEntries;
    $('btnClear').onclick = clearForm;
};