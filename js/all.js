const vm = new Vue({
  el: '#app',
  data: {
    isFocus: true,
    timerHour: 25,
    timerSecond: 0,
  },
  methods: {
    formatTimerNumber(num) {
      return num < 10 ? `0${num.toString()}` : num.toString();
    },
  },
});
