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

    return card;
}

// Get the container for contact cards
const containerContact = document.querySelector('.container-contact');

// Generate contact cards and append them to the container
specialists.forEach(specialist => {
    const contactCard = createContactCard(specialist);
    containerContact.appendChild(contactCard);
});
