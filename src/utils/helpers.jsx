// Fungsi untuk format angka ke mata uang Rupiah
export const formatCurrency = (amount) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  };
  
  // Fungsi untuk mengonversi waktu dalam format ISO menjadi format tanggal yang dibaca manusia
  export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  // Fungsi untuk mengonversi waktu dalam format ISO menjadi format waktu yang dibaca manusia
  export const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  // Fungsi untuk meng-generate kode acak, misalnya untuk kode transaksi atau token
  export const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  