document.write("<table class=\"tg\" border='3'><tr>");
for (let i = 1; i <= 10; i++) {
  document.write('<td class="tg-phtq">');
  for (let j = 1; j <= 10; j++) {
    document.write(i + "x" + j + "=" + i * j + "<br/>");
  }
  if (i == 5) {
    document.write("</tr><tr>");
  }
  document.write("</td>");
}
document.write("</tr><table>");
