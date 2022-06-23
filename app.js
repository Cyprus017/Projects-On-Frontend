const heading = React.createElement(
    'h1',
    { id:'abc' },
    'This is a Heading.'
);

ReactDom.render(
    heading,
    
    document.getElementById('react-container')
);