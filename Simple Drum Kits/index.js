const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    const audioEl = document.createElement("audio");

    audioEl.src = `./sounds/${kit}.wav`;
    btnEl.classList.add("btn");
    
    btnEl.style.backgroundImage = `url(./images/${kit}.jpg)`;
    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        audioEl.currentTime = 0;
        audioEl.play();
    
    btnEl.style.transform = "scale(.9)";
    setTimeout(() => {
            btnEl.style.transform = "scale(1)";
        }, 100);    
    });

    window.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (e.key === kit[0]) {
            audioEl.currentTime = 0;
            
            btnEl.style.color = "fb07be";
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    }); 
    
});
