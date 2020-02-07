//Calculate Tip
function calculateTip() {
  var bill = document.getElementById("bill").value;
  var amountofsrv = document.getElementById("amountofsrv").value;
  var ppls = document.getElementById("ppls").value;

  //validate input
  if (bill === "" || amountofsrv == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (ppls === "" || ppls <= 1) {
    ppls = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate service
  var total = (bill * amountofsrv) / ppls;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the service
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("amountofsrv").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculator").onclick = function() {
  calculateTip();

};