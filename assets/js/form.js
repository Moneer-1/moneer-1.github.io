document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Create a FormData object from the form
      var formData = new FormData(this);

      // Send the form data using Fetch API
      fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScLxVOdGYwBY8JT0EuUyS7DTXXoi_sN0g0Da42lqtT1h54KTw/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }).then(function() {
        // Show a custom message or do something else on successful submission
        document.getElementById('myForm').style.display = 'none';
        document.getElementById('responseMessage').style.display = 'block';
      }).catch(function(error) {
        console.error('Error!', error.message);
      });
    });