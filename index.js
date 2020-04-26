// Timer >
const d = new Date();
const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
const day = weekday[d.getDay()];
setInterval(() => {
  const d = new Date();
  const CurrentTime = `<i class="fas fa-comments"></i>&nbsp;&nbsp;${day}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${
    d.getHours() < 10 ? "0" : ""
    }${d.getHours()}:${
    d.getMinutes() < 10 ? "0" : ""
    }${d.getMinutes()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-battery-full"></i>`;
  document.getElementById("timer").innerHTML = CurrentTime;
}, 10);

// Messages App
function messages() {
  document.getElementById("changer").textContent = "Messages";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("messApp").style.display = "inline";
}
// Email App
function email() {
  document.getElementById("changer").textContent = "Emails";
  document.getElementById("email_App").style.display = "block";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("phone").style.transform = "rotate(90deg)";
  document.getElementById("phone").style.position = "absolute";
  document.getElementById("phone").style.top = "50%";
  document.getElementById("phone").style.left = "50%";
  // document.getElementById("email").style.transform = "rotate(270deg)";
}
// Contacts App
function Contacts() {
  document.getElementById("changer").textContent = "Contacts";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("conApp").style.display = "inline";
}
// Quick Job App
function qjob() {
  document.getElementById("changer").textContent = "Start Quick Job";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("qapp").style.display = "block";
}
// Jobs App
function Jobs() {
  document.getElementById("changer").textContent = "Job List";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("jobs").style.display = "block";
}
// Settings App
function settings() {
  document.getElementById("changer").textContent = "Settings";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("setting").style.display = "block";
}
// settings > colors
function color() {
  document.getElementById("settings-color").style.display = "block";
  document.getElementById("color").style.display = "none";
  document.getElementById("ringtones").style.display = "none";
}
// Settings > Ringtone
function ringtones() {
  document.getElementById("settings-ringtones").style.display = "block";
  document.getElementById("color").style.display = "none";
  document.getElementById("ringtones").style.display = "none";
}
// Camera App
function camera() {
  document.getElementById("changer").textContent = "Camera";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("camera").style.display = "block";
  document.getElementById("grid").style.display = "block";
}
// Browser App
function webbrowser() {
  document.getElementById("changer").textContent = "Browser";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("browser").style.display = "block";
}
// Serve App
function Serve() {
  document.getElementById("changer").textContent = "SecuroServ";
  document.getElementById("line1").style.display = "none";
  document.getElementById("line2").style.display = "none";
  document.getElementById("line3").style.display = "none";
  document.getElementById("serv").style.display = "block";
}
// Go Back function
function back() {
  document.getElementById("changer").textContent = "Welcome";
  document.getElementById("line1").style.display = "block";
  document.getElementById("line2").style.display = "block";
  document.getElementById("line3").style.display = "block";
  document.getElementById("messApp").style.display = "none";
  document.getElementById("conApp").style.display = "none";
  document.getElementById("qapp").style.display = "none";
  document.getElementById("setting").style.display = "none";
  document.getElementById("jobs").style.display = "none";
  document.getElementById("settings-color").style.display = "none";
  document.getElementById("serv").style.display = "none";
  document.getElementById("settings-ringtones").style.display = "none";
  document.getElementById("color").style.display = "block";
  document.getElementById("ringtones").style.display = "block";
  document.getElementById("browser").style.display = "none";
  document.getElementById("camera").style.display = "none";
  document.getElementById("grid").style.display = "none";
}
// Home page Function
const home = () => {
  document.getElementById("changer").textContent = "Welcome";
  document.getElementById("line1").style.display = "block";
  document.getElementById("line2").style.display = "block";
  document.getElementById("line3").style.display = "block";
  document.getElementById("messApp").style.display = "none";
  document.getElementById("conApp").style.display = "none";
  document.getElementById("qapp").style.display = "none";
  document.getElementById("setting").style.display = "none";
  document.getElementById("jobs").style.display = "none";
  document.getElementById("settings-color").style.display = "none";
  document.getElementById("serv").style.display = "none";
  document.getElementById("settings-ringtones").style.display = "none";
  document.getElementById("color").style.display = "block";
  document.getElementById("ringtones").style.display = "block";
  document.getElementById("browser").style.display = "none";
  document.getElementById("camera").style.display = "none";
  document.getElementById("grid").style.display = "none";
}
// Search button
function search() {
  document.getElementById("changer").textContent = "Search";
}
// Settings > colors > background-color-red
function red() {
  document.getElementById("phone-screen").style.backgroundColor = "red";
}
// Settings > colors > background-color-blue
function blue() {
  document.getElementById("phone-screen").style.backgroundColor = "blue";
}
// Settings > colors > background-color-green
function green() {
  document.getElementById("phone-screen").style.backgroundColor = "green";
}
// Settings > ringtones > ringtone-1
function ring1() {
  const audio = new Audio("./audio/gta_5_online_cell.mp3");
  audio.play();
}
// Settings > ringtones > ringtone-2
function ring2() {
  const audio = new Audio("./audio/gta_v_franklin.mp3");
  audio.play();
}
// Settings > ringtones > ringtone-3
function ring3() {
  const audio = new Audio("./audio/gta_v_trevor_ring_3.mp3");
  audio.play();
}
