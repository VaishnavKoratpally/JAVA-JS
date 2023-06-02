let hobbies=[]
       
hobbiesList=logHobby();
console.log("initial list of hobbies is : " + hobbiesList);

function logHobby(){ 
    return hobbies;
}

function addHobby(){
    var hobby = document.getElementById("addHobby");
    hobbies.push(hobby.value);
    console.log(`hobby added. New list of hobbies is:" ${hobbies}`);
    alert("added");
    hobby.value=""

}
function deleteHobby(){
    var toDelete = document.getElementById("deleteHobby");
    if(hobbies.includes(toDelete.value)){
        var index=hobbies.indexOf(toDelete)
        hobbies.splice(index,1)
        alert("Deleted successfully")
        console.log("Successfully deleted. Updated list is "+hobbies);
        toDelete.value="";
    }
    else{
        alert("This hobby does not exist");
    }
}
