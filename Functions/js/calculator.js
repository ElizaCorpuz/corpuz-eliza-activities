let display = document.getElementById("display");

    function press(value) {
        display.value += value;
    }

    function allClear() {
        display.value = "";
    }

    function clearLast() {
        display.value = display.value.slice(0, -1);
    }
