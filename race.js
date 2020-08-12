let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
//var that indicates if a runner registered early or late.

let runnerAge = 19;

if (runnerAge > 18 && earlyRegister) {
  raceNumber += 1000;
};
if (runnerAge > 18 && earlyRegister) {
  document.getElementById('demo').innerHTML =`Runner number ${raceNumber} you will start at 9:30`;
} else if (runnerAge > 18 && !earlyRegister) {
    document.getElementById('demo').innerHTML =`Runner number ${raceNumber} you will race at 11:00`;
} else if (runnerAge < 18) {
    document.getElementById('demo').innerHTML =`Runner number ${raceNumber} you will race at 12:30`;
} else {
    document.getElementById('demo').innerHTML ='Please see the registration desk.';
}