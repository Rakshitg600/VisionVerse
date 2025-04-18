document.addEventListener('DOMContentLoaded', function() {
    const viewMapBtn = document.querySelector('.view-map-btn');
    const mapIframe = document.querySelector('.map-iframe');

    viewMapBtn.addEventListener('click', () => {
        if (mapIframe.style.display === 'none') {
            mapIframe.style.display = 'block';
            viewMapBtn.textContent = 'Hide Map';
        } else {
            mapIframe.style.display = 'none';
            viewMapBtn.textContent = 'View Map';
        }
    });
});
