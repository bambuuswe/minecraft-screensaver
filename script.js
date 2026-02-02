function updateClock() {
  const now = new Date();
  
  // Tid
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('time').textContent = `${hours}:${minutes}`;
  document.getElementById('seconds').textContent = seconds;
  
  // Datum
  const days = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];
  const dayName = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  
  document.getElementById('date').textContent = `${dayName} ${date}/${month}`;
