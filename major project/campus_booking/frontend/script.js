function login() {
  const role = prompt("Enter role: admin or student");

  if (role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "student.html";
  }
}