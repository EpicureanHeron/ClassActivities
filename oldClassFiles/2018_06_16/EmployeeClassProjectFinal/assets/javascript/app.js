 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyA95kDuFcqGTHd8oPVtiSsNkc72ohJWysM",
    authDomain: "employeedatabase-8714f.firebaseapp.com",
    databaseURL: "https://employeedatabase-8714f.firebaseio.com",
    projectId: "employeedatabase-8714f",
    storageBucket: "",
    messagingSenderId: "869243386085"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var employeeName, employeeRole, employeeDate, employeeRate, employeeMonths

//
$("#submit").on("click", function() {
  event.preventDefault();

  console.log("Submit is clicked.")
    //this employee name
    employeeName = $("#nameSubmit").val().trim()
    console.log(employeeName)
    employeeRole = $("#roleSubmit").val().trim()
    employeeDate = $("#dateSubmit").val().trim()
    // employeeMonths = $("#monthsSubmit").val().trim
    employeeRate = $("#rateSubmit").val().trim()
    //employeeEarning = employeeRate * employeeMonths

    $("#nameSubmit").empty()
    $("#roleSubmit").empty()
    $("#dateSubmit").empty()
    $("#rateSubmit").empty()

    database.ref().push({
        employeeName: employeeName,
        employeeRole: employeeRole,
        employeeDate: employeeDate,
        //employeeMonths: employeeMonths
        employeeRate: employeeRate,
        dataAdded: firebase.database.ServerValue.TIMESTAMP,
      })
      // console.log(employeeName)
      // $("#eName").html(employeeName)
      // $("#eRole").html(employeeRole)
      // $("#eDate").html(employeeDate)
      // $("#eMonths").html(employeeMonths)
      // $("#eRate").html(employeeRate)

      //Function that performs the logic for total months in company
      //Return value into employeeMonth

      //Function that performs the logic for total earnings by multiplying months x earnigs
      //Return value into employeeEarnings

})

database.ref().on("child_added",function(childSnapshot) {
  employeeNameDisplay = childSnapshot.val().employeeName
  employeeRoleDisplay = childSnapshot.val().employeeRole
  employeeDateDisplay = childSnapshot.val().employeeDate
  employeeRateDisplay = childSnapshot.val().employeeRate
  var formattedDate = moment(employeeDateDisplay).format(employeeDateDisplay, "MM/DD/YYYY")
  var now = moment()
 var  monthsPast = moment(now).diff(formattedDate, "months"); 
 var moneyMade = monthsPast * employeeRateDisplay
    $("#eName").append("<div>" + employeeNameDisplay + "</div>")
    $("#eMonths").append("<div>" + monthsPast + "</div>" )
    $("#eEarning").append("<div>" + moneyMade + "</div>" )
    $("#eRole").append("<div>" + employeeRoleDisplay + "</div>")
    $("#eDate").append("<div>" + employeeDateDisplay + "</div>")
    $("#eRate").append("<div>" + employeeRateDisplay + "</div>")
})




// $("#submit").on("click", function() {
//     employeeRole = $("#nameSubmit").val().trim
//     database.ref().push({
//         employeeRole: employeeRole
//       })
//       console.log(employeeRole)
//       $("#eRole").html(employeeRole)
// })

// $("#submit").on("click", function() {
//     employeeDate = $("#dateSubmit").val().trim
//     database.ref().push({
//         employeeDate: employeeDate
//       })
//       console.log(employeeDate)
//       $("#eDate").html(employeeDate)
// })

// $("#submit").on("click", function() {
//     employeeMonths = $("#monthsSubmit").val().trim
//     database.ref().push({
//         employeeMonths: employeeMonths
//       })
//       console.log(employeeMonths)
//       $("#eMonths").html(employeeMonths)
// })

// $("#submit").on("click", function() {
//     employeeRate = $("#rateSubmit").val().trim
//     database.ref().push({
//         employeeRate: employeeRate
//       })
//       console.log(employeeRate)
//       $("#eRate").html(employeeRate)
// })

// $("#submit").on("click", function() {
//     employeeEarning = employeeRate * employeeMonths
//       console.log(employeeEarning)
//       $("#eEarning").html(employeeEarning)
// })

// //JAVASCRIPT IN//
