function submitReservation() {
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
  
    // Aquí puedes hacer lo que quieras con la información de la reserva, como enviarla a un servidor o mostrarla en la página.
    console.log('Fecha de check-in:', checkinDate);
    console.log('Fecha de check-out:', checkoutDate);
    console.log('Adultos:', adults);
    console.log('Niños:', children);
  
    // Aquí puedes agregar la lógica adicional que necesites para procesar la reserva.
  }
  
  function checkAvailability() {
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
  
    const baseUrl = 'https://example.com/reservation?';
    const queryParams = `checkin=${checkinDate}&checkout=${checkoutDate}&adults=${adults}&children=${children}`;
    const url = baseUrl + queryParams;
  
    // Abre una nueva pestaña del navegador con la URL construida
    window.open(url, '_blank');
  }