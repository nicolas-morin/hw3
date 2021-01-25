function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride);

  numberOfPassengers = rideData.length;

  if (ride.length > 1 || ride[0].numberOfPassengers == 1) {
    levelOfService = "Noober Pool";
  } else if ((ride.purplerequested = true)) {
    levelOfService = "Noober Purple";
  } else if (ride.numberOfPassenger > 3) {
    levelOfService = "Noober XL";
  } else {
    levelOfService = "Noober X";
  }

  console.log(levelOfService);

  passenger1Name =
    ride[0].passengerDetails.first + " " + ride[0].passengerDetails.last;
  passenger1Phone = ride[0].passengerDetails.phone;
  passenger1NumberOfPassengers = ride[0].passengerDetails.numberOfPassenger;
  passenger1PickupAddressLine1 =
    ride[0].passengerDetails.pickupLocation.address;
  passenger1PickupAddressLine2 =
    ride[0].passengerDetails.pickupLocation.city +
    ", " +
    ride[0].passengerDetails.pickupLocation.state +
    ride[0].passengerDetails.pickupLocation.zip;
  passenger1DropoffAddressLine1 =
    ride[0].passengersDetails.dropoffLocation.address;
  passenger1DropoffAddressLine2 =
    ride[0].passengersDetails.dropoffLocation.city + ", " ride[0].passengerDetails.dropoffLocation.state + " ," ride[0].passengerDetails.dropoffLocation.zip;

  console.log(passenger1Name);
  console.log(passenger1Phone);
  console.log(passenger1NumberOfPassengers);
  console.log(passenger1PickupAddressLine1);
  console.log(passenger1PickupAddressLine2);
  console.log(passenger1DropoffAddressLine1);
  console.log(passenger1DropoffAddressLine2);

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
