const app = new Vue({
  el: "#app",
  data: {
    day: 2,
    month: 4,
    year: 1996,
  },
  computed: {
    chs() {
      return simplify(this.day)
    },
    mission() {
      return simplify(this.day + "" + this.month + "" + this.year)
    },
    selfYear() {
      return simplify(this.day + "" + this.month + "" + new Date().getFullYear())
    },
    selfMonth() {
      return simplify(this.selfYear + " " + new Date().getMonth() + 1)
    },
    selfDay() {
      return simplify(this.selfMonth + " " + new Date().getDate())
    }
  }
});
