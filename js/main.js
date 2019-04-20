$(document).ready(function() {

  // Slider
  if (window.location.href.indexOf('index') > -1) {
    $('.slider').bxSlider({
      mode: 'fade',
      captions: true,
      auto: true
    });
  }

// posts
  if (window.location.href.indexOf('index') > -1) {

    let posts = [
      {
        title: 'Titulo de prueba 1',
        date: 'Publicado el dia ' + moment().date() + ' de ' +  moment().format('MMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Titulo de prueba 2',
        date: 'Publicado el dia ' + moment().date() + ' de ' +  moment().format('MMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Titulo de prueba 3',
        date: 'Publicado el dia ' + moment().date() + ' de ' +  moment().format('MMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Titulo de prueba 4',
        date: 'Publicado el dia ' + moment().date() + ' de ' +  moment().format('MMM') + ' del ' + moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    ];
  
    posts.forEach((item) => {
      let post = `
      <article class="articulo">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="read-more">Leer Más</a>
      </article>
      `;
  
      $('#posts').append(post);
    });
  }

  // cambiar temas

  let changeThemes = () => {
    let theme = $('#theme');
    if (localStorage.getItem('theme') == null || localStorage.getItem('theme') == './css/green.css') {
      theme.attr('href', './css/green.css');
    }
    else if (localStorage.getItem('theme') == './css/blue.css') {
      theme.attr('href', './css/blue.css');
    }
    else if (localStorage.getItem('theme') == './css/red.css') {
      theme.attr('href', './css/red.css');
    }
  };

  $('#to-blue').click(function(event) {
    localStorage.setItem('theme', './css/blue.css');
    changeThemes();
  });

  $('#to-green').click(function(event) {
    localStorage.setItem('theme', './css/green.css');
    changeThemes();
  });

  $('#to-red').click(function(event) {
    localStorage.setItem('theme', './css/red.css');
    changeThemes();
  });

changeThemes();

  // FIN de cambiar temas

  // boton de subir

  let button = $('#button');

  button.click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  button.hide();

  $(window).scroll(function(event) {
    if ($(this).scrollTop() > 300) {
      button.fadeIn('400');
    }
    else {
      button.fadeOut('400');
    }
  });
  // ALMACENAMIENTO DE DATOS DEL LOGIN
  $('#form').submit(function() {
    let userName = $('#username').val();
    localStorage.setItem('user', userName);
    let userPassword = $('#password').val();
    localStorage.setItem('password', userPassword);
  });
  if (localStorage.getItem('user') != null || localStorage.getItem('user') != undefined) {
    $('#login').html('<br><strong>Bienvenido: ' + localStorage.getItem('user') + '</strong>' );
    $('#login').append('<a href="#" id="logout">Cerrar Sesión</a>')
    $('#logout').click(function () {
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon 
  if (window.location.href.indexOf('about') > -1) {
  $('#acordeon').accordion();
  }

  // RELOJ
  if (window.location.href.indexOf('clock') > -1) {
    setInterval( function () {
      let reloj = moment().format('h:mm:ss a');
      $('#reloj').html(reloj);
    }, 1000);
  }

  // Validador de formulario
  if (window.location.href.indexOf('contact') > -1) {
    $('input[name="birth"]').datepicker({
      dateFormat: "dd/mm/yy",
      dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
      dayNamesMin: ["Do", "Lu", "Ma", "Mie", "Jue", "Vie", "Sa"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    });
    $.validate({
      lang: 'es'
    });
  }
});
