/* TODO
  chrome.i18n.getAcceptLanguages(function(langs){
  if (langs.indexOf('ja') >= 0){
  }
  });
*/
const defautLanguage = 'ja';

// Saves options to chrome.storage
function save_options() {
    var lang = document.getElementById('lang').value;
    chrome.storage.local.set({
        language: lang,
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.local.get({
        language: defautLanguage,
    }, function (items) {
        document.getElementById('lang').value = items.language;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
