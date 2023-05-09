function calculateTotal(team1, team2) {
  var t1s = team1.reduce((total, num) => total + num,0);
  var t2s = team2.reduce((total, num) => total + num,0);
  return t1s > t2s;
}