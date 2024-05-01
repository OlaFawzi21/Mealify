let isDarkTheme = false;
let darkIcon = document.getElementById( "darkIcon" );
let imgs = document.querySelectorAll( ".cards .card picture" );
let responsiveNav = document.querySelector( ".responsive-nav" );
function darkMode() {
    isDarkTheme = !isDarkTheme;
    document.documentElement.classList.toggle('dark-mode', isDarkTheme);
    // Change the icon based on the theme
    if (isDarkTheme) {
        darkIcon.innerHTML = "<i class='fa-regular fa-sun fa-xl' style='color:#fff'></i>";
    } else {
        darkIcon.innerHTML = " <i class='fa-solid fa-moon fa-xl'></i>";
    }
    // Apply dark class to images
    imgs.forEach(ele => {
        ele.classList.toggle("dark", isDarkTheme);
    });
}

function openBarNav ()
{
    responsiveNav.style.display = "block";
}

function closeBarNav ()
{
    responsiveNav.style.display = "none";
}