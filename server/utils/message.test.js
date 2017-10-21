var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var res=generateMessage('xyz','i am checking it');

    expect(res.from).toBe('xyz');
    expect(res.text).toBe('i am checking it');
    expect(res.createdAt).toBeA('number');
  });
});
