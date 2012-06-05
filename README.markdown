# Scriptbucket

This git repository contains various scripts written by Eskild Hustvedt
that does not really merit their own git repo. See also the trivial/
subdirectory for more (simpler/more trivial) scripts and the linuxGames/
subdirectory for Linux Gaming-related scripts.

I make no guarantees about the scripts in this repository, use at your own
risk. Should you find a bug however, feel free to report it and I will look
into fixing it.

All scripts are distributed in the hope that they will be useful, but WITHOUT
ANY WARRANTY. They are (unless otherwise stated) licensed under the terms of
the GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version. See
COPYING for the full license text.

### Quick description of the scripts:

    Script:             Description:
    -------             ------------
    aac2ogg             Quick and dirty hack to convert *.aac files to OGG Vorbis.
    
    animetool           A simple script to assist with watching TV/Anime series
                        and rename files to sane filenames.
    
    dagsnytt            A script to fetch the latest "dagsnytt" (Norwegian NRK radio
                        news) podcast and play it. Can also fetch the latest "politisk
                        kvarter".

    diskcheck.sh        A simple script intended to be run from cron.hourly
                        that checks if any partitions have less than 1GiB of
                        free space and warns you via e-mail if it does.
    
    filenamecleaner     A simple script that helps clean up nasty filenames.
    
    getdagsrevyen       A script to fetch the latest dagsrevyen (Norwegian NRK TV news)
                        video podcast and play it.
    
    grandomwallpaper    Randomly sets a wallpaper for users using nautilus/GNOME.

    gui_default_tango.vim A theme for gvim that makes gvim look like vim does by default in
                          the gnome terminal with the tango colour scheme
    
    latexb              A simple utility script to help easily build LaTeX documents.
    
    monitorgrowth       Monitor the rate at which a file is growing.

    prepVim             A script that downloads and installs vim plugins. Uses pathogen
                        to make sure ~/.vim is not cluttered.
    
    reencode            A simple script to assist with re-encoding MP3-files.
    
    runlocale           Run a program with all locale env-variables set to the supplied
                        setting.
    
    synaptic-scroll-fix Enable scrolling using the right-edge of a touchpad, rather than
                        two-finger scrolling.
    
    txt2html            A *very* simple script to convert a pure-text file into HTML.

    xspf2m3u            A script that converts [XSPF](http://xspf.org/) playlists to M3U.

    zd-cleandir         A script to help clean up directories that constantly get new files
                        (such as mail attachment directories). It will sort files into YYYY/MM
                        directories for more permanent storage. Only files older than 7 days
                        will be sorted. Depends upon filenamecleaner.
    
    wma2ogg             Quick and dirty hack to convert *.wma files to OGG Vorbis.

vim: set expandtab :
