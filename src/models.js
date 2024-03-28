// model
const model = document.querySelector(".skmodal");
const btnModal = document.getElementById("btnModal");
const modalContent = document.querySelector(".skmodal-content");
const modalClose = document.querySelector(".modal-close");

const openModal = () => {
  modalContent.style.animation = "fadein .3s ease-out";
  model.style.display = "flex";
};

const closeModal = () => {
  modalContent.style.animation = "fadeout .3s ease-out";
  setTimeout(() => {
    model.style.display = "none";
  }, 150);
};

btnModal.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === model) {
    closeModal();
  }
});

//-----------------------
const studentForm = document.getElementById("create-student-form");
const allFildRequired = document.getElementById("allFildRequired");

studentForm.onsubmit = (e) => {
  e.preventDefault();
  //get data
  const formData = new FormData(e.target);
  const { name, email, phone, location, photo } = Object.fromEntries(formData);

  if (!name || !email || !phone || !location || !photo) {
    allFildRequired.innerHTML = alert("All fild are requard");
  } else if (!isEmail(email)) {
    allFildRequired.innerHTML = alert("Invalid Email Address", "warning");
  } else if (!isMobile(phone)) {
    allFildRequired.innerHTML = alert("Invalid Mobile Number", "warning");
  } else {
    sendDataLS("studentData", {
      id: generateUniqueNumber(),
      name,
      email,
      phone,
      location,
      photo,
    });

    allFildRequired.innerHTML = alert(
      "Student data create successfully!",
      "info"
    );
    modalContent.style.animation = "fadeout .3s ease-out";
    setTimeout(() => {
      model.style.display = "none";
    }, 150);
  }

  allStudents();
};
