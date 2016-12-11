var client = require('comichron-data-browser-client');
var shortNumber = require('./short-number');

var styleElement = document.createElement('style');
styleElement.textContent = require('./style/styles.scss');
document.head.appendChild(styleElement);

var widgetSelector = '[data-comichron-comic-id]';

var widgetContainers = document.querySelectorAll(widgetSelector);
Array.prototype.slice.call(widgetContainers)
  .forEach(function(widgetContainer) {
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
  container.appendChild(makeWidget(data));
}

function makeWidget(data) {
  var widget = document.createElement('div');
  widget.classList.add('cw-c-widget');
  widget.classList.add('cw-t-dark'); // Theme logic here?

  widget.appendChild(makeYAxisLabels(data));
  widget.appendChild(makeGraphArea(data));

  return widget;
}

function makeYAxisLabels(data, maxRecord) {
  var yAxisLabels = document.createElement('div');
  yAxisLabels.classList.add('cw-c-widget__y-axis-label');

  var max = findMaxRecord(data.records).count;

  // how many middle ticks to show
  var middleTicks = 2;
  var tickInterval = Math.floor(max / (middleTicks + 1));

  yAxisLabels.appendChild(makeYAxisTick(0));

  for (var i = 0; i < middleTicks; i++) {
    yAxisLabels.appendChild(makeYAxisTick(tickInterval * (i + 1)));
  }

  yAxisLabels.appendChild(makeYAxisTick(max));

  return yAxisLabels;
}

function makeYAxisTick(number) {
  var tick = document.createElement('div');
  tick.classList.add('cw-c-widget__y-axis-tick');
  tick.textContent = shortNumber(number);
  return tick;
}

function makeGraphArea(data) {
  var graphArea = document.createElement('div');
  graphArea.classList.add('cw-c-widget__graph-area');
  graphArea.appendChild(makeGraph(data));
  return graphArea;
}

function makeGraph(data) {
  var graph = document.createElement('div');
  graph.classList.add('cw-c-graph');

  var maxRecord = findMaxRecord(data.records);
  data.records.forEach(function(record) {
    var heightPercent = Math.floor(record.count / maxRecord.count * 100);
    graph.appendChild(makeBar(record, heightPercent));
  });

  return graph;
}

function makeBar(record, heightPercent) {
  var bar = document.createElement('div');
  bar.classList.add('cw-c-graph__bar');
  bar.style.height = heightPercent + '%';
  bar.setAttribute('data-x-axis-tick-value', record.issue);
  bar.setAttribute('data-x-axis-bar-value', record.count);
  return bar;
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
