function digitalTime(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    let dayNumber = currentTime.getDay();
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let timeFormat = 'AM'

    if(hour === 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
    }

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    let time = `${hour} : ${minute} : ${second}`;

    // Day
    const dayArray = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday', 'Saturday' ]

    // Month
    const monthArray = [ ' ', 'January', 'February', 'March', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let monthName = monthArray[month];


    let day = dayArray[dayNumber];
    
    let dateHolder = `${date} ${monthName}`;

    document.getElementById('time').innerText = time;
    document.querySelector('small').innerText = timeFormat;
    document.getElementById('day').innerText = day;
    document.getElementById('date').innerText = dateHolder;
    
    setInterval(digitalTime, 1000);
}
digitalTime();
