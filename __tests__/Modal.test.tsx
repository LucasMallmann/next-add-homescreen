import React from 'react';
import { render } from '@testing-library/react';

import Modal from '../src/components/Modal';

describe('Modal Component', () => {
  it('should not render if browser is not safari or iOS', () => {
    const { getByText } = render(<Modal />);
    expect(getByText('Hello')).toBeFalsy();
  });
});
