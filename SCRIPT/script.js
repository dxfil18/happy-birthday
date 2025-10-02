/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgAudio');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');

  // Prova a partire subito e togli mute
  audio.play().then(() => {
    audio.muted = false;
  }).catch(() => {
    console.warn("Autoplay bloccato: premi Play per avviare la musica.");
  });

  // Play button
  playBtn.addEventListener('click', async () => {
    audio.muted = false;
    try {
      await audio.play();
    } catch (err) {
      console.error("Errore nel play:", err);
    }
  });

  // Pause button
  pauseBtn.addEventListener('click', () => {
    audio.pause();
  });
});
