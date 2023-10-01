// Array of specialist objects
const specialists = [
    {
        name: 'Dr. Maria Jane Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '40 tahun',
        rating: '90%',
        price: 'Rp. 150.000',
    },
    {
        name: 'Dr. Sarah Fatma Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '35 tahun',
        rating: '90%',
        price: 'Rp. 150.000',
    },
    {
        name: 'Dr. Laura Amanda Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '45 tahun',
        rating: '95%',
        price: 'Rp. 150.000',
    },
    {
        name: 'Dr. Olivia Smith Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '38 tahun',
        rating: '93%',
        price: 'Rp. 150.000',
    },
    {
        name: 'Dr. Grace Bell Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '48 tahun',
        rating: '96%',
        price: 'Rp. 150.000',
    },
    {
        name: 'Dr. Jessice Kim Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '42 tahun',
        rating: '90%',
        price: 'Rp. 150.000',
    },
    // Add more specialist objects here
];

// Function to create a contact card
function createContactCard(specialist) {
    const card = document.createElement('div');
    card.classList.add('card-contact');

    card.innerHTML = `
        <img src="/image/logo-contact.svg">
        <div class="isi-contact">
            <p style="font-size: 20px; font-weight: 500;">${specialist.name}</p>
            <p class="spesialis">${specialist.specialist}</p>
            <div class="flex-exp-rate">
                <div class="container-exp-rate">
                    <img src="/image/consultation_bag.svg" style="width: 15px;  height: 11px;">
                    <p>${specialist.experience}</p>
                </div>
                <div class="container-exp-rate">
                    <img src="/image/consultation_ibu_jari.svg" style="width: 14px;  height: 11px;">
                    <p>${specialist.rating}</p>
                </div>
            </div>
            <p style="font-size: 20px; transform: translateY(-15px)">${specialist.price}</p>
        </div>
        <button class="button-chat">Chat</button>
    `;

    // Add an event listener to the "Chat" button
    const chatButton = card.querySelector('.button-chat');
    chatButton.addEventListener('click', () => {
        // Open the consultation form with doctor's name
        openConsultationForm(specialist.name);
    });
    return card;
}

// Function to open the consultation form
function openConsultationForm(doctorName) {
    const consultationPopup = document.getElementById('consultation-popup');
    const overlay = document.getElementById('overlay');
    consultationPopup.style.display = 'block';
    overlay.style.display = 'block';

    // Generate a more unique key using the doctor's name, timestamp, and random string
    const uniqueKey = `${doctorName}-${Date.now()}-${generateRandomString(6)}`;

    // Set the doctor's name in the form
    const doctorNameField = consultationPopup.querySelector('#doctor-name');
    doctorNameField.textContent = doctorName;

    const namaInput = document.getElementById("nama");
    const keluhanInput = document.getElementById("keluhan");
    const usiaKehamilanInput = document.getElementById("usiaKehamilan");
    const riwayatPenyakitInput = document.getElementById("riwayatPenyakit");
    const errorMessage = document.getElementById("error-message");

    // Handle form submission
    const consultationForm = consultationPopup.querySelector('#consultation-form');
    consultationForm.addEventListener('submit', function (e) {
        if (namaInput.value.trim() === "" || keluhanInput.value.trim() === "" || keluhanInput.value.trim() === "" || usiaKehamilanInput.value.trim() === "" || riwayatPenyakitInput.value.trim() === "") {
            e.preventDefault(); // Prevent the form from submitting
            errorMessage.textContent = "please fill in all fields correctly.";
            errorMessage.style.transform = "translateY(-100px)"; // Translate the error message up
        } else {
            // Clear any previous error message
            errorMessage.textContent = "";
            errorMessage.style.transform = "translateY(0)"; // Reset the error message position
            
        // Access the form fields and their values
        const formData = new FormData(consultationForm);
        // Append the doctor's name to the form data
        formData.append('uniqueKey', uniqueKey);

        // Convert form data to a JavaScript object
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Save the form data to localStorage
        localStorage.setItem(uniqueKey, JSON.stringify(formDataObject));

        // You can now submit the formData to your server or process it as needed
        console.log('Form Data:', formData);
        // Close the consultation form
        consultationPopup.style.display = 'none';
        overlay.style.display = 'none';

        // Clear the form fields after submission if needed
        consultationForm.reset();
        }
    });

        // Add an event listener to close the consultation form
        const closeButton = consultationPopup.querySelector('#close-consultation-popup');
        closeButton.addEventListener('click', () => {
            consultationPopup.style.display = 'none'; // Close the popup
            overlay.style.display = 'none';
            // Clear any previous error message
            errorMessage.textContent = "";
            errorMessage.style.transform = "translateY(0)"; // Reset the error message position
        });
}

// Generate and append doctor cards to the container
const doctorsContainer = document.querySelector('.container-doctors');
specialists.forEach((specialist) => {
    const card = createContactCard(specialist);
    doctorsContainer.appendChild(card);
});

// Function to generate a random alphanumeric string of a given length
function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
    }
    return randomString;
}