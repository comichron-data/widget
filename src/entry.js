var client = require('comichron-data-browser-client');

var styleElement = document.createElement('style');
styleElement.textContent = require('./style/styles.scss');
document.head.appendChild(styleElement);

var widgetSelector = '[data-comichron-comic-id]';

var widgetContainers = document.querySelectorAll(widgetSelector);
widgetContainers = Array.prototype.slice.call(widgetContainers);

widgetContainers.forEach(function(widgetContainer) {
  var comicId = widgetContainer.getAttribute('data-comichron-comic-id');

  if (!comicId) {
    console.error('No comic id specified on', widgetContainer);
  } else {
    client.byIssue(comicId, function(error, data) {
      if (error) return console.error(error);

      renderWidget(widgetContainer, data);
    });
  }
});

function renderWidget(container, data) {
  container.appendChild(makeMain(data));
}

function makeMain(data) {
  var main = document.createElement('div');
  main.appendChild(makeGraph(data));
  main.appendChild(makeHeader(data));
  return main;
}

function makeGraph(data) {
  var graph = document.createElement('div');
  makeBars(data).forEach(function(bar) {
    graph.appendChild(bar);
  });

  return graph;
}

function makeBars(data) {
  var bars = [];

  var maxRecord = findMaxRecord(data.records);
  data.records.forEach(function(record, index) {
    var percent = Math.floor(record.count / maxRecord.count * 100);
    bars.push(makeBar(record, index == 0, percent));
  });

  return bars;
}

function makeBar(record, first, heightPercentage) {
  var barWrapper = document.createElement('div');
  var bar = document.createElement('div');
  barWrapper.appendChild(bar);
  return barWrapper;
}

function makeHeader(data) {
  var header = document.createElement('div');

  var title = document.createElement('strong');
  title.textContent = data.title;

  var publisher = document.createElement('small');
  publisher.textContent = '(' + data.publisher + ')';

  header.appendChild(title);
  header.appendChild(document.createTextNode(' '));
  header.appendChild(publisher);

  return header;
}

function findMaxRecord(records) {
  return records.reduce(function(maxRecord, record) {
    if (record.count > maxRecord.count) {
      return record;
    } else {
      return maxRecord;
    }
  });
}
