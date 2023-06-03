let budget = document.getElementById("budget_input");
let budget_btn = document.getElementById("set_budget_btn");
let title = document.getElementById("expense_name");
let cost = document.getElementById("expense_amount");
let expense_btn = document.getElementById("set_budget_btn");
let new_budget = document.getElementById("budget_update");
let new_expense = document.getElementById("expense_update");
let new_balance = document.getElementById("balance_update");
let expense_list = document.getElementById("expense_list");
let expense_cost_list = document.getElementById("expense_cost_list");
let date = document.getElementById("exp_date");
//first
function set_budget_func() {
  if (budget.value === "" || budget.value < 0) {
    error.style.display = "block";
    budget.style.border = "2px solid red";
  } else {
    error.style.display = "none";
    budget.style.border = "2px ";
    new_budget.innerHTML = budget.value;
    new_expense.innerHTML = cost.value;
    new_balance.innerHTML = budget.value;

    budget.value = "";
    // title.value="";
    // cost.value="";
  }
}
function expense_update_func() {
  console.log(cost.value);
  console.log((new_expense.innerHTML = cost.value));
  // console.log((expense_list.innerHTML = title.value));
  // console.log((expense_cost_list.innerHTML = cost.value));
  // console.log((dateee.innerHTML = datee.value));
  if (cost.value !== "") {
    let net_b = new_budget.innerHTML - new_expense.innerHTML;
    console.log((new_balance.innerHTML = net_b));
    console.log((new_balance.innerHTML = net_b));

    //append
    //title append
    let div = document.createElement("div");
    let ele = document.createTextNode(title.value);
    div.appendChild(ele);
    div.style.fontWeight = "bold";

    console.log(div);
    document.getElementById("expense_list").appendChild(div);
    console.log(div);
    console.log(ele);

    //cost append
    let div2 = document.createElement("div");
    let ele2 = document.createTextNode(cost.value);
    div2.appendChild(ele2);
    div2.style.fontWeight = "bold";

    document.getElementById("expense_cost_list").appendChild(div2);
    console.log(div2);
    console.log(ele2);

    //date append
    let div3 = document.createElement("div");
    let ele3 = document.createTextNode(date.value);
    div3.appendChild(ele3);
    div3.style.fontWeight = "bold";

    document.getElementById("date1").appendChild(div3);
    console.log(div3);
    console.log(ele3);

    //edit/delete append
    //edit
    let editbtn = document.createElement("button");
    editbtn.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editbtn.style.fontSize = "20px";
    editbtn.style.height = "30px";
    editbtn.style.fontWeight = "bold";

    document.getElementById("edit_delete_btn").appendChild(editbtn);
    console.log(editbtn);
    editbtn.addEventListener("click", () => {
      div.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";
      deleteButton.style.display = "none";
      editbtn.style.display = "none";
      title.innerHTML =new_budget.value;
      cost.innerHTML = new_expense.value;
      date.innerHTML = date.value;
    });

    //delete

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "20px";
    deleteButton.style.fontWeight = "bold";
    deleteButton.style.backgroundColor = "white";
    deleteButton.style.height = "30px";
    document.getElementById("edit_delete_btn").appendChild(deleteButton);
    console.log(deleteButton);

    deleteButton.addEventListener("click", () => {
      deleteButton.addEventListener("click", () => {
        div.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        deleteButton.style.display = "none";
        editbtn.style.display = "none";
      });
    });
    title.value = "";
    cost.value = "";
    date.value   = "";
    // deleteButton.addEventListener("click", () => {
    //   modifyElement(deleteButton);
    // });
    //end
  } else if (cost.value === "") {
    net_b = budget.value;
    cost.style.border = "2px solid red";
    title.style.border = "2px solid red";
    cost.style.transform = "2px ease-in";
  } else if (cost.value === "") {
    net_b = budget.value;
    cost.style.border = "2px solid red";
    title.style.border = "2px solid red";
    cost.style.transform = "2px ease-in";
  }
}
