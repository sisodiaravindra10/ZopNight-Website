/* ============================================================================
   chrome-darkfold.js
   ----------------------------------------------------------------------------
   Marks subpage hero headers as dark-themed by setting the
   `data-theme="dark"` attribute. Triggers the scoped CSS dark tokens
   defined in homepage-chrome.css so the descendant elements pick up dark
   `--paper`, `--ink`, `--g-*`, `--line` automatically via the cascade.

   Targets:
   - `.page-head`        · standard subpage hero (about, careers, contact, etc.)
   - `.pi-head`          · playground-ideas test bench page-head
   - `.fp-head`          · features.html page-head
   - `.ds-pagehead`      · design-system.html page-head

   Explicitly NOT touched:
   - The homepage `.hero` (paper-tuned for the globe canvas backdrop)
   - Anything inside the brand-kit tool (its own dark UI)

   Skips when the user has `prefers-reduced-motion: reduce` set? · No,
   that's a motion preference, not a contrast preference. Dark-fold is
   purely visual, not motion.
   ============================================================================ */
(function(){
  /* Run as soon as we can find the elements · IO-style, no DOMContentLoaded
     wait needed since this script is loaded with `defer`. */
  var sel = '.page-head, .pi-head, .fp-head, .ds-pagehead';
  document.querySelectorAll(sel).forEach(function(el){
    /* Only mark if not already themed (so a page can opt out by setting
       data-theme="light" explicitly). */
    if(el.hasAttribute('data-theme')) return;
    el.setAttribute('data-theme', 'dark');
  });
})();
