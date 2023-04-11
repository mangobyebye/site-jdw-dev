document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      submitForm();
  });

  function submitForm() {
      // Implement form submission logic here, such as sending an email or storing the data.
      // For instance, you can use a service like EmailJS, a Netlify form, or your custom back-end solution.
      alert("Form submitted! (Replace this with your desired form submission logic)");
  }
});
