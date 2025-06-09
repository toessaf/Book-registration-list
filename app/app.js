const nameInput = document.getElementById("nameInput");
const gradeInput = document.getElementById("gradeInput");
const schoolInput = document.getElementById("schoolInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("#studentTable tbody");

let students = [];

submitBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const grade = gradeInput.value;
  const school = schoolInput.value;

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
      </tr>
    `;
  } else {
    tableBody.innerHTML = "";
    students.forEach(function (value, index) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.grade}</td>
        <td>${student.school}</td>
      `;

      tableBody.appendChild(row);
    });
  }
}