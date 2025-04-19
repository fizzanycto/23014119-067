// script.js

function showWelcome() {
    alert("Welcome to My E-Commerce Store!");
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
  }
  
  function changeHeaderColor() {
    const header = document.querySelector("header");
    header.classList.toggle("bg-gray-800");
    header.classList.toggle("bg-indigo-600");
  }
  
  function showTime() {
    const now = new Date();
    alert("Current Time: " + now.toLocaleTimeString());
  }
  
  function highlightCategories() {
    document.querySelectorAll("section ul li").forEach((el) => {
      el.classList.toggle("bg-yellow-200");
    });
  }
  
  function toggleProducts() {
    const products = document.querySelector("section:nth-of-type(2) .grid");
    products.classList.toggle("hidden");
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  function subscribeMessage() {
    alert("Thank you for subscribing!");
  }
  
  function addNewCategory() {
    const list = document.querySelector("section:nth-of-type(3) ul");
    const li = document.createElement("li");
    li.textContent = "New Category";
    li.className = "bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer text-center";
    list.appendChild(li);
  }
  
  function resetPage() {
    location.reload();
  }
  