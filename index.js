class Formatter {
   static capitalize(string) {
     return string[0].toUpperCase() + string.slice(1)
}

  static sanitize(str) {
    str = str.replace(/[^a-z0-9áéíóúñü_-\s\.,]/gim,"");
   return str.trim();
  }

  static titleize(string) {
  var words = string.match(/\b\w+\b/g),
      preps = ["an", "but", "of", "and", "for", "by", "a", "the", "from", "at"];
      return words.map(function(e,i) {
      return preps.indexOf(e) == -1 || i === 0 ? e[0].toUpperCase()+e.slice(1) : e;
      }).join(" ");
}

}
