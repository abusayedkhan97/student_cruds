const getAllStudendData = document.getElementById("getAllStudendData");

const allStudents = () => {
  const getStudents = getDataLS("studentData");
  let dataList = "";
  if (getStudents) {
    let x = 0;
    getStudents.forEach((item) => {
      const { name, email, phone, location, photo, id } = item;
      x++;
      dataList += `<tr>
            <td>${x < 10 ? '0' + x : '' + x}</td>
            <td><img src="${photo}" alt="" /></td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${location}</td>
            <td>
            <button class="bg-info" data-bs-toggle="modal" data-bs-target="#seeStudent" onclick="seeStudent(${id})">
            <i class="fa-solid fa-eye"></i>
            </button>
            <button class="bg-warning">
            <i class="fa-solid fa-edit"></i>
            </button>
            <button class="bg-danger" onclick="deleteStudent(${id})">
            <i class="fa-solid fa-trash"></i>
            </button>
            </td>
            </tr>
            
          `;
    });
  }

  getAllStudendData.innerHTML = dataList;
};

allStudents();

// Data delete LocalStorage

const deleteStudent = (id) => {
  const data = JSON.parse(localStorage.getItem("studentData"));

  const deleteData = data.filter((item) => item.id != id);
  localStorage.setItem("studentData", JSON.stringify(deleteData));
  allStudents();
};

const student = document.querySelector(".seeStudent");

const seeStudent = (id) => {
  const data = JSON.parse(localStorage.getItem("studentData"));

  data.forEach((item) => {
    const { name, email, phone, location, photo } = item;
    if (item.id == id) {
      student.innerHTML = `<img src="${photo}" alt="" class="mb-3"/>
      <div class="singleContent">
      <h4>Name: ${name}</h4>
      <h5>Location: ${location}</h5>
      <h5>Email: ${email}</h5>
      <h5>Phone: ${phone}</h5>
      </div>`;
    }
  });
};

function generateUniqueNumber() {
  let numbers = []; // Array to store generated numbers
  let randomNumber;

  do {
    randomNumber = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
  } while (numbers.includes(randomNumber)); // Check if the number is already generated

  numbers.push(randomNumber); // Add the number to the array

  return randomNumber;
}







