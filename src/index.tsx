import React from 'react';
import ReactDOM from 'react-dom';
import DemoTree from './demo/DemoTree';
import withInjectionOrder from './withInjectionOrder';

ReactDOM.render(
   React.createElement(
      withInjectionOrder(DemoTree)
   ),
   document.getElementById('root')
);
