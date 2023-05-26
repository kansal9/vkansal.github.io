
const tabs = document.querySelectorAll(".history-tab");
const tabBlocks = document.querySelectorAll(".history-block");

var viewportWidth, divWidth, tb;
    $(function() {
        
        viewport = $('#excontainer').innerWidth();
        tb = $('#thumbs');
        divWidth = tb.outerWidth();
    
        $('#excontainer').mousemove(function(e)
        {
      tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
         });
    
    $('.history-block').on('click', function(){
      $('.history-block').css('width', '500px');
      $('.history-block').find('.extitle').css('width', '300px');
       $('.history-block .extimeline').hide(300);
        $(this).css('width', '600px');
        $(this).find('.extitle').css('width', '400px');
        $(this).find('.exorg').css('width', '700px');
       $(this).find('.extimeline').show(800);
      $('#excontainer').mousemove(function(e)
        {
          tb.css({left: ((viewport - divWidth-300)*((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
          });
    });
    
    $('.extimeline ul li').on('click', function(){
        $(this).parent().blink();
    });
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");

    tabs.forEach(tab => tab.classList.remove("active"));
    tabBlocks.forEach(block => block.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});
