let hobbies=[
    "tvSeries","sports","videogames"
] 
       
hobbiesList=logHobby();
console.log("initial list of hobbies is : " + hobbiesList);
addHobby("Fishing");
deleteHobby("sports");

function logHobby(){ // logs the array to the console
    return hobbies;
}

function addHobby(hobby){
    hobbies.push(hobby);
    console.log(`hobby added. New list of hobbies is:" ${hobbies}`);

}
function deleteHobby(hobby){
    if(hobbies.includes(hobby)){
        var index=hobbies.indexOf(hobby)
        hobbies.splice(index,1)
        console.log("Successfully deleted. Updated list is "+hobbies);

    }
}
