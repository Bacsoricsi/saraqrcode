// Counter initialization and storage
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

// Function to update counter display
function updateCounter() {
  document.getElementById('clickCounter').textContent = clickCount;
}

// Function to handle Instagram button click
document.getElementById('instagramButton').addEventListener('click', function() {
  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  updateCounter();
});

// Function to check and handle code submission
function checkCode() {
  let userInput = document.getElementById('codeInput').value.trim();
  if (userInput === "0112") {
    // Code is correct
    document.getElementById('codeInput').style.display = 'none';
    document.getElementById('clickCounter').style.display = 'block';
    updateCounter();
  } else {
    // Incorrect code
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('errorMessage').textContent = 'Incorrect Code!';
    setTimeout(function() {
      document.getElementById('errorMessage').style.display = 'none';
    }, 2000); // Hide error message after 2 seconds
  }
  return false; // Prevent form submission
}
