function getFormvalue() {
    //Write your code here
	  let firstName = document.getElementById("fname").value.trim();
      let lastName = document.getElementById("lname").value.trim();

      // Handle empty fields
      if (!firstName && !lastName) {
        alert("Please enter both first and last name.");
        return false;
      } else if (!firstName) {
        alert("Please enter your first name.");
        return false;
      } else if (!lastName) {
        alert("Please enter your last name.");
        return false;
      }

      // Combine names and display
      let fullName = `${firstName} ${lastName}`;
      alert(fullName);

      // Prevent form from reloading the page
      return false;

}
