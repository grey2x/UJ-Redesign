 
 //pictures
 const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let index = 0;
  let autoPlayInterval;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('is-active', idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
  });

  
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  startAutoPlay();


  //search
const searchWrapper = document.querySelector('.search-wrapper');
const searchtoggleBtn = document.querySelector('.search-toggle');
const searchCloseBtn = document.querySelector('.search-close');

  searchtoggleBtn.addEventListener('click', () => {
  searchWrapper.classList.toggle('active');

  
searchCloseBtn.addEventListener('click', () => {
  searchWrapper.classList.remove('active');
});
  });

//chatbot//
const toggleBtn = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const closeBtn = document.getElementById("chatbot-close");
const sendBtn = document.getElementById("chatbot-send");
const inputField = document.getElementById("chatbot-text");
const messages = document.getElementById("chatbot-messages");


toggleBtn.addEventListener("click", () => {
  chatbotWindow.style.display = "flex";
  toggleBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  chatbotWindow.style.display = "none";
  toggleBtn.style.display = "block";
});


function sendMessage() {
  const text = inputField.value.trim();
  if (!text) return;

  
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = text;
  messages.appendChild(userMsg);

 
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");

  if (text.toLowerCase().includes("hello")) {
    botMsg.textContent = "Hi there! Welcome to UJ 👋";
  } else if (text.toLowerCase().includes("apply")) {
    botMsg.textContent = "You can apply here: https://www.uj.ac.za/study-at-uj/";
  } else if (text.toLowerCase().includes("contact")) {
    botMsg.textContent = "Call +27 (0)11 559 4555 or email info@uj.ac.za 📧";
  } else {
    botMsg.textContent = "I’m still learning 🤖. Try asking about 'apply', 'contact', or 'hello'.";
  }

  messages.appendChild(botMsg);

 
  messages.scrollTop = messages.scrollHeight;
  inputField.value = "";
}

sendBtn.addEventListener("click", sendMessage);

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
