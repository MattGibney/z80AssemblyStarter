/* eslint-env node, mocha */
const assert = require('chai').assert;
var fs = require('fs');

const { z80, memory } = require('z80testsuite');

const binary = fs.readFileSync('./bin/main.bin', 'hex');
let program = binary.match(/.{2}/g);
program = program.map(byte => parseInt(`0x${byte}`));

const memortStart = 0;
let memoryPos = memortStart;
program.forEach(byte => {
  memory.memoryObj[memoryPos] = byte;
  memoryPos = memoryPos + 1;
});

describe('Array', function() {
  describe('#indexOf()', function() {
    before(function() {
      this.memory = memory;
      this.z80 = z80;
    });
    it('should count up', function() {
      z80.run_instruction();
      assert.equal(this.z80.getState().a, 0);

      z80.run_instruction();
      z80.run_instruction();
      assert.equal(this.z80.getState().a, 2);

      z80.run_instruction();
      z80.run_instruction();
      assert.equal(this.z80.getState().a, 4);

      z80.run_instruction();
      z80.run_instruction();
      assert.equal(this.z80.getState().a, 6);

      z80.run_instruction();
      z80.run_instruction();
      assert.equal(this.z80.getState().a, 8);

      z80.run_instruction();
      z80.run_instruction();
      assert.equal(this.z80.getState().a, 10);
    });
  });
}); 