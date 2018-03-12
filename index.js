// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver){
    console.log(driver[`name`]);
  });
};

function logDriversByHometown(drivers, location) {
  hometownMatch = drivers.filter(driver => driver[`hometown`] === location);
  hometownMatch.forEach(function (driver){console.log(driver[`name`])});
};

function driversByRevenue(drivers) {
  const driversCopy = drivers.slice()
  sorted = driversCopy.sort(function (a,b){
    return a["revenue"] - b["revenue"];
  });
  return sorted
};

function driversByName(drivers) {
  const driversCopy = drivers.slice()
  sorted = driversCopy.sort(function (a,b){
    return a["name"].localeCompare(b["name"]);
  });
  return sorted
}

function totalRevenue(drivers) {
  const reduceRevenue = function (agg, el, i, arr) {
    return agg + el["revenue"]
  };
  return drivers.reduce(reduceRevenue,0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
