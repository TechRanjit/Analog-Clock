
// var firstName=prompt("Enter your Name:");
// var secondName=prompt("Enter your gf name:");
// alert(firstName+" ❤️ "+secondName+" "+number+" Of Love Calculator ");
// var number=Math.random();
// number=number*100;
// number=Math.floor(number)+"%";
// alert("Are you Sure Watch the Time Right Now");

setInterval(() => {
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
hrotation=30*htime+mtime/2;
mrotation=6*mtime;
srotation=6*stime;

hour.style.transform=`rotate(${hrotation}deg)`;
minute.style.transform=`rotate(${mrotation}deg)`;
second.style.transform=`rotate(${srotation}deg)`;

}, 1000);
