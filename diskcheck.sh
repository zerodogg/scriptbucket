#!/bin/bash
# diskcheck.sh - a simple disk space checker cronjob
# Copyright (C) Eskild Hustvedt 2012
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
# -- Usage --
# You should be able to just drop this script into /etc/cron.hourly and then
# forget about it. The defaults should just work for most server setups, though
# you can tweak the two most important settings in the configuration section
# below.
# --       --
#
# -- Configuration --
# The minimum available disk space you want, in gigabytes
MIN_FREESPACE="1"
# Who to send mails to. Generally root will be enough, as most setups
# alias that to whomever should get the sysadmin e-mails.
MAILTO="root"
# --               --

# Convert GB to KB
let FREESPACE_KB=$MIN_FREESPACE*1024
let FREESPACE_KB=$FREESPACE_KB*1024
# Ensure all output is in English
export LC_ALL="C"
# The df command to use
DF="df -x tmpfs -x devtmpfs -l"

for filesystem in `$DF |\egrep -v '^(Filesystem)'|perl -pi -e 's/.*\s(\S+)$/$1/'|sort|uniq`; do
    # Ignore filesystems that are smaller than MIN_FREESPACE
    TOTALSPACE="`$DF "$filesystem" |\egrep -v '^(Filesystem)'|perl -pi -e 's/^\S+\s+(\d+)\s+.*/$1/'`"
    if [ "$TOTALSPACE" -lt "$FREESPACE_KB" ]; then
        continue
    fi

    # Check free space and send an e-mail if it is too low
    FREESPACE="`$DF "$filesystem" |\egrep -v '^(Filesystem)'|perl -pi -e 's/^\S+\s+\S+\s+\S+\s+(\d+)\s+.*/$1/'`"
    if [ "$FREESPACE_KB" -gt "$FREESPACE" ]; then
        $DF -h "$filesystem" | mail -s "[$HOSTNAME] WARNING: $filesystem is low on disk space (less than ${MIN_FREESPACE}G free)" "$MAILTO"
    fi
done
