navbar = document.getElementById("nav-bar");

for (i=0; i<navbar.childElementCount; ++i)
{
    a = navbar.children[i].firstChild;
    if (a.href == window.location.href)
    {
        a.id = "current";
    }
};