function add() {
    let content = document.getElementById("table-content");
    let type = document.getElementById("type").value;
    let description = document.getElementById("name").value;
    let value = document.getElementById("value").value;

    if (value === "" || value === null || description === "" || description === null) {
        alert("Don't leave any field blank!!!");
        return;
    }
    if (type === "Expense") {
        let expense = document.getElementById("expense");
        expense.innerHTML = parseInt(expense.innerHTML) + parseInt(value);
    } else {
        let savings = document.getElementById("savings");
        savings.innerHTML = parseInt(savings.innerHTML) + parseInt(value);
    }
    
    content.innerHTML += "Type: " + type + "&nbsp&nbsp&nbsp&nbspDescription: " + description + "&nbsp&nbsp&nbsp&nbspValue: " + value + "<br/>";
    updateChart();
}

//doughnut chart
function updateChart() {
    let expense = parseInt(document.getElementById("expense").innerHTML);
    let savings = parseInt(document.getElementById("savings").innerHTML);
    const xValues = ["Expense", "Savings"];
    let yValues = [expense, savings];
    const barColors = [
        "red",
        "green"
    ];

    new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Expense/Savings Visual"
            }
        }
    });
}
