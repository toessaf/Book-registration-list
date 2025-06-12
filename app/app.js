const nameInput = document.getElementById("nameInput");
const gradeInput = document.getElementById("gradeInput");
const schoolInput = document.getElementById("schoolInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("#studentTable tbody");

let students = [];

submitBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const grade = gradeInput.value.trim();
  const school = schoolInput.value.trim();

  if (name === "" || grade === "" || school === "") {
    alert("لطفاً فرم را کامل پر کنید");
    return;
  }

  students.push({ name, grade, school });
  renderTable();

  nameInput.value = "";
  gradeInput.value = "";
  schoolInput.value = "";
});

function renderTable() {
  if (students.length === 0) {
    tableBody.innerHTML = `
      <tr class="empty-row">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    `;
  } else {
    tableBody.innerHTML = "";

    students.forEach(function (student, index) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.grade}</td>
        <td>${student.school}</td>
        <td>
          <i class="fas fa-trash delete-icon" data-index="${index}" style="color: red; cursor: pointer;"></i>
        </td>
      `;

      tableBody.appendChild(row);
    });

    const deleteIcons = document.querySelectorAll(".delete-icon");
    deleteIcons.forEach(function (icon) {
      icon.addEventListener("click", function (event) {
        event.preventDefault();
        const index = this.getAttribute("data-index");
        students.splice(index, 1);
        renderTable();
      });
    });
  }
}