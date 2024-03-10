async function fetchData() {
  const res = await fetch("https://api-web.nhle.com/v1/scoreboard/now");
  const record = await res.json();
  // console.log(record);
  document.getElementById("today").innerHTML = record.focusedDate;
  const today = record.focusedDate;
  // console.log(record);
  let allGames = record.gamesByDate;
  const todaysGames = allGames.find(({ date }) => date === today);
  console.log(todaysGames);
  // document.getElementById("areaName").innerHTML = record.data[0].areaName;
  // document.getElementById("latestBy").innerHTML = record.data[0].latestBy;
  // document.getElementById("deathNew").innerHTML = record.data[0].deathNew;
}
fetchData();
