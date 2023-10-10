function fetchUserData(userData) {
    const backendUrl = 'https://your-backend-url.railway.app/user'; // Replace with your actual backend URL
  
    fetch(backendUrl, {
      method: 'POST', // Use the appropriate HTTP method (POST in this case)
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Replace with the data you want to send in the request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('User data:', data);
        // Handle the user data as needed
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // Example usage:
  const userData = {
    email: 'example@example.com',
    password: 'password123',
    confirm_Password: 'password123',
    username: 'example_user',
  };
  
  fetchUserData(userData);
  