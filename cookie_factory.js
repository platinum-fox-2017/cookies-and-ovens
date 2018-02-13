const fs = require('fs');
const CookiesAndOvens = require('./cookies_and_ovens.js');
const ChocholateChip = CookiesAndOvens.ChocholateChip;
const OtherCookie = CookiesAndOvens.OtherCookie;
const PeanutButter = CookiesAndOvens.PeanutButter;

let options = fs.readFileSync('./cookies.txt','utf8');
options = options.split('\n');

class CookieFactory{
  static create(options){
    let cookies = [];
    for(var i = 0; i < options.length; i++){
      if(options[i] === 'peanut butter')  {
        cookies.push(new PeanutButter() );
      } else if(options[i] === 'chocolate chip'){
        cookies.push(new ChocholateChip());
      } else if(options[i] != '') {
        cookies.push(new OtherCookie(options[i]));
      }
    }
    return cookies;
  }
}

console.log(CookieFactory.create(options))

module.exports = CookieFactory;
