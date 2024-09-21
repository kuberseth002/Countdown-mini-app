const endDate = new Date("21 September, 2024 15:07:00").getTime();
const startDate= new Date().getTime();

let x = setInterval(function updateTimer(){

  //calculate distance
  const now = new Date().getTime();

  const distanceCovered = now-startDate;
  const distancePending = endDate - now;


  //calculate days, min, hrs, secs
  // 1day=24*60*60*1000 secs

  const oneDayInMills = (24 * 60 * 60 * 1000);
  const oneHourInMills = (60 * 60 * 1000)
  const oneMinInMills = (60*1000);
  const oneSecondMills=(1000);

  
  const days =  Math.floor(distancePending / (oneDayInMills));

  const hrs = Math.floor((distancePending%(24 * 60 * 60 * 1000)/(oneHourInMills)));

  const mins = Math.floor((distancePending%(60*60*1000))/(oneMinInMills));
  
  const secs = Math.floor((distancePending%(60 * 1000))/(oneSecondMills));

  //populate in ui

  document .getElementById("days").innerHTML=days
  document .getElementById("hours").innerHTML=hrs
  document .getElementById("minutes").innerHTML=mins
  document .getElementById("seconds").innerHTML=secs


  //percentage
  const totalDistance = endDate - startDate;

  const percentageDistance = (distanceCovered/totalDistance)*100;

  //set width for progress bar

  document.getElementById("progress-bar").style.width = percentageDistance + "%";

  if(distancePending < 0){
    clearInterval(x);
    document.getElementsById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width= "100%";
  }
},
1000);