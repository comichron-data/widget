module.exports = {
  styleMain: styleMain,
  styleGraph: styleGraph,
  styleBar: styleBar,
  styleBarWrapper: styleBarWrapper,
  styleHeader: styleHeader,
  styleTitle: styleTitle,
  stylePublisher: stylePublisher
};

function styleMain(main) {
  applyStyles(main, {
    'background-color': '#21252b',
    width: '100%',
    position: 'relative',
    'z-index': 0,
    height: 'calc(100% - 1rem)',
    margin: '0.5rem'
  });
}

function styleGraph(graph) {
  applyStyles(graph, {
    display: 'flex',
    height: '100px',
    'overflow-x': 'scroll',
    'overflow-y': 'hidden',
    position: 'absolute',
    left: 0,
    top: 0,
    'z-index': -1,
    width: '100%'
  });
}

function styleBar(bar, heightPercentage) {
  applyStyles(bar, {
    display: 'inline-block',
    height: heightPercentage + '%',
    position: 'relative',
    width: '100%',
    'border-radius': '2px 2px 0 0',
    'background-color': 'rgba(33, 37, 43, 1)'
  });
}

function styleBarWrapper(barWrapper, first) {
  var barWrapperStyles = {
    'align-items': 'flex-end',
    display: 'flex',
    flex: '0 0 .6rem',
    height: 'calc(100% - 2rem)',
    position: 'relative'
  };

  if (!first) {
    barWrapperStyles['margin-left'] = '0.5rem';
  }

  applyStyles(barWrapper, barWrapperStyles);
}

function styleHeader(header) {
  applyStyles(header, {
    'font-size': '1.2em',
    'pointer-events': 'none'
  });
}

function styleTitle(title) {
  applyStyles(title, {
    'display': 'inline-block'
  });
}

function stylePublisher(publisher) {
  applyStyles(publisher, {
    'display': 'inline-block'
  });
}

function applyStyles(element, styles) {
  for (var property in styles) {
    if (styles.hasOwnProperty(property)) {
      element.style[property] = styles[property];
    }
  }
}
