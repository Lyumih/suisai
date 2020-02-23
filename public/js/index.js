const app = new Vue({
  el: "#app",
  data: {
    day: 1,
    month: 1,
    year: 1980,
    lines: []
  },
  computed: {
    chs() {
      return this.calculate(12);
    },
    mission() {
      return this.calculateMission(this.day, this.month, this.year);
    },
    matrix() {
        let numbers = this.dateString.split("")
        return numbers.filter(number => number > 0)
    },
    dateString() {
      return ("" + this.day + this.month + this.year);
    },
    matrixPretty() {
        return {
            1: this.matrix.filter(item => item == 1),
            2: this.matrix.filter(item => item == 2),
            3: this.matrix.filter(item => item == 3),
            4: this.matrix.filter(item => item == 4),
            5: this.matrix.filter(item => item == 5),
            6: this.matrix.filter(item => item == 6),
            7: this.matrix.filter(item => item == 7),
            8: this.matrix.filter(item => item == 8),
            9: this.matrix.filter(item => item == 9),
        }
    }
  },
  methods: {
    calculate(number) {
      let simpleNumber = 0;
      if (number > 9) {
      }
      return number;
    },
    calculateMission(day, month, year) {
      return this.calculate(15);
    }
  }
});
