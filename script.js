document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('li'); // Get the closest product element
        const productImage = productElement.querySelector('img').src;
        const productDescription = productElement.querySelector('h5').innerText;
        
        // Populate modal content
        document.getElementById('modalImage').src = productImage;
        document.getElementById('modalDescription').innerText = productDescription;

        // Show modal
        document.getElementById('productModal').style.display = 'block';
    });
});

// Close modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('productModal').style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
