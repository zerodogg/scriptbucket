# Scriptbucket

This directory contains various more trivial scripts written by Eskild
Hustvedt. These scripts are usually a lot simpler than those in the root
directory, but might still be useful.

I make no guarantees about the scripts in this repository, use at your own
risk. Should you find a bug however, feel free to report it and I will look
into fixing it.

All scripts are distributed in the hope that they will be useful, but WITHOUT
ANY WARRANTY. They are (unless otherwise stated) licensed under the terms of
the GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version. See
COPYING for the full license text.

### Quick description of the scripts:

    Script:               Description:
    -------               ------------
    disableGnomeSSHagent  Disables the SSH agent component of the GNOME keyring

    fetchKitty            Fetches placeholder images from http://www.placekitten.com/
                          for the sizes specified. Usage: ./fetchKitty [width]x[height]

    fix7digitalTags       Fixes the tags on MP3 files bought from the 7digital store.
                          For some reason they like adding "(LP Version)" to title tags,
                          this script strips that.
    
    gl                    A script to query google from the command-line. Only useful to query
                          the google utilities (such as exchange rates),
                          ie. ./gl "1 USD in NOK".

    optimizeFF            Optimize firefox profiles by running the sqlite3 VACUUM command on all
                          sqlite3 databases in the profiles.
    
    vim-mason             A quick and dirty hack to get mason syntax hilighting working in
                          newer versions of vim

vim: set expandtab :
