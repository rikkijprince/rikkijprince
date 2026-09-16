---
layout: default
title: RJ Academy
description: Communicative English classes, online and in person, for students in the province of Castellón.
permalink: /rj-academy/
lang: en
---

# RJ Academy

## English for communicating clearly in the real world

RJ Academy offers **online and in-person English classes** for people in the province of Castellón who want to use English with greater naturalness, confidence and precision.

The objective is not simply to study more grammar or learn more vocabulary. The objective is to **communicate**: to understand other people, express yourself clearly, react spontaneously and develop the confidence needed to use English outside the classroom.

## A communicative method

Classes are based primarily on the **communicative method**. From the beginning, students use English to speak, listen, ask questions, explain, describe, solve problems and maintain real conversations.

Grammar and vocabulary are worked on when they help improve communication. The class is not about memorising lists of words or translating sentences mechanically: it is about learning to use the language as a living tool.

## Special attention to pronunciation

An important part of the work is **pronunciation and listening comprehension**.

English spoken around the world has a great variety of accents. In the classes, particular attention is paid to both **British and American English**, so that students can recognise and use the fundamental characteristics of both.

My own linguistic background is one of the reasons I place so much importance on this: **my mother is British and my father is American**. I therefore grew up with both major English pronunciation traditions present in my family environment.

However, I do not consider it necessary to choose between them.

## World English

My personal preference is what I call **World English**: clear, natural and flexible English that can be understood easily anywhere in the world.

This means learning to speak in a way that makes pronunciation, rhythm, vocabulary and expressions facilitate communication with people from different countries, without needing to imitate a single national accent perfectly.

The objective is for students to be able to speak with a British person, an American, a German, a Japanese person, a Mexican or any other international speaker and be understood easily; and, at the same time, to understand the different forms of English they will encounter in real life.

## How much time?

To achieve good results, I recommend **two hours of class per week**, ideally distributed as part of a regular routine.

Continuity is important: learning a language is not simply a matter of accumulating knowledge, but of developing comprehension and production habits that become increasingly automatic through practice.

Classes can be organised **online or in person**, according to the student's needs and circumstances.

## Prices

Prices depend on the type of class and how the sessions are organised. **Contact me directly for current options and prices.**

<div class="contact-box">
  <h2>Contact</h2>
  <p>If you would like information about classes, schedules or prices, you can send me a message directly from here.</p>

  <form id="rj-contact-form">
    <label for="contact-name">Name</label>
    <input id="contact-name" name="name" type="text" autocomplete="name" required>

    <label for="contact-email">Your email address</label>
    <input id="contact-email" name="email" type="email" autocomplete="email" required>

    <label for="contact-message">Message</label>
    <textarea id="contact-message" name="message" rows="6" required></textarea>

    <button type="submit">Send message</button>
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
    var subject = encodeURIComponent('Enquiry about RJ Academy');
    var body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email: ' + email + '\n\n' +
      message
    );

    window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
  });
})();
</script>
