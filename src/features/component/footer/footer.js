function footer(){

    initTimeZone();

    // Footer time zone
    function initTimeZone() {
        
        // Time zone
        // https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791
        // https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
        // https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date
    
        const timeSpan = document.querySelector("#time");
    
        const optionsTime = {
        timeZone: 'Europe/Moscow',
        timeZoneName: 'short',
        hour: '2-digit',
        hour12: 'true',
        minute: 'numeric',
        };
    
        const formatter = new Intl.DateTimeFormat([], optionsTime);
        updateTime();
        setInterval(updateTime, 1000);
    
        function updateTime() {
            const dateTime = new Date();
            const formattedDateTime = formatter.format(dateTime);
            timeSpan.textContent = formattedDateTime;
        }
    
    }
}

export default footer