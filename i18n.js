/**
 * NISARG SHRISHTI - CENTRAL IMAGE REGISTRY WITH WATERCOLOR FALLBACKS
 */
const IMAGE_REGISTRY = {
  "hero-main": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
  "ostrich": "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=80",
  "aviary": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
  "apiculture": "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80",
  "goat-farm": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80",
  "polyhouse": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
  "aquarium": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
  "camping-night": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  "pottery": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  "kids-zone": "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80"
};

function handleImageError(img, slotName) {
  img.onerror = null;
  img.style.display = 'none';
  const parent = img.parentElement;
  if (parent) {
    const fallback = document.createElement('div');
    fallback.className = 'w-full h-full bg-gradient-to-br from-[#FCE7F0] via-[#FFF5F5] to-[#D2E3D4] flex flex-col items-center justify-center p-6 text-[#1C3F36] text-center rounded-3xl border border-[#D2E3D4]';
    fallback.innerHTML = `
      <svg class="w-12 h-12 mb-2 text-[#C86D51] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
      <span class="font-serif text-lg font-bold">${slotName}</span>
      <span class="text-xs opacity-75 mt-1">Nisarg Shrishti Farm Illustration</span>
    `;
    parent.appendChild(fallback);
  }
}
