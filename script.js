function getFormvalue() {
    //Write your code here
      const form = document.forms[0];
      const firstName = form.elements["fname"].value.trim();
      const lastName = form.elements["lname"].value.trim();

      const fullName = `${firstName} ${lastName}`.trim();
      alert(fullName);

      return false; // Prevent reload

}
