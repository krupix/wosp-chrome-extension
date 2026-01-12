document.addEventListener('DOMContentLoaded', async () => {
  const loader = document.getElementById('loader');
  const result = document.getElementById('result');
  const amountEl = document.getElementById('amount');
  const errorEl = document.getElementById('error');

  try {
    const response = await fetch('https://www.wosp.org.pl/');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Try to find the mobile version first as it's easier to scrape
    let amountText = '';
    const mobileNumbers = doc.querySelector('.own-text-numbers-mobile .numbers');
    
    if (mobileNumbers) {
      amountText = mobileNumbers.textContent.replace('PLN', '').trim();
    } else {
      // Fallback to desktop version if mobile is not found
      const desktopNumbers = doc.querySelectorAll('.own-text-numbers .numbers .number');
      if (desktopNumbers.length > 0) {
        desktopNumbers.forEach(num => {
          const val = num.getAttribute('data-number');
          if (val !== null) amountText += val;
        });
      }
    }

    if (amountText) {
      // Format with spaces for readability if it's just a raw string of digits
      if (/^\d+$/.test(amountText.replace(/\s/g, ''))) {
        const raw = amountText.replace(/\s/g, '');
        amountEl.textContent = Number(raw).toLocaleString('pl-PL');
      } else {
        amountEl.textContent = amountText;
      }
      
      loader.classList.add('hidden');
      result.classList.remove('hidden');
    } else {
      throw new Error('Could not find amount on page');
    }
  } catch (error) {
    console.error('Scraping error:', error);
    loader.classList.add('hidden');
    errorEl.classList.remove('hidden');
  }
});
