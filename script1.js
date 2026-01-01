        /* --- JAVASCRIPT FEATURES --- */
        const contactForm = document.getElementById('contactForm');
        const statusDiv = document.getElementById('status');
        const submitBtn = document.getElementById('submitBtn');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 1. Loading State
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // 2. Simulate Form Submission (Replace with your actual API call)
            setTimeout(() => {
                const name = document.getElementById('name').value;
                
                // Show Success Message
                statusDiv.style.display = 'block';
                statusDiv.style.color = '#4ade80'; // Success green
                statusDiv.innerText = `Thanks, ${name}! I'll get back to you soon.`;

                // Reset Form
                contactForm.reset();
                submitBtn.innerText = 'Send Message';
                submitBtn.disabled = false;

                // Hide message after 5 seconds
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 5000);
            }, 1500);
        });

        // Interactive "Focus" effect for background
        document.body.addEventListener('mousemove', (e) => {
            const amount = 5;
            const x = (e.clientX / window.innerWidth) * amount;
            const y = (e.clientY / window.innerHeight) * amount;
            document.querySelector('.container').style.transform = `translate(${x}px, ${y}px)`;
        });