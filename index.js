let lastScrollY = scrollY;
console.log(lastScrollY);
window.onscroll = function()
{
    if(scrollY >= 1500)
    {
        document.getElementById('backtop').style.visibility="visible";
    }else
    {
        document.getElementById('backtop').style.visibility="hidden";
    }
};



