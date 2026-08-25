if ('HTMLInstallElement' in window) {
    const installElements = document.querySelectorAll('install');

    installElements.forEach((button) => {
        button.addEventListener('installresult', (event) => {
            const label = button.id || button.getAttribute('manifest') || 'same-origin';
            console.log(`Install ${event.result}: ${label}`);
        });
    });
} else {
    console.warn('HTMLInstallElement not supported');
}
