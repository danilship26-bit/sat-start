// Small synthesized interface sounds. No external audio files or network requests.
(() => {
  const key = 'sat-start-sound';
  let enabled = localStorage.getItem(key) !== 'off';
  let audio;
  function tone(frequency, duration, wave = 'sine', volume = .045, delay = 0) {
    if (!enabled) return;
    try {
      audio ??= new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      const start = audio.currentTime + delay;
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = wave;
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(.001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + .012);
      gain.gain.exponentialRampToValueAtTime(.001, start + duration);
      oscillator.connect(gain).connect(audio.destination);
      oscillator.start(start);
      oscillator.stop(start + duration + .01);
    } catch (_) { /* The course works when audio is unavailable. */ }
  }
  const sound = {
    tap: () => tone(520, .065, 'sine', .025),
    correct: () => { tone(590, .12); tone(790, .18, 'sine', .04, .105); },
    wrong: () => { tone(310, .14, 'triangle', .035); tone(250, .2, 'triangle', .025, .11); },
    finish: () => { tone(520, .1); tone(660, .12, 'sine', .04, .11); tone(880, .25, 'sine', .04, .23); }
  };
  const originalShell = shell;
  shell = function (body) {
    originalShell(body);
    const actions = document.querySelector('.top-actions');
    if (!actions) return;
    const button = document.createElement('button');
    button.className = 'sound-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', enabled ? 'Mute sounds' : 'Enable sounds');
    button.setAttribute('title', enabled ? 'Mute sounds' : 'Enable sounds');
    button.textContent = enabled ? '♫' : '♪̸';
    button.onclick = () => {
      enabled = !enabled;
      localStorage.setItem(key, enabled ? 'on' : 'off');
      button.textContent = enabled ? '♫' : '♪̸';
      button.setAttribute('aria-label', enabled ? 'Mute sounds' : 'Enable sounds');
      button.setAttribute('title', enabled ? 'Mute sounds' : 'Enable sounds');
      if (enabled) sound.tap();
    };
    actions.prepend(button);
  };
  document.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || button.classList.contains('sound-toggle') || button.disabled) return;
    if (button.id === 'check') {
      setTimeout(() => {
        if (document.querySelector('.feedback.good')) sound.correct();
        else if (document.querySelector('.feedback.bad')) sound.wrong();
      }, 0);
    } else if (button.id === 'submit' || button.id === 'advance') {
      sound.finish();
    } else sound.tap();
  });
  render();
})();
