const BASE_URL = 'https://api.example.com'; // Ganti dengan URL API yang sesuai

const ApiService = {
  // Fungsi untuk melakukan GET request ke API
  get: async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Tambahkan header lain jika diperlukan
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  },

  // Fungsi untuk melakukan POST request ke API
  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Tambahkan header lain jika diperlukan
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  },

  // Fungsi untuk melakukan DELETE request ke API
  delete: async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Tambahkan header lain jika diperlukan
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  },

  // Fungsi untuk melakukan PUT request ke API
  put: async (endpoint, data) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Tambahkan header lain jika diperlukan
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  },
};

export default ApiService;
