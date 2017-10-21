var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var res=generateMessage('xyz','i am checking it');

    expect(res.from).toBe('xyz');
    expect(res.text).toBe('i am checking it');
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage',()=>{
  it('should generate correct location message object',()=>{
    var from='xyz';
    var latitude=15;
    var longitude=20;
    var url='https://www.google.com/maps?q=15,20';
    var res=generateLocationMessage(from,latitude,longitude);
    expect(res.from).toBe(from);
    expect(res.url).toBe(url);
    expect(res.createdAt).toBeA('number');
  });
});
