var backBtnSwitch = true;
function goBack(){
    var pageName = window.location.hash.replace('#', '');
    if(pageName !== 'home'){
        window.history.back();
    }else{
        backBtnSwitch = true;
        document.removeEventListener('backbutton', goBack, false);
    }
}

function openPage(){
    var pageName = window.location.hash.replace('#', '');
    pageName = (!pageName && (localStorage.getItem("login") === 'true')) ? 'home' : pageName;

    if(backBtnSwitch && pageName !== 'home'){
        backBtnSwitch = false;
        document.addEventListener('backbutton', goBack, false);
    }

    switchMenu = false;

    if(pageName === 'login'){
        localStorage.removeItem('pageList');
        localStorage.removeItem("login");
    }

    var pages = localStorage.getItem('pageList');
    pages = pages ? JSON.parse(pages) : false;

    if(pageName && (typeof pages[pageName] !== 'undefined')){
        goPage(pageName);
        return true;
    }else if(localStorage.getItem("login") !== 'true'){
        pageName = 'login';
    }else if(typeof pagesList[pageName] === 'undefined'){
        return false;
    }

    pagesList[pageName]();
}

function showLoading(){
    $('html').addClass('loading');
}

function hideLoading(){
    $('html').removeClass('loading');
}