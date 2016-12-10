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
    height: '200px',
    'font-family': '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    'font-weight': 300,
    'border-radius': '.5rem',
    padding: '.5rem',
    'box-sizing': 'border-box'
  });
}

function styleGraph(graph) {
  applyStyles(graph, {
    display: 'flex',
    height: 'calc(100% - 1rem)',
    'overflow-x': 'scroll',
    'overflow-y': 'hidden',
    position: 'absolute',
    left: '1rem',
    top: '1rem',
    'z-index': -1,
    width: 'calc(100% - 1rem)',
    'box-sizing': 'border-box'
  });
}

function styleBar(bar, heightPercentage) {
  applyStyles(bar, {
    display: 'inline-block',
    height: heightPercentage + '%',
    position: 'relative',
    width: '100%',
    'border-radius': '2px 2px 0 0',
    'background-color': 'rgba(255, 255, 255, .2)'
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
    'pointer-events': 'none',
    'color': 'rgba(255, 255, 255, .55)'
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
