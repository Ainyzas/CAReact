import CheckBox from '../CheckBox';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CheckBox component', () => {
  test('CheckBox should appear on screen when all props are given', async () => {
    render(<CheckBox label="CheckBox" id={78} checked={true} onChange={() => {}} />);
    const label = await screen.findByText('CheckBox');
    const checkbox = await screen.findByRole('checkbox');

    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  test('CheckBox should appear checked when checked prop is true', async () => {
    render(<CheckBox label="CheckBox" id={78} checked={false} onChange={() => {}} />);
    const checkbox = await screen.findByRole('checkbox');

    expect(checkbox).not.toBeChecked();
  });

  test('onChange function should be called when CheckBox is clicked', async () => {
    const onChange = jest.fn();
    render(<CheckBox label="CheckBox" id={78} checked={false} onChange={onChange} />);

    const checkbox = await screen.findByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledWith(true);
  });

  test('id should appear on checkbox when it is passed to props', async () => {
    render(<CheckBox label="CheckBox" id={78} checked={false} onChange={() => {}} />);
    const checkbox = await screen.findByRole('checkbox');

    expect(checkbox).toHaveProperty('id', '78');
  });

  test('id should not appear on checkbox when there is no id prop passed', async () => {
    render(<CheckBox label="CheckBox" checked={false} onChange={() => {}} />);
    const checkbox = await screen.findByRole('checkbox');

    expect(checkbox).toHaveProperty('id', '');
  });
});
