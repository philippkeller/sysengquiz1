function buildUrl() {
  var pup = $('textarea').val();
  pup = $("<div/>").html(pup).text();  // decode html entities
  pup = pup.replace(/“/g, '');
  pup = pup.replace(/”/g, '');
  pup = pup.replace(/'/g, '');
  pup = pup.replace(/"/g, '');
  pup = pup.replace(/(\r\n|\n|\r)/gm,"");
  pup = pup.replace(/[ ]*/gm,"");
  var suffix = Math.abs(pup.hashCode()).toString(16);
  console.log(suffix);
  $('#url').html('<a href="/'+suffix+'">link to stage 3 (only works if all errors are fixed)');
  
}
$(function(){
  $('textarea').change(buildUrl);
  $('textarea').bind('keyup', buildUrl);
});
String.prototype.hashCode = function(){
    var hash = 0, i, char;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};
