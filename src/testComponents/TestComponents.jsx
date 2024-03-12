import React from 'react';
import { Zpruebas } from './Zpruebas'
import ZlistaDinamic from './ZlistaDinamic'
import Zcount from './ZlistaDinamic'
import ToggleComponent from './ToggleComponent'
import { TestimonioPrincipal } from './testimonios/TestimonioPrincipal';
import { ComponentCounter } from './componentCount/ComponentCounter';
import Counter from './contador/Counter';
import Calculator from './calculator/Calculator';
import Test from './calculator/Test'
import Tests from './tests/Tests'

const TestComponents = () =>{
  return(
    <React.Fragment>
      <Zpruebas names={"Martin y Esteban"} />
      {/* <Zcount /> */}
      {/* <ZlistaDinamic /> */}
      {/* <ToggleComponent /> */}
      {/* <TestimonioPrincipal/> */}
      {/* <ComponentCounter/> */}
      <Tests/>
      <Test/>
      <Calculator/>
      <Counter/>
    </React.Fragment>
  );
}

export default TestComponents;