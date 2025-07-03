const nameInput = document.getElementById("nameInput");
const gradeInput = document.getElementById("gradeInput");
const schoolInput = document.getElementById("schoolInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("#studentTable tbody");

let students = [];

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
  const name = nameInput.value.trim();
  const grade = gradeInput.value.trim();
  const school = schoolInput.value.trim();

  if (!name || !grade || !school) {
    alert("لطفاً تمام فیلدها را پر کنید");
    return;
  }

  const student = {
    id: generateUniqueId(),
    name,
    grade,
    school,
  };

  students.push(student);
  clearInputs();
  renderTable();
}

function clearInputs() {
  nameInput.value = "";
  gradeInput.value = "";
  schoolInput.value = "";
}

function generateUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function renderTable() {
  tableBody.innerHTML = "";

  if (students.length === 0) {
    tableBody.innerHTML = `
      <tr class="empty-row">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    `;
    return;
  }

  students.forEach(function(student) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.grade}</td>
      <td>${student.school}</td>
      <td>
        <i class="fas fa-trash delete-icon" data-id="${student.id}" style="color:red; cursor:pointer;"></i>
      </td>
    `;

    tableBody.appendChild(row);
  });

  setDeleteEvents();
}

function setDeleteEvents() {
  const deleteIcons = document.querySelectorAll(".delete-icon");

  deleteIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      const id = this.getAttribute("data-id");
      deleteStudentById(id);
    });
  });
}

function deleteStudentById(id) {
  students = students.filter(function(student) {
    return student.id !== id;
  });

  renderTable();
}