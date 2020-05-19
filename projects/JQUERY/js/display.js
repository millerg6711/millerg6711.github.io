function getURLParam(key) {
    var values = [];
    var target = decodeURIComponent(location.search);

    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

    var pattern = key + '=([^&#]+)';
    var o_reg = new RegExp(pattern, 'ig');
    while (true) {
        var matches = o_reg.exec(target);
        if (matches && matches[1]) {
            values.push(matches[1]);
        } else {
            break;
        }
    }

    if (!values.length) {
        return null;
    } else {
        return values.length == 1 ? values[0] : values;
    }
}

String.prototype.capitalize = function () {
    return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
};

var ssn = getURLParam("social_security");
var fname = getURLParam("firstname").toLowerCase().capitalize();
var lname = getURLParam("lastname").toLowerCase().capitalize();
var address = getURLParam("address").replace(/\+/g, ' ').toLowerCase().capitalize();
var city = getURLParam("city").replace(/\+/g, ' ').toLowerCase().capitalize();
var state = getURLParam("state");
var zip = getURLParam("zip_code");
var cellphone = getURLParam("cell_phone");
var gender = getURLParam("gender");
var age = getURLParam("age");
var reason = getURLParam("reason[]").toString().replace(/_/g, ' ').replace(/,/g, ', ').toLowerCase().capitalize();

$("#ssn").val(ssn);
$("#fname").val(fname);
$("#lname").val(lname);
$("#address").val(address);
$("#city").val(city);
$("#state").val(state);
$("#zip").val(zip);
$("#cellphone").val(cellphone);
$("#gender").val(gender);
$("#age").val(age);
$("#reason").val(reason);