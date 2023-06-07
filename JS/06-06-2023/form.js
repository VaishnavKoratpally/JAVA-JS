function displayDetails(){
    let fname= document.getElementById('fname').value
    let lname= document.getElementById('lname').value
    let email= document.getElementById('email').value
    let dob= document.getElementById('dob').value
    let phone= document.getElementById('phone').value
    let selectedGender = document.querySelector('input[name="gender"]:checked').value;   
    let checkboxes = document.getElementsByName("hobbies");
    let selectedHobbiesValues = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedHobbiesValues.push(checkboxes[i].value);
    }
  }
  let toDisplay=document.getElementById('text')
    toDisplay.innerHTML=`The info provided is <br> Fname : ${fname} <br> Lname: ${lname}
                            <br> email : ${email} <br> DOB: ${dob} <br> Phone : ${phone} 
                            <br> Gender : ${selectedGender}<br>
                            Hobbies: ${selectedHobbiesValues}` ;
}
      
    