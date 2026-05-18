import { addMonths } from './date.utils';

describe('addMonths', () => {
  it('adds calendar months without changing the time', () => {
    const result = addMonths(new Date('2026-05-25T00:00:00.000Z'), 7);

    expect(result.toISOString()).toBe('2026-12-25T00:00:00.000Z');
  });

  it('clamps to the last day of the target month', () => {
    const result = addMonths(new Date('2026-01-31T13:45:30.000Z'), 1);

    expect(result.toISOString()).toBe('2026-02-28T13:45:30.000Z');
  });

  it('does not mutate the input date', () => {
    const startDate = new Date('2026-05-25T00:00:00.000Z');

    addMonths(startDate, 7);

    expect(startDate.toISOString()).toBe('2026-05-25T00:00:00.000Z');
  });
});
