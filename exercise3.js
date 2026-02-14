const display = document.querySelector('#count-display');
const incBtn = document.getElementById("inc-btn");
const decBtn = document.getElementById("dec-btn");

const CounterApp = {
 count: 0,
 increment: function() {
 // increment this.count, update the display span
    this.count += 1;
    display.textContent = this.count;
 },
 decrement: function() {
 // decrement this.count, update the display span
    this.count -= 1;
    display.textContent = this.count;
 }
};
// Attach increment to #inc-btn using .bind()
incBtn.addEventListener("click", CounterApp.increment.bind(CounterApp))
// Attach decrement to #dec-btn using .bind()
decBtn.addEventListener("click", CounterApp.decrement.bind(CounterApp))