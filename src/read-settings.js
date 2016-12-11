module.exports = readSettings;

function readSettings(container) {
  var settings = {};

  settings.comicId = container.getAttribute('data-comichron-comic-id');
  settings.theme = container.getAttribute('data-comichron-theme') || 'dark';

  return settings;
}
