// ==UserScript==
// @name           Antisocial Newsblur
// @version        0.1
// @namespace      org.zerodogg.antiSocialNewsblur
// @include        http*://*newsblur.com*
// @description    Remove the social aspects of Newsblur
// ==/UserScript==

var style = document.createElement('style');
style.innerHTML = ''+
/* Remove this line if you like the new sidebar with "train" and "save" */
'.NB-feed-story-sideoptions-container,'+
/*                                                                 */
'.NB-story-comments-shares-teaser-wrapper,'+
'.NB-story-comments-shares-teaser,'+
'.NB-feed-story-comments,'+
'.NB-menu-manage-story-share,'+
'.NB-socialfeeds,'+
'.NB-menu-manage-friends,'+
'.NB-feed-story-share,'+
'.NB-feeds-header-river-blurblogs,'+
'.NB-module-account-stats'+
'{'+
    'display:none !important;'+
    'visibility:hidden !important;'+
'};';
document.head.appendChild(style);
document.getElementsByClassName('NB-feeds-header-river-blurblogs')[0].parentElement.style.display = 'none';
