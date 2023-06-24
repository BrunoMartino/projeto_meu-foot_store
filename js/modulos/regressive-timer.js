export default class RegressiveTimer {
  constructor(product) {
    this.product = document.querySelectorAll(product);
    this.productArray = [...this.product];
    this.now = new Date();
  }

  createTimer() {
    this.productArray.forEach((element, index) => {
      const clock = document.createElement("div");
      clock.classList.add("item-timer");
      element.appendChild(clock);
      this.setTimer(clock, index);
    });
  }

  setTimer(clock, index) {
    let timerData = this.getTimerData();
    let totalTime;

    if (timerData && timerData[index]) {
      totalTime = timerData[index].remainTime;
    } else {
      const hours = index * 1;
      const min = 40;
      const sec = 20;

      totalTime = hours * 3600 + min * 60 + sec;
    }

    let timeInterval = setInterval(() => {
      let remainHours = Math.floor(totalTime / 3600);
      let remainMin = Math.floor((totalTime % 3600) / 60);
      let remainSec = totalTime % 60;

      remainHours = remainHours.toString().padStart(2, "0");
      remainMin = remainMin.toString().padStart(2, "0");
      remainSec = remainSec.toString().padStart(2, "0");

      clock.innerHTML = `<p>${remainHours}:${remainMin}:${remainSec}</p>`;

      if (totalTime <= 0) {
        clock.innerHTML = `<p>Promoção Acabou</p>`;
        clearInterval(timeInterval);
        clock.parentNode.classList.add("disabled");
        this.updateTimerData(index, 0);
      } else {
        this.updateTimerData(index, totalTime);
      }
      totalTime--;
    }, 1000);
  }

  getTimerData() {
    const storedData = localStorage.getItem("today");
    return storedData ? JSON.parse(storedData) : undefined;
  }

  updateTimerData(index, remainTime) {
    let timerData = this.getTimerData() || [];
    if (!timerData[index]) {
      timerData[index] = {};
    }
    timerData[index].remainTime = remainTime;
    localStorage.setItem("today", JSON.stringify(timerData));
  }

  resetTimerIfDayChanged() {
    const storedData = this.getTimerData();
    const storedDay = storedData ? storedData.day : null;
    const currentDay = this.now.toDateString();

    if (storedDay !== currentDay) {
      localStorage.setItem("today", JSON.stringify({ day: currentDay }));

      this.productArray.forEach((element) => {
        element.classList.remove("disabled");
        element.removeAttribute("disabled");
      });
    }
  }

  init() {
    this.resetTimerIfDayChanged();
    this.createTimer();
  }
}
