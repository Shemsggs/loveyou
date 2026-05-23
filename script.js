const decryptBtn = document.getElementById('decryptBtn');
const messageContainer = document.getElementById('messageContainer');
const statusText = document.querySelector('.status');
const textHeart = document.getElementById('textHeart');

const secretText = 'LOVE YOU.';
const phrase = 'i love you so much';
const phraseUnit = `${phrase} `;

const heartPattern = [
  '   111111   111111   ',
  '  11111111 11111111  ',
  ' 111111111111111111 ',
  '11111111111111111111',
  '11111111111111111111',
  '11111111111111111111',
  '11111111111111111111',
  '11111111111111111111',
  ' 111111111111111111 ',
  '  1111111111111111  ',
  '   11111111111111   ',
  '    111111111111    ',
  '     1111111111     ',
  '      11111111      ',
  '       111111       ',
  '        1111        ',
  '         11         '
];

function buildTextHeart() {
  const lines = heartPattern.map(row => {
    return row
      .split('')
      .map(ch => (ch === '1' ? phraseUnit : ' '.repeat(phraseUnit.length)))
      .join('');
  });
  textHeart.textContent = lines.join('\n');
}

function revealMessage() {
  statusText.textContent = '[system] Decryption complete. Message unlocked.';
  buildTextHeart();
  messageContainer.classList.remove('hidden');
  setTimeout(() => {
    messageContainer.classList.add('visible');
  }, 50);
}

decryptBtn.addEventListener('click', () => {
  decryptBtn.disabled = true;
  decryptBtn.textContent = 'DECRYPTING...';
  statusText.textContent = '[system] Decrypting your package. Please wait ...';
  setTimeout(() => {
    decryptBtn.textContent = secretText;
    decryptBtn.classList.add('unlocked');
    revealMessage();
  }, 1200);
});
