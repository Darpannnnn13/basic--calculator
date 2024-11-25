function appendValue(value) {
    const display = document.getElementById('result');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1); // Removes the last character
  }
  
  function calculate() {
    const display = document.getElementById('result');
    try {
      display.value = eval(display.value);
    } catch (e) {
      alert('Invalid Input');
    }
  }
  