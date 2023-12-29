// Display an alert when the page is loaded
// window.onload = function () {
//     alert("Welcome to my portfolio!");
// };

// Example: Toggle project details visibility
function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    projectDetails.style.display = projectDetails.style.display === 'none' ? 'block' : 'none';
}

// Example: Submit form and display a thank you message
function submitForm() {
    alert("Thank you for your message!");
    // You can add form submission logic here
}


const menuBar=document.querySelector(".remove")
const navIcons=document.querySelector(".flat")
menuBar.addEventListener("click",()=>{
    console.log("clicked")
    console.log(navIcons)
    navIcons.classList.toggle("show")
    
})
