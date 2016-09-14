// This file represents what you can do with the province and path data template

// combine all province objects so they can be accessed in a single array
var provinces = [CANT,CANU,CAYT,CABC,CAAB,CAMB,CASK,CAON,CAQC,CAPE,CANS,CANL,CANB];
var colour = ['#273754','#273754','#273754','#273754','#273754','#273754','#273754','#273754','#273754','#273754','#273754','#273754','#273754'];

// add events for each province to add province name and additional data
provinces.forEach(function(e)
                  {
  e.mouseover(function(){
    // associate a colour with each province
    var pos = provinces.indexOf(e);
    e.animate({
        fill: colour[pos]
    }, 400);
      
    // add province data when hovering
    $('#provincetag').html(e.info.name);
    
  });
    
  e.click(function(){
    // associate a colour with each province
    var pos = provinces.indexOf(e);
    e.animate({
        fill: colour[pos]
    }, 100);
      
    // add province data when hovering
     
    $('#province').text(e.info.name); 
    $('#provincetag').hide(800);
    $('.titleheader a').show(500);
    $("#provincesvg").show(1000);
    $("#provincesvg iframe").show(1000);
    $("#rsr svg").fadeOut(500);
    


  });
   
   
    
  e.mouseout(function(){
    e.animate(
        {
        fill: 'rgb(211, 211, 211)'
    }, 400);/*
    $('#province').text('The latest');
    $('#population').text('News');
    */
  });
    



   
    
    
CABC.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwireBC.html");
        $('#province').css("background-color" , "#fefefe");
            $("#provincesvg iframe").attr("src", "newBCcities.svg");
  });
    
CAAB.click(function(){
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwireAB.html");
        $('#province').css("background-color" , "#fefefe");
            $("#provincesvg iframe").attr("src", "newalbertacities.svg");
  });
    
CASK.click(function(){
   
$('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwireSK.html");
        $('#province').css("background-color" , "#fefefe");
            $("#provincesvg iframe").attr("src", "newsaskatchewancities.svg");  
  });
    
CAMB.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-manitoba.html");
        $('#province').css("background-color" , "#fefefe");
        $("#provincesvg iframe").attr("src", "newmanitobacities.svg");
  });

CAON.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-ontario.html");
    $("#provincesvg iframe").attr("src", "newontariocities.svg");

  });
    
CAQC.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-quebec.html");
        $('#province').css("background-color" , "#fefefe");
                       $("#provincesvg iframe").attr("src", "newquebeccities.svg");    
  });
    
CANS.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-novascotia.html");
    $('#province').css("background-color" , "#fefefe");
    $("#provincesvg iframe").attr("src", "newnovascotia.svg");


  });
    
CANB.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-newbrunswick.html");
    $('#province').css("background-color" , "#fefefe");
    $("#provincesvg iframe").attr("src", "newnewbrunswickcities.svg");

  });
    
CAPE.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-pei.html");
    $('#province').css("background-color" , "#fefefe");
    $("#provincesvg iframe").attr("src", "newpei.svg");

   
  });
    
 $("#svg_82").click(function(){
   
    $(this).attr("target" , "clickhandler");

  });
    


CANL.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-newfoundland.html");
    $('#province').css("background-color" , "#fefefe");
    $("#provincesvg iframe").attr("src", "newnewfoundlandcities.svg");

    
    
  });
    
CANU.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-northerncanada.html");
    $("#provincesvg iframe").attr("src", "newnortherncanada.svg");

  });
    
CANT.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-northerncanada.html");
    $("#provincesvg iframe").attr("src", "newnortherncanada.svg");
  });
    
CAYT.click(function(){
   
    $('#clickhandler').attr("src" , "http://www.tapestryreader.com/omniwire-northerncanada.html");
    $("#provincesvg iframe").attr("src", "newnortherncanada.svg");

  });
    
    
$(".titleheader a").click(function(){
   $("#provincesvg").fadeOut(500);
    $("#rsr svg").show(500);
    $(this).hide();
    $('#provincetag').show(800);
  });


   

});

