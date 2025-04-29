// script.js

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
 
     const nama = document.getElementById("nama").value;
     const email = document.getElementById("email").value;
     const telepon = document.getElementById("telepon").value;
     const layanan = document.getElementById("layanan").value;
     const catatan = document.getElementById("catatan").value;
 
     document.getElementById("summaryNama").innerText = nama;
     document.getElementById("summaryEmail").innerText = email;
     document.getElementById("summaryTelepon").innerText = telepon;
     document.getElementById("summaryLayanan").innerText = layanan;
     document.getElementById("summaryCatatan").innerText = catatan || "-";
 
     const orderSummary = document.getElementById("orderSummary");
     orderSummary.style.display = "block";
     orderSummary.classList.add("fade-slide-up");
 
     // Toast Notification
     showToast("Order berhasil! Akan segera diproses.");
 
     this.reset();
   });
 }
 
 // Toast function
 function showToast(message) {
   const toast = document.createElement("div");
   toast.className = "toast-message";
   toast.innerText = message;
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