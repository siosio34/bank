/**
 *
 * Tests for NavigateNextIcon
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import NavigateNextIcon from '../index';

describe('<NavigateNextIcon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NavigateNextIcon />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<NavigateNextIcon />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render an <svg> tag', () => {
    const { container } = render(<NavigateNextIcon />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<NavigateNextIcon />);
    expect(container.querySelector('svg').hasAttribute('class')).toBe(true);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<NavigateNextIcon attribute="test" />);
    expect(container.querySelector('svg[attribute="test"]')).toBeNull();
  });
});