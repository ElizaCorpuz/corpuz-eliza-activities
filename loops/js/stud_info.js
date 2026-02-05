const students = [
  { name: "Ana", scores: [85,90,88], present: true },
  { name: "Ben", scores: [70,75,72], present: false },
  { name: "Cara", scores: [95,92,94], present: true },
  { name: "Daniel", scores: [60,65,70], present: true },
  { name: "Ella", scores: [88,85,90], present: true },
  { name: "Felix", scores: [78,80,82], present: false },
  { name: "Grace", scores: [92,89,94], present: true },
  { name: "Hannah", scores: [73,70,68], present: false },
  { name: "Ivan", scores: [81,84,79], present: true },
  { name: "Julia", scores: [96,98,97], present: true }
];


function calculateAvg(student) {

  let total = 0;

  for (let i = 0; i < student.scores.length; i++) {
    total += student.scores[i];
  }

  return (total / 3).toFixed(4);
}

function getRemarks(avg) {

  return avg >= 75 ? "Passed" : "Failed";
}

function displayStudents(list) {

  const table = document.getElementById("studentTable");

  table.innerHTML = "";

  if (list.length === 0) {

    table.innerHTML = `
      <tr>
        <td colspan="6">No result found</td>
      </tr>
    `;
    return;
  }

  for (let i = 0; i < list.length; i++) {

    const s = list[i];

    const avg = calculateAvg(s);
    const remarks = getRemarks(avg);

    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.scores[0]}</td>
        <td>${s.scores[1]}</td>
        <td>${s.scores[2]}</td>
        <td>${avg}</td>
        <td>${remarks}</td>
      </tr>
    `;
  }
}

function showPresent() {

  const result = students.filter(s => s.present);

  displayStudents(result);
}


function showAbsent() {

  const result = students.filter(s => !s.present);

  displayStudents(result);
}


function showPassed() {

  const result = students.filter(s => {

    return getRemarks(calculateAvg(s)) === "Passed";

  });

  displayStudents(result);
}


function showFailed() {

  const result = students.filter(s => {

    return getRemarks(calculateAvg(s)) === "Failed";

  });

  displayStudents(result);
}

function searchStudent() {

  const keyword =
    document.getElementById("search")
    .value
    .toLowerCase()
    .trim();

  if (keyword === "") {

    alert("Please enter a name to search.");
    return;
  }

  const result = students.filter(s => {

    return s.name.toLowerCase().includes(keyword);

  });

  displayStudents(result);
}

displayStudents(students);
