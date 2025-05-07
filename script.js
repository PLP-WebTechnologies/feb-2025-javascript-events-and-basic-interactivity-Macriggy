// Button Click
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button clicked!");
  });
  
  // Hover Effect
  let hoverDiv = document.getElementById("hoverDiv");
  
  hoverDiv.addEventListener("mouseover", function() {
    hoverDiv.style.backgroundColor = "blue";
  });
  
  hoverDiv.addEventListener("mouseout", function() {
    hoverDiv.style.backgroundColor = "red";
  });
  
  // Keypress Detection
  document.getElementById("inputField").addEventListener("keypress", function(event) {
    console.log(`You pressed: ${event.key}`);
  });
  
  // Double-Click and Long Press
  document.getElementById("doubleClickButton").addEventListener("dblclick", function() {
    alert("Double-click detected!");
  });
  
  let longPressButton = document.getElementById("longPressButton");
  let pressTimer;
  
  longPressButton.addEventListener("mousedown", function() {
    pressTimer = setTimeout(function() {
      alert("Long press detected!");
    }, 1000); // 1 second long press
  });
  
  longPressButton.addEventListener("mouseup", function() {
    clearTimeout(pressTimer);
  });
  
  // Button that Changes Text or Color
  document.getElementById("changeButton").addEventListener("click", function() {
    this.style.backgroundColor = "green";
    this.textContent = "Changed!";
  });
  
  // Image Gallery (Slideshow)
  let currentIndex = 0;
  let slides = document.querySelectorAll("#gallery .slide");
  
  document.getElementById("nextBtn").addEventListener("click", function() {
    slides[currentIndex].style.display = "none"; // Hide current slide
    currentIndex = (currentIndex + 1) % slides.length; // Loop through images
    slides[currentIndex].style.display = "block"; // Show next slide
  });
  
  // Tabs
  function showTab(index) {
    let contents = document.querySelectorAll(".content");
    contents.forEach((content, i) => {
      content.style.display = (i === index) ? "block" : "none";
    });
  }
  
  // Form Validation
  document.getElementById("myForm").addEventListener("submit", function(event) {
    let username = document.getElementById("username").value.trim();
    if (username === "") {
      alert("Username is required!");
      event.preventDefault(); // Prevent form submission
    }
  });
  
  document.getElementById("email").addEventListener("input", function() {
    let email = this.value;
    if (!email.includes("@") || !email.includes(".")) {
      this.setCustomValidity("Please enter a valid email address.");
    } else {
      this.setCustomValidity(""); // Clear the custom error message
    }
  });
  
  document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
    }
  });
  
  // Animation (Box)
  document.getElementById("animateBtn").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.transform = "rotate(45deg)";
    box.style.backgroundColor = "blue";
  });
  