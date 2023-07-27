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
    let element = document.getElementById("summary");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function goToSkills() {
    console.log("skills!")
    let element = document.getElementById("skillsSection");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function goToEmployment() {
    console.log("employment")
    let element = document.getElementById("employmentHistorySection");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function goToEducation() {
    console.log("education")
    let element = document.getElementById("educationHistory");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}
window.onhashchange = function () {
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
        case "skills" :
            goToSkills();
        case "employment" :
            goToEmployment();
        case "education":
            goToEducation();
    }
}