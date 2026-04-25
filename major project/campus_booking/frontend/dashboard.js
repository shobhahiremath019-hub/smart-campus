async function loadDashboard() {
    let res = await fetch("http://127.0.0.1:8000/api/analytics/");
    let data = await res.json();

    let labels = data.map(d => "Resource " + d.resource);
    let values = data.map(d => d.total);

    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Bookings",
                data: values,
                backgroundColor: [
                    "#3498db",
                    "#e74c3c",
                    "#2ecc71",
                    "#f1c40f",
                    "#9b59b6"
                ]
            }]
        }
    });
}

loadDashboard();