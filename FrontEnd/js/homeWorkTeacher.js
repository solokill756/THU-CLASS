document.addEventListener('DOMContentLoaded', function() {
    const btnradio1 = document.getElementById('btnradio1');
    const btnradio2 = document.getElementById('btnradio2');
    const imageInput = document.getElementById('imageInput');
    const fileInput = document.getElementById('fileInput');
    const formFileMultiple = document.getElementById('formFileMultiple');
    const addImageButton = document.getElementById('addImageButton');
    const imageList = document.getElementById('imageList');
    const deleteImageButton = document.getElementById('deleteImageButton');

    btnradio1.addEventListener('click', function() {
        imageInput.classList.remove('d-none');
        fileInput.classList.add('d-none');
    });

    btnradio2.addEventListener('click', function() {
        imageInput.classList.add('d-none');
        fileInput.classList.remove('d-none');
    });

    addImageButton.addEventListener('click', function() {
        if (formFileMultiple.files.length > 0) {
            const file = formFileMultiple.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const imageItem = document.createElement('div');
                imageItem.className = 'image-item';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                
                const fileName = document.createElement('span');
                fileName.textContent = file.name;
                
                imageItem.appendChild(img);
                imageItem.appendChild(fileName);
                
                imageList.appendChild(imageItem);
            };
            
            reader.readAsDataURL(file);
            
            // Clear the input for the next file
            formFileMultiple.value = "";
        } else {
            alert("Vui lòng chọn một ảnh.");
        }
    });
    deleteImageButton.addEventListener('click' , function(){
        const lastChirld = imageList.lastElementChild;
        if(lastChirld) {
            imageList.removeChild(lastChirld);
        }
        else {
            alert("Bạn đã xóa hết ảnh.");
        }
    })
});
