document.addEventListener('DOMContentLoaded', function () {
  const helloBtn = document.getElementById('helloBtn');
  if (helloBtn) {
    helloBtn.addEventListener('click', function () {
      alert('شكرًا لزيارتك موقعي! 🌟');
    });
  }
});
