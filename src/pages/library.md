---
title: Library
---
All the books that I have recently read are listed here.<br>
<i>Last updated Jan 2022.</i>

<script>
        function comparator(a, b) {
            if (a.dataset.subject < b.dataset.subject)
                return -1;
            if (a.dataset.subject > b.dataset.subject)
                return 1;
            return 0;
        }
          
        // Function to sort Data
        function SortData() {
            var subjects =
                document.querySelectorAll("[data-subject]");
            var subjectsArray = Array.from(subjects);
            let sorted = subjectsArray.sort(comparator);
            sorted.forEach(e =>
                document.querySelector("#list").
                    appendChild(e));
        }
    </script>




<button onclick="SortData()">
        Sort HTML elements by Data Attributes
    </button>
  
    



<div class="abook" data-subject="10" data-title="The Listening Book - by W.A. Mathieu" data-date="2021-09-03">
<figure><a href="/book/ListeningBook"><img src="https://alexvermeer.com/wp-content/uploads/behave.jpg" loading="lazy" alt="The Listening Book - by W.A. Mathieu"></a></figure>
<h2><a href="/book/ListeningBook">The Listening Book - by W.A. Mathieu</a></h2>
<small>Date read: 2021-09-03. How strongly I recommend it: <strong>10</strong>/10</small>
<p>Everyone should read this book of little essays about listening. It teaches your ears to pay more attention. It calls your attention to sounds you hadn’t noticed. It’s beautifully written, and makes your life better. I read it twice, 24 years ago, and reading it again this week, it was even better than I remembered.</p>
<p><strong><a href="/book/ListeningBook">Read my notes</a></strong>, or go to the <a href="https://www.amazon.com/s?k=9781590308318&amp;tag=sivers-20">Amazon page</a> for details and reviews.</p>
</div>


<div class="abook" data-subject="7" data-title="The Listening Book - by W.A. Mathieu" data-date="2021-09-03">
<figure><a href="/book/ListeningBook"><img src="https://alexvermeer.com/wp-content/uploads/behave.jpg" loading="lazy" alt="The Listening Book - by W.A. Mathieu"></a></figure>
<h2><a href="/book/ListeningBook">The Listening Book - by W.A. Mathieu</a></h2>
<small>Date read: 2021-09-03. How strongly I recommend it: <strong>10</strong>/10</small>
<p>Everyone should read this book of little essays about listening. It teaches your ears to pay more attention. It calls your attention to sounds you hadn’t noticed. It’s beautifully written, and makes your life better. I read it twice, 24 years ago, and reading it again this week, it was even better than I remembered.</p>
<p><strong><a href="/book/ListeningBook">Read my notes</a></strong>, or go to the <a href="https://www.amazon.com/s?k=9781590308318&amp;tag=sivers-20">Amazon page</a> for details and reviews.</p>
</div>

<div class="abook" data-subject="9" data-title="The Listening Book - by W.A. Mathieu" data-date="2021-09-03">
<figure><a href="/book/ListeningBook"><img src="https://alexvermeer.com/wp-content/uploads/behave.jpg" loading="lazy" alt="The Listening Book - by W.A. Mathieu"></a></figure>
<h2><a href="/book/ListeningBook">The Listening Book - by W.A. Mathieu</a></h2>
<small>Date read: 2021-09-03. How strongly I recommend it: <strong>10</strong>/10</small>
<p>Everyone should read this book of little essays about listening. It teaches your ears to pay more attention. It calls your attention to sounds you hadn’t noticed. It’s beautifully written, and makes your life better. I read it twice, 24 years ago, and reading it again this week, it was even better than I remembered.</p>
<p><strong><a href="/book/ListeningBook">Read my notes</a></strong>, or go to the <a href="https://www.amazon.com/s?k=9781590308318&amp;tag=sivers-20">Amazon page</a> for details and reviews.</p>
</div>