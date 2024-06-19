// Page Navigation
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const readingArea = document.querySelector('.reading-area');

// Settings
const backgroundColorInput = document.getElementById('background-color');
const textAlignSelect = document.getElementById('text-align');
const fontSizeInput = document.getElementById('font-size');
const fontFamilySelect = document.getElementById('font-family');
const wordsPerPageInput = document.getElementById('words-per-page'); 

// Page Data (Example - you'll need your own data)
let allText = "This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. This is some sample text for your reading page. You can add more content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.";

// Initial Page
let currentPage = 0;
let wordsPerPage = 150; // Default words per page
updateReadingArea();

// Page Navigation Logic
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateReadingArea();
    }
});

nextPageBtn.addEventListener('click', () => {
    currentPage++;
    updateReadingArea();
});

// Settings Updates
backgroundColorInput.addEventListener('input', () => {
    readingArea.style.backgroundColor = backgroundColorInput.value;
});

textAlignSelect.addEventListener('change', () => {
    readingArea.style.textAlign = textAlignSelect.value;
});

fontSizeInput.addEventListener('input', () => {
    readingArea.style.fontSize = `${fontSizeInput.value}px`;
    // Recalculate and update words per page when font size changes
    updateWordsPerPage(); 
    updateReadingArea(); 
});

fontFamilySelect.addEventListener('change', () => {
    readingArea.style.fontFamily = fontFamilySelect.value;
    // Recalculate and update words per page when font family changes
    updateWordsPerPage(); 
    updateReadingArea();
});

wordsPerPageInput.addEventListener('input', () => {
    wordsPerPage = parseInt(wordsPerPageInput.value, 10); // Get as integer
    currentPage = 0; // Reset to the first page
    updateReadingArea(); 
});

// Function to calculate words per page based on font size and reading area height
function updateWordsPerPage() {
    const testSpan = document.createElement('span');
    testSpan.style.fontSize = `${fontSizeInput.value}px`;
    testSpan.style.fontFamily = fontFamilySelect.value;
    testSpan.textContent = " "; 
    readingArea.appendChild(testSpan); 
    // Add a large amount of text to the reading area
    readingArea.innerHTML = allText.repeat(10); // Repeat the text 10 times
    // Calculate words per page based on how much actually fits
    wordsPerPage = Math.floor(readingArea.textContent.split(" ").length / 10); // Divide by 10 because we repeated the text
    // Restore the original text content
    readingArea.innerHTML = ""; // Clear the repeated text
    readingArea.appendChild(testSpan); // Add the span back 
    // Calculate words per page based on how much actually fits
    // wordsPerPage = Math.floor(readingArea.textContent.split(" ").length); // Divide by 10 because we repeated the text
    readingArea.removeChild(testSpan); // Remove the temporary span
}

// Function to update the reading area
function updateReadingArea() {
    const words = allText.split(" "); 
    const startIndex = currentPage * wordsPerPage;
    const endIndex = Math.min((currentPage + 1) * wordsPerPage, words.length);

    readingArea.innerHTML = words.slice(startIndex, endIndex).join(" "); 
}