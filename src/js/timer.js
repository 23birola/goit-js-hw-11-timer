
function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
}

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

function updateTimerFace({ days, hours, mins, secs }) {
    // console.log(`${days}:${hours}:${mins}:${secs}`);
    refs.days.innerHTML = `${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.mins.innerHTML = `${mins}`;
    refs.secs.innerHTML = `${secs}`;
};

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.data = targetDate;
        // console.log(this.data);
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            // console.log(currentTime);
            const deltaTime = this.data - currentTime;
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`)
            updateTimerFace({ days, hours, mins, secs });
        }, 1000)
    }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer1.start();
