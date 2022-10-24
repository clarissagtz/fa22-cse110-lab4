function printsec(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printsec, 1000);