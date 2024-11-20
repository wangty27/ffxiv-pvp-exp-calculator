
const pvpLvl = [ 0, 0, 2000, 4000, 6000, 8000, 11000, 14000, 17000, 20000, 23000, 27000, 31000, 35000, 39000, 43000, 48500, 54000, 59500, 65000, 70500, 78000, 85500, 93000, 100500, 108000, 118000, 128000, 138000, 148000, 158000, 178000, 198000, 218000, 238000, 258000, 278000, 298000, 318000, 338000, 358000];

const frontlineWinExp = 1500;
const frontlineLoseExp = 1250;
const frontlineLose2Exp = 1000;
const frontlineDailyWinExp = 3000;
const frontlineDailyLoseExp = 2750;
const frontlineDailyLose2Exp = 2500;
const crystalineWinExp = 900;
const crystalineLoseExp = 700;
const rivalwingsWinExp = 1250;
const rivalwingsLoseExp = 750;

function calculate() {
  const targetLevel = Number(document.querySelector('#targetLevel').value);
  const currentLevel = Number(document.querySelector('#currentLevel').value);
  const currentExp = Number(document.querySelector('#currentExp').value);

  const expRequired = pvpLvl[targetLevel] - pvpLvl[currentLevel] - currentExp;

  const ccTotalWin = Math.floor(expRequired / crystalineWinExp) + (expRequired % crystalineWinExp > 0 ? 1 : 0);
  const ccTotalLose = Math.floor(expRequired / crystalineLoseExp) + (expRequired % crystalineLoseExp > 0 ? 1 : 0);
  const flTotalWin = Math.floor(expRequired / frontlineWinExp) + (expRequired % frontlineWinExp > 0 ? 1 : 0);
  const flTotalLose = Math.floor(expRequired / frontlineLoseExp) + (expRequired % frontlineLoseExp > 0 ? 1 : 0);
  const flTotalLose2 = Math.floor(expRequired / frontlineLose2Exp) + (expRequired % frontlineLose2Exp > 0 ? 1 : 0);
  const flTotalWinDaily = Math.floor(expRequired / frontlineDailyWinExp) + (expRequired % frontlineDailyWinExp > 0 ? 1 : 0);
  const flTotalLoseDaily = Math.floor(expRequired / frontlineDailyLoseExp) + (expRequired % crystalineLoseExp > 0 ? 1 : 0);
  const flTotalLose2Daily = Math.floor(expRequired / frontlineDailyLose2Exp) + (expRequired % crystalineLoseExp > 0 ? 1 : 0);
  const rwTotalWin = Math.floor(expRequired / rivalwingsWinExp) + (expRequired % crystalineLoseExp > 0 ? 1 : 0);
  const rwTotalLose = Math.floor(expRequired / rivalwingsLoseExp) + (expRequired % crystalineLoseExp > 0 ? 1 : 0);

  document.querySelector(`#ccTotalWin`).textContent = ccTotalWin > 0 ? ccTotalWin : 'stinky';
  document.querySelector(`#ccTotalLose`).textContent = ccTotalLose > 0 ? ccTotalLose : 'stinky';
  document.querySelector(`#flTotalWin`).textContent = flTotalWin > 0 ? flTotalWin : 'stinky';
  document.querySelector(`#flTotalLose`).textContent = flTotalLose > 0 ? flTotalLose : 'stinky';
  document.querySelector(`#flTotalLose2`).textContent = flTotalLose2 > 0 ? flTotalLose2 : 'stinky';
  document.querySelector(`#flTotalWinDaily`).textContent = flTotalWinDaily > 0 ? flTotalWinDaily : 'stinky';
  document.querySelector(`#flTotalLoseDaily`).textContent = flTotalLoseDaily > 0 ? flTotalLoseDaily : 'stinky';
  document.querySelector(`#flTotalLose2Daily`).textContent = flTotalLose2Daily > 0 ? flTotalLose2Daily : 'stinky';
  document.querySelector(`#rwTotalWin`).textContent = rwTotalWin > 0 ? rwTotalWin : 'stinky';
  document.querySelector(`#rwTotalLose`).textContent = rwTotalLose > 0 ? rwTotalLose : 'stinky';
}