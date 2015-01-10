var pagesList = {
    'login'      : function(){
        parseTemplate('_login.htm', {
            page_name  : 'login',
            page_title : '_APPLICATION NAME_'
        }, false)
    },
    'home' : function(){
        parseTemplate('_page.htm', {
            'page_name'  : '_PAGE NAME_',
            'page_title' : '_PAGE TITLE_',
            'main'       : {
                'class' : ''
            },
            'header'     : {
                'class'      : 'fixed',
                'backButton' : false
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