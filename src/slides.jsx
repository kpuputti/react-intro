import React from 'react';
import Slide from './Slide.jsx';

const firstReactionCode = 'var React = require(\'react\');\n\n' +
                          'var App = React.createClass({\n' +
                          '  handleClick: function() {\n' +
                          '    alert(\'lol, clicked\');\n' +
                          '  },\n' +
                          '  render: function() {\n' +
                          '    return (\n' +
                          '      <div>\n' +
                          '        <p>hello, world</p>\n' +
                          '        <button onClick={ this.handleClick }>click me</button>\n' +
                          '      </div>\n' +
                          '    );\n' +
                          '  }\n' +
                          '});\n\n' +
                          'React.render(<App/>, document.body);';

export const slides = [

  <Slide className='centered'>
    <h1>Introduction to React</h1>
    <h2>Kimmo Puputti 2015-06-10</h2>
  </Slide>,

  <Slide title='History lesson' className='centered'/>,

  <Slide title='Web development'>
    <ul>
      <li>Simple stateless request/response model</li>
      <li>Ajax</li>
      <li>jQuery spaghetti</li>
      <li>MVC frameworks</li>
    </ul>
  </Slide>,

  <Slide title='MVC spaghetti'>
    <ul>
      <li>Stringly typed declarative event binding</li>
      <li>Handling initial model state</li>
      <li>Binding event handlers to models</li>
      <li>Creating sub views</li>
      <li>Adding sub views to the DOM</li>
      <li>Managing view state</li>
      <li>Rendering state from multiple sources</li>
    </ul>
  </Slide>,

  <Slide className='centered'>
    <p>We have lost all simplicity</p>
  </Slide>,

  <Slide title='Fundamental ideas' className='centered'/>,
  <Slide title='The Zen of Python' className='centered'/>,
  <Slide title='The UNIX philosophy' className='centered'/>,
  <Slide title='Clojure and persistent data structures' className='centered'/>,
  <Slide title='Data vs. code and macros in LISP' className='centered'/>,
  <Slide title='Functions and type inference in Haskell' className='centered'/>,

  <Slide title='React' className='centered'>
    <h2>Fundamental change in Frontend</h2>
  </Slide>,

  <Slide title='First Reactions'>
    <pre><code>{ firstReactionCode }</code></pre>
  </Slide>,

  <Slide title='First Reactions'>
    <ul>
      <li>HTML in JavaScript</li>
      <li>Inline event handlers</li>
      <li>Reinventing the DOM with something called the Virtual DOM</li>
    </ul>
  </Slide>,

  <Slide title='What is it really about?' className='centered'/>,

  <Slide title='React'>
    <li><i>A JavaScript Library for building User Interfaces</i></li>
    <li>V in MVC</li>
    <li>Open sourced by Facebook in 2013</li>
    <li>Battle tested (FB, Instagram, Netflix, Yahoo Mail)</li>
  </Slide>,

  <Slide title='Design philosophy'>
    <li>Embrace JavaScript</li>
    <li>DOM is slow, JS engines fast</li>
    <li>CPU over memory</li>
    <li>and most importantly...</li>
  </Slide>,

  <Slide title='Components!' className='centered'/>,

  <Slide title='Components'>
    <ul>
      <li>Composable</li>
      <li>Reusable</li>
      <li>Testable</li>
    </ul>
  </Slide>,

  <Slide className='centered'>
    <p>React brings back the simplicity</p>
  </Slide>,

  <Slide title='React enables'>
    <ul>
      <li>Predictability</li>
      <li>Simplicity</li>
      <li>Testability</li>
      <li>Performance</li>
      <li>Explicitness</li>
    </ul>
  </Slide>,

  <Slide title='How?' className='centered'/>,

  <Slide title='Virtual DOM'>
    <ul>
      <li>Conceptually always re-render everything</li>
      <li>Describe your component DOM based on its input data</li>
    </ul>
  </Slide>,

  <Slide title='Ideal component' className='centered'>
    <h2>Pure function from props to VDOM</h2>
  </Slide>,

  <Slide title='Virtual DOM'>
    <p>Whenever data changes</p>
    <ul>
      <li>crawl the render tree</li>
      <li>diff the VDOM against the known DOM</li>
      <li>apply only minimal changes</li>
    </ul>
  </Slide>,

  <Slide className='centered'>
    <h2>This enables fundamentally new approaches</h2>
  </Slide>,

  <Slide title='Virtual DOM'>
    <ul>
      <li>keeps your scroll position</li>
      <li>keeps your input focus</li>
      <li>reuses the elements within a list</li>
      <li>demo: <a href='http://kpuputti.github.io/labs/react-editable-ordering/'>Editable list demo using React</a></li>
    </ul>
  </Slide>,

  <Slide title='JSX'>
    <ul>
      <li>Optional</li>
      <li>Cohesion, decoupling?</li>
      <li>Separation of concerns?</li>
    </ul>
  </Slide>,

  <Slide title='Lifecycle hooks'>
    <ul>
      <li>Play well with other libraries</li>
      <li>Hackable</li>
      <li>Explicit cleanup, lower memory usage</li>
    </ul>
  </Slide>,

  <Slide title='Lifecycle hooks'>
    <ul className='smaller'>
      <li><pre><code>componentWillMount()</code></pre></li>
      <li><pre><code>componentDidMount()</code></pre></li>
      <li><pre><code>componentWillReceiveProps()</code></pre></li>
      <li><pre><code>shouldComponentUpdate()</code></pre></li>
      <li><pre><code>componentWillUpdate()</code></pre></li>
      <li><pre><code>componentDidUpdate()</code></pre></li>
      <li><pre><code>componentWillUnmount()</code></pre></li>
    </ul>
  </Slide>,

  <Slide title='Prop types'>
    <ul>
      <li>Runtime type checking</li>
      <li>Compile-time (transpilation-time)type checking with Flow</li>
      <li>Simple types</li>
      <li>Compound types</li>
    </ul>
  </Slide>,

  <Slide title='Extra'>
    <ul>
      <li>Mixins</li>
      <li>ES6 support</li>
      <li>Isomorphic JavaScript support</li>
      <li>Usage with Web Components</li>
      <li>Immutable data structures!</li>
    </ul>
  </Slide>,

  <Slide title='In practice'>
    <ul>
      <li>Simple and scalable model to think in</li>
      <li>Very good warnings</li>
      <li>Great tooling/linting support (Babel, ESLint)</li>
      <li>Deciding where to store data</li>
      <li>Unidirectional data flow</li>
    </ul>
  </Slide>,

  <Slide title='Cons'>
    <ul>
      <li>Requires change in thinking</li>
      <li>Not easily understandable under-the-hood as Backbone</li>
      <li>JSX requires more from your editor/tooling</li>
      <li>Making pure components requires discipline</li>
    </ul>
  </Slide>,

  <Slide title='Summary'>
    <ul>
      <li>The VDOM model is powerful</li>
      <li>Simple, predictable, performant</li>
      <li>Other frameworks are copying the VDOM approach</li>
      <li>Very little problems when you understand the model</li>
      <li>Example: these slides are a React app</li>
    </ul>
  </Slide>,

  <Slide title='Thanks!' className='centered'>
    <h2>Questions?</h2>
  </Slide>
];

export const SLIDES_LENGTH = slides.length;
