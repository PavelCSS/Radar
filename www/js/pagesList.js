var app_name = 'Radar';
var pagesList = {
    'login'      : function(){
        parseTemplate('_login.htm', {
            page_name  : 'login',
            page_title : app_name
        }, false)
    },
    'home' : function(){
        parseTemplate('_home.htm', {
            'page_name'  : 'home',
            'page_title' : app_name,
            'users'      : usersList
        }, {
            radarTmp : document.getElementById('tmp_radar').innerHTML
        })
    },
    'users' : function(){
        parseTemplate('_users.htm', {
            'page_name'  : 'home',
            'page_title' : app_name,
            'users'      : usersList
        }, {
            usersTmp : document.getElementById('tmp_user-list').innerHTML
        })
    },
    'radar' : function(){
        parseTemplate('_radar.htm', {
            'page_name'  : 'home',
            'page_title' : app_name,
            'users'      : usersList
        }, {
            radarTmp : document.getElementById('tmp_radar').innerHTML
        })
    },
    'profile' : function(){
        parseTemplate('_page.htm', {
            'page_name'  : 'profile',
            'page_title' : 'Profile',
            'main'       : {
                'class' : ''
            },
            'header'     : {
                'class'      : 'fixed',
                'backButton' : {
                    'icon'     : 'icon-arrow-left6' // icon name for button
                }
            },
            'article'    : {
                'class' : 'mtH',
                'code'  : '_CONTENT CODE_'
            },
            'footer'     : {
                'class' : 'fixed',
                'code'  : '_FOOTER CODE_'
            },
            'aside'      : {
                'position' : 'left', // left, right, top, bottom
                'class'    : 'mtH',
                'code'     : '_ASIDE CODE_',
                'button'   : {
                    'iconOnly' : false,  // true or false
                    'position' : 'left' // left, right
                }
            },
            'dropdown'   : {
                'position' : 'top right', // top, right, bottom, left, center, centered
                'class'    : '',
                'code'     : '_DROPDOWN CODE_',
                'button'   : {
                    'icon'     : 'icon-list5', // icon name for button
                    'iconOnly' : true,  // true or false
                    'text'     : 'Menu',
                    'position' : 'right' // left, right
                }
            }
        }, false)
    }
}


// EXAMPLE PAGE

//'_pageName_' : function(){
//    parseTemplate('_page.htm', {
//        'page_name'  : '_PAGE NAME_',
//        'page_title' : '_PAGE TITLE_',
//        'main'       : {
//            'class' : '...'
//        },
//        'header'     : {
//            'class'      : 'fixed',
//            'backButton' : {
//                'icon'     : 'icon-arrow-left6' // icon name for button
//            }
//        },
//        'article'    : {
//            'class' : '',
//            'code'  : '_CONTENT CODE_'
//        },
//        'footer'     : {
//            'class' : 'fixed',
//            'code'  : '_FOOTER CODE_'
//        },
//        'aside'      : {
//            'position' : 'left', // left, right, top, bottom
//            'class'    : 'mtH',
//            'code'     : '_ASIDE CODE_',
//            'button'   : {
//                'iconOnly' : false,  // true or false
//                'text'     : 'Menu',
//                'position' : 'left' // left, right
//            }
//        },
//        'dropdown'   : {
//            'position' : 'top right', // top, right, bottom, left, center, centered
//            'class'    : '',
//            'code'     : '_DROPDOWN CODE_',
//            'button'   : {
//                'icon'     : 'icon-list5', // icon name for button
//                'iconOnly' : true,  // true or false
//                'text'     : 'Menu',
//                'position' : 'right' // left, right
//            }
//        }
//    }, false)
//}