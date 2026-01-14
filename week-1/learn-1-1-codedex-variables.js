console.log("============================================");
console.log("Date: 1/14/2026");
console.log("TUTORIAL 1-0: CODEDEX VARIABLES");
console.log("Student: Gavin Figueroa");
console.log("============================================");
console.log("--------------------------------------------");
console.log("EXERCISE 6: LET & CONST");
console.log("Create 4 variables for a user profile:");
console.log("- Two const variables");
console.log("- Two let variables");
console.log("Print them all, then reassign one let variable");
console.log("--------------------------------------------");
const firstName = "Gavin";
const favoriteColor = "Green";
let currentLocation = "School";
let mood = "Tired";
console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(mood);
mood = "Happy";
console.log(mood);
console.log("--------------------------------------------");
console.log("EXERCISE 7: DATA TYPES");
console.log("Create different variables for your favorite company:");
console.log("Print them all");
console.log("--------------------------------------------");
let companyName = "Google";
let foundingYear = 1998;
let isActive = true;
let fundingAmount;
console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);
console.log("--------------------------------------------");
console.log("EXERCISE 8: TEMPERATURE");
console.log("Convert Spokane's temperature from °F to °C");
console.log("Formula: (fahrenheit - 32) / 1.8");
console.log("--------------------------------------------");
let fahrenheitTemp= 48;
let celsiusTemp= (fahrenheitTemp - 32) / 1.8;
console.log(celsiusTemp);
console.log("--------------------------------------------");
console.log("EXERCISE 9: TIP CALCULATOR");
console.log("Calculate tip and total from a bill");
console.log("- billAmount, tipPercent");
console.log("- tipAmount = billAmount * (tipPercent / 100)");
console.log("- total = billAmount + tipAmount");
console.log("--------------------------------------------");
let billAmount = 85.94;
let tipPercent = 20;
let tipAmount = billAmount * (tipPercent / 100);
let total = billAmount + tipAmount;
let roundedTotal = Math.round(total * 100) * 0.01;
let roundedtipAmount = Math.round(tipAmount * 100) * 0.01;
let roundedbillAmount= Math.round(billAmount * 100) * 0.01;
console.log("=================================")
console.log("       Green Diner RECEIPT       ")
console.log("---------------------------------")
console.log("         Order Details        ")
console.log("---------------------------------")
console.log("Item                      Price")
console.log("---------------------------------")
console.log("Lobster                  $42.99")
console.log("Shrimp                   $42.99")
console.log("         ")
console.log("=================================")
console.log("Item Subtotal:" + "$" + roundedbillAmount)
console.log("Tip Percent:" + tipPercent + "%")
console.log("Tip Amount:" + "$" + roundedtipAmount)
console.log("---------------------------------")
console.log("Total:" + "$" + roundedTotal)
console.log("=================================")
console.log("--------------------------------------------");
console.log("EXERCISE 10: PLAYLIST DURATION");
console.log("Calculate total playlist length");
console.log("- numberOfSongs, avgSongLength (in minutes)");
console.log("- totalMinutes, hours, remainingMinutes");
console.log("Format the output nicely");
let songCount = 64;
let avgLength = (2.08 + 4.24) / 2;
let minDuration = songCount * avgLength;
let hrDuration = minDuration / 60;
let roundedhrDuration = Math.round(hrDuration);
let roundedminDuration = Math.round(minDuration-(roundedhrDuration * 60));
let playlistName= "  Gav's Playlist";
console.log(playlistName + ":");
console.log("-------------------");
console.log("  " + songCount + " Songs");
console.log("  " + roundedhrDuration + " Hrs " + roundedminDuration + " Mins");
console.log("-------------------");
console.log("--------------------------------------------");
