<script src="/js/main.js"></script>
<script src="/js/mobile-navbar.js"></script>
<script src="/js/script.js"></script>

<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
(function(){
    emailjs.init("ndeBfkhxNIPAxYoQS");
})();

document.getElementById('fcf-form-id')?.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_5svo1wn', 'template_l85wql8', this)
        .then(() => alert('Email sent successfully!'))
        .catch(() => alert('Failed to send email.'));
});
</script>

</body>
</html>
