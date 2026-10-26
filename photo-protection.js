// Discourage casual copying of portfolio photos without blocking page text.
(() => {
  const photos = '.archive-card, .gallery-frame.is-photo-card, .photo-focus-image, .folder-list-card, .folder-photo-card';
  const isPhoto = node => node instanceof Element && Boolean(node.closest(photos));
  for (const type of ['contextmenu', 'dragstart', 'selectstart']) {
    document.addEventListener(type, event => {
      if (isPhoto(event.target)) event.preventDefault();
    });
  }
  document.addEventListener('copy', event => {
    const selection = window.getSelection();
    // Leave ordinary selected text (including photo metadata) copyable.
    if (selection && !selection.isCollapsed && !isPhoto(selection.anchorNode?.parentElement)) return;
    if (isPhoto(event.target) || isPhoto(selection?.anchorNode?.parentElement) ||
        document.querySelector('.photo-focus-overlay[data-open="true"]') ||
        isPhoto(document.activeElement)) event.preventDefault();
  });
})();
