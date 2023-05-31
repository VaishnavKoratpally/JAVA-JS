const profile={
    firstName:"Vaishnav",
    lastName:"Koratpally",
    DOB:"17-09-1990",
    gender:"Male",
    university:"UTA",
    currentLocation:"Austin",
    bachelors:"JNTU hyderabad",
    hobbies:{
        tvSeries:["HIMYM", "B99"],
        sports:["Cricket, Badminton, Table Tennis"],
        videogames:["God of War, WWE"],

    }
}
logHobby();
function logHobby(){
    console.log(profile.hobbies.videogames[0]);
    console.log(profile.hobbies.videogames[1]);
}