function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride);

  var i = 0;
  var j = 1;
  var k = 2;

  if (ride[i].numberOfPassengers > 3) {
    levelOfService = "Noober XL";
    j = "";
    k = "";
  } else if (ride[i].purpleRequested == true) {
    levelOfService = "Noober Purple";
    j = "";
    k = "";
  } else if (ride.length > 1 && ride[i].numberOfPassengers == 1) {
    levelOfService = "Noober Pool";
  } else {
    levelOfService = "Noober X";
  }

  console.log(levelOfService);

  passenger1Name =
    ride[i].passengerDetails.first + " " + ride[i].passengerDetails.last;
  passenger1Phone = ride[i].passengerDetails.phoneNumber;
  passenger1NumberOfPassengers = ride[i].numberOfPassengers;
  passenger1PickupAddressLine1 = ride[i].pickupLocation.address;
  passenger1PickupAddressLine2 =
    ride[i].pickupLocation.city +
    ", " +
    ride[i].pickupLocation.state +
    ", " +
    ride[i].pickupLocation.zip;
  passenger1DropoffAddressLine1 = ride[i].dropoffLocation.address;
  passenger1DropoffAddressLine2 =
    ride[i].dropoffLocation.city +
    ", " +
    ride[i].dropoffLocation.state +
    ", " +
    ride[i].dropoffLocation.zip;

  console.log(passenger1Name);
  console.log(passenger1Phone);
  console.log(passenger1NumberOfPassengers);
  console.log(passenger1PickupAddressLine1);
  console.log(passenger1PickupAddressLine2);
  console.log(passenger1DropoffAddressLine1);
  console.log(passenger1DropoffAddressLine2);

  passenger2Name =
    ride[j].passengerDetails.first + " " + ride[j].passengerDetails.last;
  passenger2Phone = ride[j].passengerDetails.phoneNumber;
  passenger2NumberOfPassengers = ride[j].numberOfPassengers;
  passenger2PickupAddressLine1 = ride[j].pickupLocation.address;
  passenger2PickupAddressLine2 =
    ride[j].pickupLocation.city +
    ", " +
    ride[j].pickupLocation.state +
    ", " +
    ride[j].pickupLocation.zip;
  passenger2DropoffAddressLine1 = ride[j].dropoffLocation.address;
  passenger2DropoffAddressLine2 =
    ride[j].dropoffLocation.city +
    ", " +
    ride[j].dropoffLocation.state +
    ", " +
    ride[j].dropoffLocation.zip;

  console.log(passenger2Name);
  console.log(passenger2Phone);
  console.log(passenger2NumberOfPassengers);
  console.log(passenger2PickupAddressLine1);
  console.log(passenger2PickupAddressLine2);
  console.log(passenger2DropoffAddressLine1);
  console.log(passenger2DropoffAddressLine2);

  passenger3Name =
    ride[k].passengerDetails.first + " " + ride[k].passengerDetails.last;
  passenger3Phone = ride[k].passengerDetails.phoneNumber;
  passenger3NumberOfPassengers = ride[k].numberOfPassengers;
  passenger3PickupAddressLine1 = ride[k].pickupLocation.address;
  passenger3PickupAddressLine2 =
    ride[k].pickupLocation.city +
    ", " +
    ride[k].pickupLocation.state +
    ", " +
    ride[k].pickupLocation.zip;
  passenger3DropoffAddressLine1 = ride[k].dropoffLocation.address;
  passenger3DropoffAddressLine2 =
    ride[k].dropoffLocation.city +
    ", " +
    ride[k].dropoffLocation.state +
    ", " +
    ride[k].dropoffLocation.zip;

  console.log(passenger3Name);
  console.log(passenger3Phone);
  console.log(passenger3NumberOfPassengers);
  console.log(passenger3PickupAddressLine1);
  console.log(passenger3PickupAddressLine2);
  console.log(passenger3DropoffAddressLine1);
  console.log(passenger3DropoffAddressLine2);

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}
