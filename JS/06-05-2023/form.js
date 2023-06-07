function displayDetails(){
    var fname= document.getElementById('fname').value
    var lname= document.getElementById('lname').value
    var email= document.getElementById('email').value
    var dob= document.getElementById('dob').value
    var phone= document.getElementById('phone').value
    var toDisplay=document.getElementById('text')
    toDisplay.innerHTML=`The info provided is <br> Fname : ${fname} <br> Lname: ${lname}
                            <br> email : ${email} <br> DOB: ${dob} <br> Phone : ${phone}` ;
   

}