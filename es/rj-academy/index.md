---
layout: default
title: RJ Academy
description: Clases de inglés comunicativo, presenciales y online, para estudiantes de la provincia de Castellón.
permalink: /es/rj-academy/
lang: es
---

# RJ Academy

## Inglés para comunicarse con claridad en el mundo real

RJ Academy ofrece clases de inglés **online y presenciales** para personas de la provincia de Castellón que quieren utilizar el inglés con mayor naturalidad, seguridad y precisión.

El objetivo no es simplemente estudiar más gramática o aprender más vocabulario. El objetivo es **comunicarse**: comprender a otras personas, expresarse con claridad, reaccionar espontáneamente y desarrollar la confianza necesaria para utilizar el inglés fuera del aula.

## Un método comunicativo

Las clases se basan principalmente en el **método comunicativo**. Desde el principio, el alumno utiliza el inglés para hablar, escuchar, preguntar, explicar, describir, resolver problemas y mantener conversaciones reales.

La gramática y el vocabulario se trabajan cuando ayudan a mejorar esa comunicación. La clase no consiste en memorizar listas de palabras ni en traducir frases de manera mecánica: se trata de aprender a utilizar el idioma como una herramienta viva.

## Especial atención a la pronunciación

Una parte importante del trabajo es la **pronunciación y la comprensión oral**.

El inglés que se habla en el mundo presenta una gran variedad de acentos. En las clases prestamos especial atención tanto al **inglés británico como al americano**, para que el alumno pueda reconocer y utilizar las características fundamentales de ambos.

Mis propios antecedentes lingüísticos son una de las razones por las que doy tanta importancia a esta cuestión: **mi madre es británica y mi padre estadounidense**. He crecido, por tanto, con las dos grandes tradiciones de pronunciación del inglés presentes en mi entorno familiar.

Sin embargo, no considero necesario elegir entre ellas.

## World English

Mi preferencia personal es lo que llamo **World English**: un inglés claro, natural y flexible que pueda ser entendido fácilmente en cualquier parte del mundo.

Esto significa aprender a hablar de forma que la pronunciación, el ritmo, el vocabulario y las expresiones faciliten la comunicación con personas de diferentes países, sin necesidad de intentar imitar perfectamente un único acento nacional.

El objetivo es que el alumno pueda hablar con un británico, un estadounidense, un alemán, un japonés, un mexicano o cualquier otro hablante internacional y ser comprendido con facilidad; y, al mismo tiempo, que pueda entender las diferentes formas de inglés que encontrará en la vida real.

## ¿Cuánto tiempo?

Para obtener buenos resultados, recomiendo **dos horas de clase a la semana**, idealmente distribuidas en una rutina regular.

La continuidad es importante: aprender un idioma no consiste únicamente en acumular conocimientos, sino en desarrollar hábitos de comprensión y producción que se vuelven cada vez más automáticos mediante la práctica.

Las clases pueden organizarse **online o de forma presencial**, según las necesidades y circunstancias del alumno.

## Precios

Los precios dependen del tipo de clase y de la organización de las sesiones. **Consúltame directamente para conocer las opciones y precios actuales.**

<div class="contact-box">
  <h2>Contacto</h2>
  <p>Si quieres información sobre las clases, horarios o precios, puedes enviarme un mensaje directamente desde aquí.</p>

  <form id="rj-contact-form">
    <label for="contact-name">Nombre</label>
    <input id="contact-name" name="name" type="text" autocomplete="name" required>

    <label for="contact-email">Tu correo electrónico</label>
    <input id="contact-email" name="email" type="email" autocomplete="email" required>

    <label for="contact-message">Mensaje</label>
    <textarea id="contact-message" name="message" rows="6" required></textarea>

    <button type="submit">Enviar mensaje</button>
  </form>
</div>

<script>
(function () {
  var form = document.getElementById('rj-contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('contact-name').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    var recipient = ['me', '@', 'rikkijprince', '.', 'com'].join('');
    var subject = encodeURIComponent('Consulta sobre RJ Academy');
    var body = encodeURIComponent(
      'Nombre: ' + name + '\n' +
      'Correo: ' + email + '\n\n' +
      message
    );

    window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
  });
})();
</script>
