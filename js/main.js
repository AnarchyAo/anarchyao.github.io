if (window.addEventListener) {
    var valid = false;
    var index = 0;
    var konami = [38,38,40,40,37,39,37,39,66,65];

    window.addEventListener("keydown", function(e) {
        if (e.keyCode === konami[index]) {
            index++; // valid key at the valid point

            if (index == 10) { // all 10 keys were correct
                alert("Correct");
            }
        } else {
            // incorrect code restart
            index = 0;
        }
   });
}
