/**
 * NISARG SHRISHTI - WIZARD & UPI DEEP-LINK ENGINE
 */
let selectedSlot = "morning";
let guestCount = 1;
let holdTimerInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  if (CONFIG.DEMO_MODE) {
    document.getElementById("demo-banner").classList.remove("hidden");
  } else {
    document.getElementById("sim-pay-btn").classList.add("hidden");
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById("booking-date");
  if (dateInput) dateInput.value = tomorrow.toISOString().split('T')[0];

  renderSlots();
});

function renderSlots() {
  const container = document.getElementById("slot-container");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.SLOTS.forEach(slot => {
    const isSel = selectedSlot === slot.id;
    const price = slot.isNight ? CONFIG.OVERNIGHT_CAMPING_PRICE : CONFIG.PRICE_PER_HEAD;
    
    const card = document.createElement("div");
    card.className = `p-3.5 rounded-2xl border cursor-pointer transition text-left flex justify-between items-center ${isSel ? 'border-terracotta bg-blush/40 shadow-sm' : 'border-slate-200 hover:border-sage'}`;
    card.onclick = () => { 
      selectedSlot = slot.id; 
      renderSlots(); 
      updateGuests(0);
    };
    
    card.innerHTML = `
      <div>
        <div class="font-bold text-forest text-xs">${slot.title}</div>
        <div class="text-[11px] text-slate-500">${slot.time}</div>
      </div>
      <div class="text-right">
        <div class="text-xs font-bold text-terracotta">₹${price}</div>
        <div class="text-[10px] text-emerald-700 font-bold">● ${CONFIG.MAX_CAPACITY_PER_SLOT} Spots Left</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function updateGuests(delta) {
  guestCount = Math.max(1, Math.min(CONFIG.MAX_CAPACITY_PER_SLOT, guestCount + delta));
  const activeSlot = CONFIG.SLOTS.find(s => s.id === selectedSlot);
  const unitPrice = activeSlot && activeSlot.isNight ? CONFIG.OVERNIGHT_CAMPING_PRICE : CONFIG.PRICE_PER_HEAD;
  
  document.getElementById("guest-cnt").textContent = guestCount;
  document.getElementById("unit-price-lbl").textContent = `₹${unitPrice}`;
  document.getElementById("total-price").textContent = `₹${guestCount * unitPrice}`;
}

function nextStep(step) {
  document.querySelectorAll(".wizard-step").forEach(el => el.classList.add("hidden"));
  document.getElementById(`step-${step}`).classList.remove("hidden");
  
  document.getElementById("step-lbl").textContent = `Step ${step} of 4`;
  document.getElementById("progress-bar").style.width = `${step * 25}%`;
}

function generateUPIPayment() {
  const name = document.getElementById("cust-name").value;
  const phone = document.getElementById("cust-phone").value;

  if (!name || phone.length < 10) {
    alert("Please enter a valid full name and 10-digit mobile number.");
    return;
  }

  nextStep(4);
  const activeSlot = CONFIG.SLOTS.find(s => s.id === selectedSlot);
  const unitPrice = activeSlot && activeSlot.isNight ? CONFIG.OVERNIGHT_CAMPING_PRICE : CONFIG.PRICE_PER_HEAD;
  const amount = guestCount * unitPrice;
  const bookingID = "NS" + Math.floor(100000 + Math.random() * 900000);

  const upiUrl = `upi://pay?pa=${CONFIG.UPI_ID}&pn=${encodeURIComponent(CONFIG.FARM_NAME)}&am=${amount}&cu=INR&tn=${bookingID}&tr=${bookingID}`;

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, { text: upiUrl, width: 170, height: 170 });

  document.getElementById("upi-deep-link").href = upiUrl;
  startTimer(600);
}

function startTimer(duration) {
  let timer = duration, minutes, seconds;
  clearInterval(holdTimerInterval);
  holdTimerInterval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(holdTimerInterval);
      alert("Hold duration expired. Please pick your slot again.");
      nextStep(1);
    }
  }, 1000);
}

function simulatePaymentSuccess() {
  clearInterval(holdTimerInterval);
  document.getElementById("step-4").classList.add("hidden");
  document.getElementById("step-confirmed").classList.remove("hidden");

  const activeSlot = CONFIG.SLOTS.find(s => s.id === selectedSlot);
  const unitPrice = activeSlot && activeSlot.isNight ? CONFIG.OVERNIGHT_CAMPING_PRICE : CONFIG.PRICE_PER_HEAD;

  document.getElementById("res-id").textContent = "NS-DEMO-99";
  document.getElementById("res-slot").textContent = activeSlot.title;
  document.getElementById("res-guests").textContent = `${guestCount} Visitors`;
  document.getElementById("res-amount").textContent = `₹${guestCount * unitPrice}`;
}