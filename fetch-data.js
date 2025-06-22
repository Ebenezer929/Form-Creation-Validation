// Asynchronous function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a list element for users
        const userList = document.createElement('ul');
        
        // Loop through each user and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle any errors that occur during fetching
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
