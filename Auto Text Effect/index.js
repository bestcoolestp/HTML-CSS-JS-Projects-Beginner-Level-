const containerEl = document.querySelector('.container');

const jobs = ["youtuber", "engineer", "accountant", "web developer", "designer", "teacher", "doctor", "lawyer", "chef", "police officer", "firefighter", "actor", "actress", "singer", "dancer", "athlete", "writer", "journalist", "nurse", "dentist", "veterinarian", "architect", "scientist", "psychologist", "pilot", "soldier", "politician", "businessperson", "entrepreneur", "farmer", "mechanic", "electrician", "plumber", "hairdresser", "barber", "cashier", "waiter", "waitress", "librarian", "artist", "photographer", "musician", "driver", "policeman", "fireman", "lawyer", "doctor", "nurse", "teacher", "professor", "scientist", "engineer", "architect", "designer", "writer", "journalist", "accountant", "lawyer", "businessperson", "entrepreneur", "farmer", "mechanic", "electrician", "plumber", "hairdresser", "barber", "cashier", "waiter", "waitress", "librarian", "artist", "photographer", "musician", "driver", "policeman", "fireman", "lawyer", "doctor", "nurse", "teacher", "professor", "scientist", "engineer", "architect", "designer", "writer", "journalist", "accountant", "lawyer", "businessperson", "entrepreneur", "farmer", "mechanic", "electrician", "plumber", "hairdresser", "barber", "cashier", "waiter", "waitress", "librarian", "artist", "photographer", "musician", "driver", "policeman", "fireman", "lawyer", "doctor", "nurse", "teacher", "professor", "scientist", "engineer", "architect", "designer", "writer", "journalist", "accountant", "lawyer", "businessperson", "entrepreneur", "farmer", "mechanic", "electrician", "plumber", "hairdresser"];

let jobIndex = 0;

let charIndex = 0;

updateText();	

function updateText() {
    charIndex++;
    vowels = ["a", "e", "i", "o", "u"];
  containerEl.innerHTML = `
  <hi>I am ${vowels.includes(jobs[jobIndex].slice(0, 1)) ? "an" : "a"} ${jobs[jobIndex].slice(0, charIndex)}</h1>`;
    
    if(charIndex > jobs[jobIndex].length) {
        jobIndex++;
        charIndex = 0;
    }

    if(jobIndex === jobs.length) {
        jobIndex = 0;
    }
    containerEl.style = "color: #2E4057; font-size: 4rem; text-align: center; font-family: 'Shadows Into Light';";
   setTimeout(updateText, 300);
}