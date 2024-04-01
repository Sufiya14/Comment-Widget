// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const dataContainer = document.getElementById('data-container');
  
    fetchButton.addEventListener('click', async () => {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        displayData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  
    function displayData(data) {
      dataContainer.innerHTML = ''; // Clear previous data
      data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`;
        dataContainer.appendChild(itemElement);
      });
    }
  });
  