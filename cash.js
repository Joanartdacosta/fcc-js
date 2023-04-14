function checkCashRegister(price, cash, cid) {
  var wallet = cash - price;

  var objectReturn = {
    status: "",
    change: [],
  };

  let arrCurrency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  cid.reverse();

  var cidSum = 0;
  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }

  let change;
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
