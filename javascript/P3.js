let balance = 5000;

const Account = (amount) => {
  if (amount > balance) return "INSUFFICIENT FUNDS 😫";
  else {
    return "TAKE YOUR CASH 💵💶";
  }
};
let withdraw = Number(prompt("Enter the amount you want to withdraw"));
alert(Account(withdraw));
