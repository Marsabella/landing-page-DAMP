// Efek smooth scroll untuk navbar link
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Handle submit form order
  const orderForm = document.getElementById("orderForm");
  
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById('orderEmail').value.trim();
      const telepon = document.getElementById("telepon").value.trim();
      const layanan = document.getElementById("layanan").value.trim();
      const catatan = document.getElementById("catatan").value.trim();
  
      // Validasi sederhana
      if (!nama || !email || !telepon || !layanan) {
        showToast("Semua kolom wajib diisi!", "error");
        return;
      }
  
      document.getElementById("summaryNama").innerText = nama;
      document.getElementById("summaryEmail").innerText = email;
      document.getElementById("summaryTelepon").innerText = telepon;
      document.getElementById("summaryLayanan").innerText = layanan;
      document.getElementById("summaryCatatan").innerText = catatan || "-";
  
      const orderSummary = document.getElementById("orderSummary");
      orderSummary.style.display = "block";
  
      // Toast Notification
      showToast("Order berhasil! Akan segera diproses.", "success");
  
      this.reset();
    });
  }
  
  // Toast function
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = "toast-message";
  
    if (type === "success") {
      toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
      toast.style.backgroundColor = "#4caf50";
    } else if (type === "error") {
      toast.innerHTML = `<i class="fas fa-times-circle"></i> ${message}`;
      toast.style.backgroundColor = "#f44336";
    }
  
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.classList.add("show");
    }, 100);
  
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }  