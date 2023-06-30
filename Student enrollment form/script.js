function addStudent() {
    var name = document.getElementById("name").value;
    var rollno = document.getAnimations("rollno").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    var gender = document.getElementsByName("gender");
    var selectedGender = "";
    for (var i = 0; i < gender.length; i++){
        if (gender[i].checked) {
            selectedGender = gender[i].value;
        }
    }

    var skills = document.getElementsByName("skills")
    var selectedSkills = [];
    for (var i = 0;i< skills.length; i++){
        if (skills[i].checked) {
            selectedSkills.push(skills[i].value);
        }
    }

    var table = document.getElementById("student-table-body");
    var newRow = table.insertRow();
    
    var nameCell = newRow.insertCell();
    var rollnoCell = newRow.insertCell();
    var emailCell = newRow.insertCell();
    var phoneCell = newRow.insertCell();
    var genderCell = newRow.insertCell();
    var skillsCell = newRow.insertCell();

    nameCell.innerHTML = name;
    rollnoCell.innerHTML = rollno;
    emailCell.innerHTML = email;
    phoneCell.innerHTML = phone;
    genderCell.innerHTML = selectedGender;
    skillsCell.innerHTML = selectedSkills.join(", ");
}