let menu = document.getElementById('menu');
let lines = document.getElementById('lines');
let mobile_menu = document.getElementById( 'show' );
mobile_menu.addEventListener( "click" , () => menu.classList.toggle( 'toggled' ));
mobile_menu.addEventListener( "click" , () => lines.classList.toggle( 'toggled_lines' ));