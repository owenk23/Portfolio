function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
function goToSummary() {
    console.log("summary")
    element = document.getElementById("summary").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function goToSkills() {
    console.log("skills!")
    element = document.getElementById("skillsSection").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function goToEmployment() {
    console.log("employment")
    document.getElementById("employmentHistorySection").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function goToEducation() {
    console.log("education")
    element = document.getElementById("educationHistory").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
window.onhashchange = function () {
        getHashAndProceed();
}

function getHashAndProceed() {
    if(window.location.hash) {
        let hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        // Hash grabbed from url in to Hash variable
        moveToSection(hash)
    }
}

function moveToSection(hash) {
    switch (hash){
        case "summary" :
            goToSummary();
            break;
        case "skills" :
            goToSkills();
            break;
        case "employment" :
            goToEmployment();
            break;
        case "education":
            goToEducation();
    }
}


