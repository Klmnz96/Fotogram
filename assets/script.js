 
const holidayImages = ['amsterdam.jpg', 'belgrad.jpg', 'jamaica.jpg', 
                       'ko-samui.jpg', 'madagascar.jpg', 'madeira.jpg',
                       'mostar.jpg', 'new-york.jpg', 'seychellen.jpg',
                       'tokyo.jpg', 'tromso.jpg', 'zanzibar.jpg'];

let galleryHTML = ''; 

const dialogRef = document.getElementById('imagePreview');

const dialogImageElem = document.getElementById('dialogImage');

let currentIndex = 0;



for(let i = 0; i < holidayImages.length; i++){
    galleryHTML += `<button onclick='openImage("${holidayImages[i]}", ${i})' aria-label="Open ${holidayImages[i]}"><img src="./img/${holidayImages[i]}" alt="${holidayImages[i]}"</button>`;
}

document.getElementById('gallery-grid').innerHTML = galleryHTML;


function openImage(imageName, index) {
    dialogImageElem.src = `./img/${imageName}`;
    currentIndex = index;
    dialogImageElem.alt = imageName;
    document.getElementById("counter").innerText = `${currentIndex + 1}/${holidayImages.length}`;
    document.getElementById("dialogTitle").innerText = imageName;
    openDialog();
}


function showNextImage() {
    currentIndex++;
    if(currentIndex >= holidayImages.length) {
        currentIndex = 0;
    }
    dialogImageElem.alt = holidayImages[currentIndex];
    dialogImageElem.src = `./img/${holidayImages[currentIndex]}`;
    document.getElementById("counter").innerText = `${currentIndex + 1}/${holidayImages.length}`;
    document.getElementById("dialogTitle").innerText = holidayImages[currentIndex];
}


function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = holidayImages.length - 1;
    }
    dialogImageElem.alt = holidayImages[currentIndex];
    dialogImageElem.src = `./img/${holidayImages[currentIndex]}`;
    document.getElementById("counter").innerText = `${currentIndex + 1}/${holidayImages.length}`;
    document.getElementById("dialogTitle").innerText = holidayImages[currentIndex];
}


function openDialog() {
    dialogRef.showModal();
    dialogRef.classList.add("opened");
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("opened");
}

function handleDialogClick(event) {
    if (event.target === dialogRef) {
        closeDialog();
    }
}