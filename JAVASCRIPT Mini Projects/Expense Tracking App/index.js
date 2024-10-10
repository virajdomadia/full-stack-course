let expenseForm = document.getElementById("expenseForm");
let addExpense = document.getElementById("addExpense");
let expenseTable = document.getElementById("expenseTable");
let expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("click", (e) => {
  e.preventDefault();
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let amount = document.getElementById("amount").value;

  if (document && category && !isNaN(amount)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${description}</td>
    <td>${category}</td>
    <td>${amount}</td>`;

    expenseList.appendChild(newRow);

    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  }
});
