function adicionarHeader()
{
  var str = "";
  str += "<h4>Desenvolvimento Web (Front-End)</h4>";
  var header = document.getElementById("header");
  header.innerHTML = str;
}

function adicionarFooter()
{
    var footer = document.getElementsByTagName("footer");
    var str = '';
    str += "<p><br></p>";
    str += '<hr style="border: 1px solid">';
    str += '<div style="margin-top: 10px">Copyright(c) 2021, Eduardo Ono. ';
    str += '<a href="https://github.com/eduardo-ono/Desenvolvimento-Web">GitHub</a></div>';
    // document.write(str);
    footer[0].innerHTML = str;
}

function adicionarTudo()
{
  adicionarHeader();
  adicionarFooter();
}