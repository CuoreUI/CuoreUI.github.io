document.addEventListener("DOMContentLoaded", () => {
    const currentPageClass = "nav-button btn filled";
    const otherPagesClass = "nav-button btn outlined";

    const headerTemplate = `
    <header class="top-bar">   
        <img class="logo" src="assets/cui mono.svg" alt="cui logo"/>
        <nav class="top-nav"></nav>
        <div class="hamburger-container">
              <button class="hamburger-nav">☰</button>
              <div class="hamburger-navbuttons"></div>
        </div>
    </header>`;

    document.body.insertAdjacentHTML("afterbegin", headerTemplate);

    const topNav = document.getElementsByClassName("top-nav")[0];
    const hamburgerNavbuttons = document.getElementsByClassName("hamburger-navbuttons")[0];

    function AddPage(uri, name)
    {
        let a = otherPagesClass;
        let additionalStyles = "";

        if (document.title === name)
        {
            a = currentPageClass;
        }

        if (uri.startsWith("https:") || uri.startsWith("http:"))
        {
            if (name == "Documentation")
            {
                additionalStyles = " openlink docs-icon";
            }
            else
            {
                additionalStyles = " openlink";
            }
        }

        const b = `<a href="${uri}"><button class="${a}${additionalStyles}"><p>${name}</p></button></a>`;
        topNav.insertAdjacentHTML("beforeend", b);
        
        hamburgerNavbuttons.insertAdjacentHTML("beforeend", b);
    }

    AddPage("index.html", "Home");
    AddPage("https://itzkxhu.gitbook.io/cuoreui", "Documentation");
    AddPage("https://github.com/7owh/CuoreUI", "Repository");
    AddPage("contact.html", "Contact");
});
