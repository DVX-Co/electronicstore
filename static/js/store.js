document.querySelector('.cart-btns a[href="/checkout/"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Usamos la API History para cambiar la URL
    window.history.pushState({}, '', '/checkout');
    
    // Cargamos el contenido dinámicamente
    fetch('./store_filescheckout.html')
        .then(response => response.text())
        .then(html => {
            // Reemplazamos todo el documento
            document.documentElement.innerHTML = html;
            
            // Actualizamos el título de la página
            document.title = "Checkout | Tu Tienda";
            
            // Forzar recarga de estilos (opcional)
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => link.href = link.href.split('?')[0] + '?' + Date.now());
        })
        .catch(error => {
            console.error('Error cargando checkout:', error);
            window.location.href = 'checkout.html'; // Fallback
        });
});

// document.querySelector('.cart-btns a[href="/product/"]').addEventListener('click', function(e) {
//     e.preventDefault();
    
//     // Usamos la API History para cambiar la URL
//     window.history.pushState({}, '', '/product');
    
//     // Cargamos el contenido dinámicamente
//     fetch('./store_filesproduct.html')
//         .then(response => response.text())
//         .then(html => {
//             // Reemplazamos todo el documento
//             document.documentElement.innerHTML = html;
            
//             // Actualizamos el título de la página
//             document.title = "Producto | Tu Tienda";
            
//             // Forzar recarga de estilos (opcional)
//             const links = document.querySelectorAll('link[rel="stylesheet"]');
//             links.forEach(link => link.href = link.href.split('?')[0] + '?' + Date.now());
//         })
//         .catch(error => {
//             console.error('Error cargando product:', error);
//             window.location.href = 'product.html'; // Fallback
//         });
// });

document.querySelector('.main-nav a[href="/store/"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Usamos la API History para cambiar la URL
    window.history.pushState({}, '', '/store');
    
    // Cargamos el contenido dinámicamente
    fetch('./store_filesstore.html')
        .then(response => response.text())
        .then(html => {
            // Reemplazamos todo el documento
            document.documentElement.innerHTML = html;
            
            // Actualizamos el título de la página
            document.title = "Tienda | Tu Tienda";
            
            // Forzar recarga de estilos (opcional)
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => link.href = link.href.split('?')[0] + '?' + Date.now());
        })
        .catch(error => {
            console.error('Error cargando store:', error);
            window.location.href = 'store.html'; // Fallback
        });
});

document.querySelector('.wishlist a[href="/wishlist/"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Usamos la API History para cambiar la URL
    window.history.pushState({}, '', '/wishlist');
    
    // Cargamos el contenido dinámicamente
    fetch('./store_fileswishlist.html')
        .then(response => response.text())
        .then(html => {
            // Reemplazamos todo el documento
            document.documentElement.innerHTML = html;
            
            // Actualizamos el título de la página
            document.title = "Deseados | Tu Tienda";
            
            // Forzar recarga de estilos (opcional)
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => link.href = link.href.split('?')[0] + '?' + Date.now());
        })
        .catch(error => {
            console.error('Error cargando wishlist:', error);
            window.location.href = 'wishlist.html'; // Fallback
        });
});

document.querySelector('.header-links a[href="/login/"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Usamos la API History para cambiar la URL
    window.history.pushState({}, '', '/login');
    
    // Cargamos el contenido dinámicamente
    fetch('./admin_fileslogin.html')
        .then(response => response.text())
        .then(html => {
            // Reemplazamos todo el documento
            document.documentElement.innerHTML = html;
            
            // Actualizamos el título de la página
            document.title = "Acceder | Tu Tienda";
            
            // Forzar recarga de estilos (opcional)
            const links = document.querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => link.href = link.href.split('?')[0] + '?' + Date.now());
        })
        .catch(error => {
            console.error('Error cargando login:', error);
            window.location.href = 'login.html'; // Fallback
        });
});

// Manejar el botón "Atrás" del navegador
// window.addEventListener('popstate', () => {
//     location.reload();
// });