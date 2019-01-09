import { ReversePipe } from "./test.reverse.pipe";

describe('testReversePipe', () => {

  it('should revese the string value', () => {
      let reversePipe = new ReversePipe();
    expect(reversePipe.transform("tester")).toEqual("retset");
  });
});
