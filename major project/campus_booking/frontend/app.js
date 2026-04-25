async function loadBookings() {
    let res = await fetch(API + "bookings/");
    let data = await res.json();

    let list = document.getElementById("bookings");
    list.innerHTML = "";

    data.forEach((b, index) => {
        let li = document.createElement("li");

        li.innerText = `${index + 1}. ${b.user} booked Resource ID ${b.resource}
        from ${new Date(b.start_time).toLocaleString()}
        to ${new Date(b.end_time).toLocaleString()}`;

        li.style.background = "#fff";
        li.style.margin = "10px";
        li.style.padding = "10px";
        li.style.borderRadius = "8px";

        list.appendChild(li);
    });
}