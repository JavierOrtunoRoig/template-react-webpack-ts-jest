import { render } from '@testing-library/react';
import Button from '../Button';

describe( 'Button', () => {

  it( 'renders', () => {

    const { getByText } = render( <Button text="Welcome"
      onClick={() => console.log( 'Hello' )} /> );
    expect( getByText( 'Welcome' ) ).toBeTruthy();

  });

});
