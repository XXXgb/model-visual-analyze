export default {
  getUuid(){
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  },

  getColor(count){
    let result = [];
    for(let j=0;j<count;j++){
      let color="#";
      console.log(j)
      for(let i=0;i<6;i++){
        console.log(i)
        color += (Math.random()*16 | 0).toString(16);
      }
      console.log(color);
      result.push(color);
    }

    return result;
  }
}
