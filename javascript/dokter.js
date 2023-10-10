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
    {
        name: 'Dr. Linda Anderson Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '33 tahun',
        rating: '87%',
        price: 'Rp. 155.000',
    },
    {
        name: 'Dr. Michael Brown Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '36 tahun',
        rating: '91%',
        price: 'Rp. 160.000',
    },
    {
        name: 'Dr. Emily Clark Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '31 tahun',
        rating: '89%',
        price: 'Rp. 145.000',
    },
    {
        name: 'Dr. William Davis Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '43 tahun',
        rating: '94%',
        price: 'Rp. 165.000',
    },
    {
        name: 'Dr. John Evans Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '39 tahun',
        rating: '88%',
        price: 'Rp. 155.000',
    },
    {
        name: 'Dr. Melissa Foster Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '47 tahun',
        rating: '92%',
        price: 'Rp. 160.000',
    },
    {
        name: 'Dr. David Green Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '34 tahun',
        rating: '89%',
        price: 'Rp. 145.000',
    },
    {
        name: 'Dr. Sarah Hill Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '37 tahun',
        rating: '93%',
        price: 'Rp. 150.000',
    },
    {
        name: 'Dr. Jennifer Lee Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '41 tahun',
        rating: '91%',
        price: 'Rp. 155.000',
    },
    {
        name: 'Dr. Christopher Miller Sp. OG',
        specialist: 'Dokter Kandungan',
        experience: '44 tahun',
        rating: '90%',
        price: 'Rp. 160.000',
    },
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

    // Set the doctor's name in the form
    const doctorNameField = consultationPopup.querySelector('#doctor-name');
    doctorNameField.textContent = doctorName;

    // Handle form submission
    const consultationForm = consultationPopup.querySelector('#consultation-form');
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get form input values
        const Nama = consultationForm.elements['nama'].value.trim();
        const Keluhan = consultationForm.elements['Riwayat Penyakit'].value.trim();
        const Usia_Kehamilan = consultationForm.elements['usiaKehamilan'].value.trim();
        const Riwayat_Penyakit = consultationForm.elements['Keluhan'].value.trim();
        const Pembayaran_Via = consultationForm.elements['pembayaranVia'].value.trim();

        // Create a JavaScript object with the form data
        const formData = {
            Nama,
            Keluhan,
            Usia_Kehamilan,
            Riwayat_Penyakit,
            Pembayaran_Via,
        };

        // Convert formData to a JSON string
        const formDataJSON = JSON.stringify(formData);

        // Make an HTTP POST request to your endpoint
        fetch('https://be-palembang-26.up.railway.app/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formDataJSON
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server, if needed
            console.log('Response from server:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        // Close the consultation form
        consultationPopup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Add an event listener to close the consultation form
    const closeButton = consultationPopup.querySelector('#close-consultation-popup');
    closeButton.addEventListener('click', () => {
        consultationPopup.style.display = 'none';
        overlay.style.display = 'none';
    });
}


// Generate and append doctor cards to the container
const doctorsContainer = document.querySelector('.container-doctors');
specialists.forEach((specialist) => {
    const card = createContactCard(specialist);
    doctorsContainer.appendChild(card);
});