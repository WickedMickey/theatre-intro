<script>
  // Define the order of frames to display
  const frameOrder = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'lobby1'];
  let currentFrame = 0;

  // Frame transition times (in milliseconds)
  const transitionSchedule = [
    1120,  // frame2 appears at 1s12f
    2266,  // frame3 at 2s17f
    4111,  // frame4 at 4s11f
    8060   // lobby1 at 8s6f
  ];

  // Crossfade from current frame to next frame
  function showNextFrame() {
    const currentId = frameOrder[currentFrame];
    const nextId = frameOrder[currentFrame + 1];

    const currentEl = document.getElementById(currentId);
    const nextEl = document.getElementById(nextId);

    if (currentEl && nextEl) {
      // Start fading in the next frame below
      nextEl.classList.add('visible');

      // Then fade out the current frame after 1 second (match transition duration)
      setTimeout(() => {
        currentEl.classList.remove('visible');
      }, 1000); // This must match your CSS fade duration

      currentFrame++;
    }
  }

  // Begin the sequence on click
  function startSequence() {
    document.getElementById('introMusic').play();
    showNextFrame(); // Start the first transition manually

    // Schedule each subsequent frame transition
    transitionSchedule.forEach((delay, index) => {
      setTimeout(showNextFrame, delay);
    });
  }

  // Set up click trigger
  document.getElementById('ticket').addEventListener('click', startSequence);
</script>