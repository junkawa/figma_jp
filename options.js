/* TODO
  chrome.i18n.getAcceptLanguages(function(langs){
  if (langs.indexOf('ja') >= 0){
  }
  });
*/
const defautLanguage = 'ja';

// Saves options to chrome.storage
function saveOptions() {
  const lang = document.getElementById('lang').value;
  chrome.storage.local.set({
    language: lang,
  }, function() {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  chrome.storage.local.get({
    language: defautLanguage,
  }, function(items) {
    document.getElementById('lang').value = items.language;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
    saveOptions);
