---
layout: default
title: RJ Academy
description: Communicative English classes, online and in person, for students in the province of Castellón.
permalink: /rj-academy/
lang: en
---

# RJ Academy

## English for communicating clearly in the real world

RJ Academy offers **personal English fluency training** in online sessions for anyone with a stable Internet connection **anywhere in the World**.

The objective is not simply to study more grammar or learn more vocabulary. The objective is to **communicate**: to understand other people, express yourself clearly, react spontaneously and develop the confidence needed to use English outside the classroom. I also coach CEOs and technological professionals around the world who need to communicate technology and motivate teams.

## A communicative method

Classes are based primarily on the **communicative method**. From the beginning, students use English to speak, listen, ask questions, explain, describe, solve problems and maintain real conversations.

Grammar and vocabulary are worked on when they help improve communication. The class is not about memorising lists of words or translating sentences mechanically: it is about learning to use the language as a living tool.

## Special attention to pronunciation

An important part of the work is **pronunciation and listening comprehension**.

English spoken around the world has a great variety of accents. In the classes, particular attention is paid to both **British and American English**, so that students can recognise and use the fundamental characteristics of both.

My own linguistic background is one of the reasons I place so much importance on this: **my mother is British and my father is American**. I therefore grew up with both major English pronunciation traditions present in my family environment.

However, I do not consider it necessary to choose between them.

## International English

We teach you to use **ELF/EIL** for speaking: a clear, natural and flexible English that can be understood easily anywhere in the world, and **Oxford Spelling**, the spelling convention used for international publications like **Nature** or internation organisms like the **United Nations**, for writing.

This will give you pronunciation, rhythm, vocabulary and expressions that facilitate communication with people from different countries, without needing to imitate a single national accent perfectly.

The objective is for students to be able to speak with Engglish speakers from the UK, the USA, Canada, Australia, New Zaland, India, South Africa, Scandinavia, Eastern Europe, Arab countries, Asian countries... any international speaker who uses English as a means of communication and to understand the different forms of English they will encounter in real life.

## Modules for companies, professionals and ambitious students

**Module 01 – Basic English for Workers (20 hours)**
Essential vocabulary, grammar and communication skills for everyday workplace situations. Introducing yourself, understanding instructions, asking questions, describing tasks, communicating with colleagues and handling simple work-related conversations.

**Module 02 – English in the Workplace (20 hours)**
Communicating effectively in professional environments, including giving and receiving instructions, discussing work schedules, reporting problems, interacting with colleagues, participating in workplace discussions and understanding company procedures.

**Module 03 – Technical English (20 hours)**
Developing the vocabulary and communication skills needed to explain technical concepts, describe equipment and processes, interpret specifications, follow technical instructions, identify faults and discuss technical problems and solutions.

**Module 04 – Business English (20 hours)**
Essential language and communication skills for international business environments. Discussing business activities, presenting products and services, communicating with clients, handling commercial correspondence and participating in professional discussions.

**Module 05 – English for Negotiating (20 hours)**
Developing the language and strategies required for successful negotiations. Making proposals, discussing prices and conditions, expressing agreement and disagreement, handling objections, resolving conflicts and reaching mutually beneficial agreements.

**Module 06 – English for Publishing (20 hours)**
Developing the language skills required in the publishing industry, including discussing manuscripts, editing and proofreading, evaluating written material, communicating with authors and publishers, preparing submissions and understanding publishing terminology.

**Module 07x – English Fluency (A1–C2, 40 hours per stage)**
Progressive development of spoken and written English from beginner to proficient levels. Improving vocabulary, grammar, pronunciation, listening comprehension, conversational confidence and the ability to communicate naturally and effectively in increasingly complex situations.

**Module 08 – English for Meetings and Conference Calls (20 hours)**
Participating in meetings, expressing opinions, interrupting politely, clarifying misunderstandings, agreeing and disagreeing, chairing meetings and following up on decisions.

**Module 09 – English for Presentations and Public Speaking (20 hours)**
Preparing and delivering presentations, explaining data, describing graphs, structuring arguments, handling questions and speaking confidently before international audiences.

**Module 10 – English for Customer Service and Support (20 hours)**
Handling enquiries, complaints, telephone calls, customer problems, after-sales support, refunds and difficult conversations.

**Module 11 – English for International Sales and Marketing (20 hours)**
Prospecting, presenting products and services, communicating commercial advantages, understanding customer requirements, developing relationships and closing sales.

**Module 12 – English for Professional Correspondence (20 hours)**
Writing effective emails, reports, internal communications, proposals, enquiries, instructions and formal letters. Appropriate tone, clarity and professional vocabulary.

**Module 13 – English for Project Management (20 hours)**
Discussing objectives, allocating responsibilities, setting deadlines, monitoring progress, reporting problems, managing changes and coordinating international teams.

**Module 14 – English for Leadership and Management (20 hours)**
Giving instructions, delegating responsibilities, motivating employees, providing feedback, conducting performance reviews, resolving workplace conflicts and managing teams.

**Module 15 – English for Logistics and Supply Chain Management (20 hours)**
Communicating with suppliers, discussing orders, arranging deliveries, managing shipping documentation, dealing with delays, discussing stock and coordinating international transportation.

**Module 16 – English for Engineering and Manufacturing (20 hours)**
Discussing production processes, machinery, specifications, quality control, maintenance, faults, technical procedures and manufacturing problems.

**Module 17 – English for Job Interviews and Career Development (20 hours)**
Preparing CVs, answering interview questions, describing professional experience, discussing qualifications, communicating strengths and weaknesses and developing professional networks.

**Module 18 – English for International and Cross-Cultural Communication (20 hours)**
Understanding cultural differences, professional etiquette, communication styles, misunderstandings, international collaboration and working with multicultural teams.

**Module 19 – English for Digital Technology and Artificial Intelligence (20 hours)**
Understanding AI terminology, communicating with digital tools, writing effective prompts, discussing software, explaining digital processes and evaluating AI-generated information in English.

**Module 20 – English for Healthcare and Medical Professionals (20 hours)**
Medical terminology, communicating with patients, explaining procedures, discussing symptoms, reading medical documentation and communicating with international healthcare professionals.

**Module 21 – English for Social Media Videos and Podcasts (20 hours)**
Developing the language and communication skills needed to create engaging English-language videos and podcasts. Writing scripts, preparing introductions, presenting ideas, storytelling, interviewing guests, recording voiceovers, developing an authentic speaking style and communicating effectively with online audiences.


## Contact

<div class="contact-box">
  <h2>Contact RJ</h2>
  <p>Send me a message directly from here.</p>

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

    var recipient = ['rjpxpr', '@', 'gmail', '.', 'com'].join('');
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
