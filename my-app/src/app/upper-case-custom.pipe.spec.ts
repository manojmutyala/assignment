import { UpperCaseCustom } from './upper-case-custom.pipe';

describe('UpperCaseCustom', () => {
  it('create an instance', () => {
    const pipe = new UpperCaseCustom();
    expect(pipe).toBeTruthy();
  });
});
