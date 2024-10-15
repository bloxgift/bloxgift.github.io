document.getElementById('verifyBtn1').addEventListener('click', function () {
    verifyAndRedirect(this, 'https://example-link1.com');
});

document.getElementById('verifyBtn2').addEventListener('click', function () {
    verifyAndRedirect(this, 'https://example-link2.com');
});

document.getElementById('verifyBtn3').addEventListener('click', function () {
    verifyAndRedirect(this, 'https://example-link3.com');
});

function verifyAndRedirect(button, url) {
    button.classList.add('loading');
    let loadingSpinner = document.createElement('div');
    loadingSpinner.className = 'loading-circle';
    button.appendChild(loadingSpinner);

    // Simulate verification delay
    setTimeout(() => {
        // Open the URL in a new tab
        window.open(url, '_blank');
        button.classList.remove('loading'); // Remove loading state after redirection
        loadingSpinner.remove(); // Clean up the spinner after redirection
    }, 3000);  // 3 seconds delay
}
