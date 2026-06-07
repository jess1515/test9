const pages = document.querySelectorAll(".page");
const endScreen = document.querySelector(".end-screen");
const restartBtn = document.querySelector(".restart-btn");

let current = 0;

pages.forEach((page,index)=>{

page.addEventListener("click",(e)=>{

    // 🚫 BLOCK ANY CLICK INSIDE PROJECT AREA
    if(e.target.closest(".project-card")) return;

    if(e.target.classList.contains("back-btn")) return;

    if(index !== current) return;

    page.classList.add("flipped");
    current++;

    if(current === pages.length){
        setTimeout(()=>{
            endScreen.classList.add("show");
        },700);
    }

});

    const backBtn = page.querySelector(".back-btn");

    if(backBtn){

        backBtn.addEventListener("click",(e)=>{
            e.stopPropagation();

            if(current > 0){
                current--;
                pages[current].classList.remove("flipped");
                endScreen.classList.remove("show");
            }
        });

    }

});

restartBtn.addEventListener("click",()=>{

    endScreen.classList.remove("show");

    pages.forEach(p=>p.classList.remove("flipped"));

    current = 0;
});


/* OPEN PROJECT CARD */
function showProjectCard(cardId, event){

  if(event) event.stopPropagation();

  const target = document.getElementById(cardId);
  const current = document.querySelector(".project-card.active-card");

  if(current && current !== target){
    current.classList.add("swipe-out");
  }

  setTimeout(() => {

    document.querySelectorAll('.project-card').forEach(card=>{
      card.classList.remove('active-card', 'swipe-out');
    });

    target.classList.add('active-card');

  }, 250);
}

/* SWIPE BACK */
function swipeBack(event){

  if(event) event.stopPropagation();

  const current = document.querySelector(".project-card.active-card");

  if(!current) return;

  current.classList.add("swipe-out");

  setTimeout(() => {

    document.querySelectorAll('.project-card').forEach(card=>{
      card.classList.remove('active-card', 'swipe-out');
    });

    document.getElementById("main-projects")
      .classList.add("active-card");

  }, 250);
}

const certData = {
  cisco: ["assets/intro to packet.jpg","assets/intro to cyber.jpg","assets/cybersecurity essentials.jpg", "assets/c++.jpg", "assets/c++ essentials1.jpg", "assets/c++ essentials2.jpg", "assets/ethicalhacker.jpg", "assets/html.jpg"],
  ojt: ["assets/ojt.jpg"],
  dnsc: ["assets/dnsc1.jpg", "assets/dnsc3.jpg", "assets/dnsc4.png", "assets/dnsc5.jpg", "assets/dnsc6.jpg"],
  external: ["assets/dnsc2.jpg"]
};

let tab = "cisco";
let index = 0;

const img = document.getElementById("certImage");

function showCert(t, e){
  e.stopPropagation();
  tab = t;
  index = 0;

  document.querySelectorAll(".cert-tab")
    .forEach(b => b.classList.remove("active"));

  e.target.classList.add("active");

  updateCert();
}

function updateCert(){
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = certData[tab][index];
    img.style.opacity = 1;
  }, 120);
}

function nextCert(e){
  e.stopPropagation();
  index = (index + 1) % certData[tab].length;
  updateCert();
}

function prevCert(e){
  e.stopPropagation();
  index = (index - 1 + certData[tab].length) % certData[tab].length;
  updateCert();
}


function openModal(){
  document.getElementById("contactModal").style.display = "flex";
}

function closeModal(){
  document.getElementById("contactModal").style.display = "none";
}

// close when clicking outside
document.addEventListener("click", function(e){
  const modal = document.getElementById("contactModal");

  if(e.target === modal){
    closeModal();
  }
});

function toggleBlobForm(){
    const blob = document.querySelector(".contact-blob");
    blob.classList.toggle("open");
}

function sendBlobMessage(){
    alert("Message sent!");
}