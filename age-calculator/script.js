const months = [31,28,31,30,31,30,31,31,30,31,30,31]

function ageCalculate(){
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  let birthDate, birthMonth, birthYear;
  
  let birthDetails = {
    date:inputDate.getDate(),
    month:inputDate.getMonth() + 1,
    year:inputDate.getFullYear(),
  }
  
  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();
  
  
  leapChecker(currentYear);
  
  if (birthDetails.year > currentYear || ( birthDetails.month > currentMonth && birthDetails.year == currentYear ) || ( birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear )) 
  {
   alert("Not Born Yet")
   displayResult("-", "-", "-")
   return;
  }
  
  birthYear = currentYear - birthDetails.year;
  
  if ( currentMonth >= birthDetails.month)
  {
    birthMonth = currentMonth - birthDetails.month;
  }
  else{
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }
  
  if( currentDate >= birthDetails.date)
  {
    birthDate = currentDate - birthDetails.date;
  }
  else{
    birthMonth--;
    let days = months[ currentMonth - 2 ];
    birthDate = days + currentDate - birthDetails.date;
    if(birthMonth < 0)
    {
      birthMonth = 11;
      birthYear--;
    }
  }
  
  displayResult(birthYear, birthMonth, birthDate);
}

function displayResult(year, month, date){
  
  document.getElementById("year").innerText = `${year}`
  document.getElementById("month").innerText = `${month}`
  document.getElementById("day").innerText = `${date}`
}


function leapChecker(year){
  if ( year % 4 == 0 || year % 100 == 0 && year % 400 == 0 ) 
  {
    months[1] = 29;
  }
  else{
    months[1] = 28;
  }
}