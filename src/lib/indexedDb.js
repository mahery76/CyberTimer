import Dexie from "dexie";

const defaultComputers = [
  {
    computer_name: "P1",
    hours: 0,
    minutes: 0,
    seconds: 0,
    computer_fee: 0,
    computer_description: ""
  },
  {
    computer_name: "P2",
    hours: 0,
    minutes: 0,
    seconds: 0,
    computer_fee: 0,
    computer_description: ""
  },
  {
    computer_name: "P3",
    hours: 0,
    minutes: 0,
    seconds: 0,
    computer_fee: 0, 
    computer_description: ""
  },
  {
    computer_name: "P4",
    hours: 0,
    minutes: 0,
    seconds: 0,
    computer_fee: 0,
    computer_description: ""
  },
];

const defaultWifis = [
  {
    wifi_name: "Wifi",
    hours: 0,
    minutes: 0,
    seconds: 0,
    wifi_fee: 0,
    wifi_description: ""
  }
];
export const db = new Dexie("cybercafedb");
db.version(1).stores({
  wifis: "++wifi_id, wifi_name, hours, minutes, seconds, wifi_fee, wifi_description",
  computers: "++computer_id, computer_name, hours, minutes, seconds, computer_fee, computer_description",
});
db.on("populate", () => {
  db.computers.bulkAdd(defaultComputers);
  db.wifis.bulkAdd(defaultWifis)
});
db.open().catch(function(error) {
    console.error("Open failed: " + error)
})