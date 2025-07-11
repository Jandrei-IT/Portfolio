window.addEventListener('DOMContentLoaded', () => {
  // Animate the image
  const img = document.querySelector('.slide-in');
  if (img) {
    setTimeout(() => {
      img.classList.add('active');
    }, 200);
  }

  const headline = document.getElementById("headline");
  if (headline) {
    headline.style.color = "#7f8caa";

    headline.addEventListener("mouseover", () => {
      headline.style.color = "#ffffff";
    });

    headline.addEventListener("mouseout", () => {
      headline.style.color = "#7f8caa";
    });
  }

  // Reveal service cards using IntersectionObserver
  const serviceCards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  serviceCards.forEach(card => observer.observe(card));

  // Show the form box
  const formBox = document.querySelector('.form-box');
  if (formBox) {
    formBox.classList.add('show');
  }

  // Handle form submission
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("response");
  const scriptURL = "https://script.google.com/macros/s/AKfycbzGfo_2DBGojM6Q0eRNyV4IOxaIBYY8geep568c5AbxXH4-PMVnmwuLVFxCfAy23IyR/exec";

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      fetch(scriptURL, {
        method: "POST",
        body: formData,
      })
        .then(res => res.text())
        .then(() => {
          responseMsg.textContent = "";
          showAlert(); 
        })
        .catch(error => {
          responseMsg.textContent = "";
          console.error("Error!", error.message);
        });
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
  const reviewBtn = document.querySelector(".btn"); 

  reviewBtn?.addEventListener('click', (event) => {
    event.preventDefault();

    const requiredFields = [
      { id: 'emailinput', name: 'email' },
      { id: 'nameinput', name: 'fullname' },
      { id: 'messageinput', name: 'message' }
    ];

    for (let i = 0; i < requiredFields.length; i++) {
      const field = document.getElementById(requiredFields[i].id);
      const value = field.value.trim();

      if (!value) {
        alert(`${requiredFields[i].name} is required.`);
        field.focus();
        return;
      }

      if (requiredFields[i].id === 'emailinput' && !value.includes('@')) {
        alert("Please enter a valid email address with '@'.");
        field.focus();
        return;
      }
    }

    showAlert(event);
  });
});

function showAlert(event) {
  alert("Message is submitted successfully!");
  document.getElementById("success").style.display = "block";

  setTimeout(() => {
    const promptDiv = document.createElement("div");
    promptDiv.id = "customPrompt";
    promptDiv.style.position = "fixed";
    promptDiv.style.top = "40%";
    promptDiv.style.left = "50%";
    promptDiv.style.transform = "translate(-50%, -50%)";
    promptDiv.style.background = "#7f8caa";
    promptDiv.style.border = "1px solid #ccc";
    promptDiv.style.padding = "20px";
    promptDiv.style.zIndex = "1000";
    promptDiv.style.textAlign = "center";

    const message = document.createElement("p");
    message.textContent = "Would you like to message again?";
    promptDiv.appendChild(message);

    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes";
    yesBtn.onclick = () => {
      document.querySelector("form").reset();
      document.getElementById("success").style.display = "none";
      document.body.removeChild(promptDiv);
    };
    promptDiv.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.textContent = "No";
    noBtn.style.marginLeft = "10px";
    noBtn.onclick = () => {
      window.location.href = "index.html";
    };
    promptDiv.appendChild(noBtn);

    document.body.appendChild(promptDiv);
  }, 110);
}
});
const infoBoxes = document.querySelectorAll('.info-box');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });

    infoBoxes.forEach(box => observer.observe(box));
