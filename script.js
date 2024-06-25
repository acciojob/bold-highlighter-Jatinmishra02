function highlight() {
    // Get all <strong> elements
    let boldElements = document.getElementsByTagName('strong');
    // Change the color of each <strong> element to green
    for (let i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = 'green';
    }
}

function return_normal() {
    // Get all <strong> elements
    let boldElements = document.getElementsByTagName('strong');
    // Revert the color of each <strong> element back to black
    for (let i = 0; i < boldElements.length; i++) {
        boldElements[i].style.color = 'black';
    }
}
