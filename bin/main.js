window.onload = () => {
  var header = document.getElementsByTagName('header')[0];
  var path = "";
  var href = document.location.href;
  var s = href.split("/");
  for (var i = 2; i < (s.length-1); i++) {
    path += "<A HREF=\""+href.substring(0,href.indexOf("/"+s[i])+s[i].length+1)+"/\">"+(i == 2 ? "home" : s[i])+"</A> / ";
  }
  i = s.length-1;
  path += "<A HREF=\""+href.substring(0,href.indexOf(s[i])+s[i].length)+"\">"+s[i]+"</A>";
  var url = path;
  var str = `<table class="header-table">`;
  str += `<tr>`;
  str += `<td>${header.innerHTML}</td>`;
  str += `</tr>`;
  str += `</table>`;
  header.innerHTML = url;

  // Footer
  var footer = document.createElement('footer');
  var html = `<div><p><br></p>`;
  html += `<hr style="width: 85%">`;
  html += `<p align="center"><small>Eduardo Ono.</small></p></div>`;
  footer.innerHTML = html;
  console.log(html);
  document.body.appendChild(footer);
}
