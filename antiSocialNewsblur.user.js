// ==UserScript==
// @name           Antisocial Newsblur
// @version        0.1
// @namespace      org.zerodogg.antiSocialNewsblur
// @include        http*://*newsblur.com*
// @description    Remove the social aspects of Newsblur
// ==/UserScript==

// Copyright (C) Eskild Hustvedt 2012
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

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
