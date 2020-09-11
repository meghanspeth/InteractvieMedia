d3.select("#jar1")
.on("mouseenter",function()
    {
d3.select("#jar1")
.attr("src","../pics/coin.jpg");

    d3.select("#finalmessage")
    .text("It's not under the jar! Hover over the next image to try to find it");
})


 d3.select("#jar1")
.on("mouseleave",function()
    {
d3.select("#jar1")
.attr("src","../pics/jar.jpg");
       d3.select("#textunderjar1")
    .text(" ");
     
 })


d3.select("#jar2")
.on("mouseenter",function()
    {
d3.select("#jar2")
.attr("src","../pics/medal.jpg");
     d3.select("#finalmessage")
    .text("It's not under the jar! Try clicking on the image this time!");

})


 d3.select("#jar2")
.on("mouseleave",function()
    {
d3.select("#jar2")
.attr("src","../pics/jar.jpg");
       d3.select("#textunderjar1")
    .text(" ");
 })


d3.select("#jar3")
.on("click",function()
    {
d3.select("#jar3")
.attr("src","../pics/clock.jpg")

d3.select("#finalmessage")
    .text("Congratulations you found the clock!");
})



