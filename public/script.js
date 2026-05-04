fetch('/api/patient')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').innerText = "Name: " + data.name;
    document.getElementById('status').innerText = "Status: " + data.status;
    document.getElementById('date').innerText = "Last Check: " + data.lastCheck;
  });