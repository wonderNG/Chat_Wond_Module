//get all filter__item
const filter__items = document.querySelectorAll('.filter__item');
//add a click event listener to each item
filter__items.forEach(item => {
    item.addEventListener('click', () => {
        //update the style of the clicked item
        item.style.background = 'linear-gradient(120deg, var(--color-palette__off-blue) 0%, var(--color-palette__blue) 100%)';
        item.style.color = 'white';
        item.style.fontWeight = 'bold';
        //check if the checkbox is checked
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            //remove the added style
            item.style.background = '';
            item.style.color = '';
            item.style.fontWeight = '';
            return;
        }
    });
});
//get the filter__clear
const clearFilter = document.querySelector('.filter__clear');

// Add a click event listener to the clearFilter
clearFilter.addEventListener('click', () => {

    // Loop through each filter__item element
    filter__items.forEach(item => {
        // Find the enabled checkbox
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            // Disable the checkbox
            checkbox.checked = false;
            item.style.backgroundColor = '';
            return;
        }
    });
});




/*
//get all chat__list-item
const chatList__item = document.querySelectorAll('.chat__list-item');
//add a hover event listener to each item
chatList__item.forEach(item => {
    item.addEventListener('mouseover', () => {
        console.log("hello");
        //get alls  chat previews
        const chat__preview = document.querySelectorAll('.chat__preview');
        //show current chat preview
        chat__preview.forEach(element => {
            element.style.display = 'block';
            element.addEventListener('mouseout', () => {
                element.style.display = 'none';
                console.log("Mouse out");
            })
        });
    });
});

*/
