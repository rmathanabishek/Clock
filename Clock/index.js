function displayTime() {
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let t = new Date();
    let ap = document.getElementById("ampm");
    let hr = document.getElementById("hours");
    let mn = document.getElementById("mins");
    let sc = document.getElementById("secs");
    let dt = document.getElementById("date");
    let mnt = document.getElementById("month");
    let yr = document.getElementById("year");
    let d = document.getElementById("day");

    hr.innerHTML = zero(t.getHours());
    if(hr==0){
        hr = 12;
    }
    else if(hr>12){
        hr -= 12;
        ap.innerHTML = 'PM';
    }
    mn.innerHTML = zero(t.getMinutes());
    sc.innerHTML = zero(t.getSeconds());
    dt.innerHTML = zero(t.getDate());
    mnt.innerHTML = monthNames[t.getMonth()];
    yr.innerHTML = zero(t.getFullYear());
    d.innerHTML = t.toLocaleString('en-us', {  weekday: 'long' });
}
function zero(num) {
    return num<10 ? '0'+num : num;
}

setInterval(displayTime,500)