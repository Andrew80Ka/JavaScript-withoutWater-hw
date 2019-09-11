'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let expenseItem1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expenseItemValue1 = +prompt('Во сколько обойдется?', '');
let expenseItem2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expenseItemValue2 = +prompt('Во сколько обойдется?', '');

appData.expenses.expenseItem1 = expenseItemValue1;
appData.expenses.expenseItem2 = expenseItemValue2;

let daysInMonth = 30;
let budgetOneDay = Math.floor(appData.budget / daysInMonth);

alert('Бюджет на один день: ' + budgetOneDay + '.');
