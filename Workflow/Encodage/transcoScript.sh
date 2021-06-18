#!/bin/bash

sudo ffmpeg -i $1 \
    -vcodec libx264 -g 1 -pix_fmt yuv422p10le -vb 100M \
    -x264opts avcintra-class=100 -x264opts colorprim=bt709 \
    -x264opts transfer=bt709 -x264opts colormatrix=bt709 \
    -vf "setfield=prog,bwdif=1,interlaced" \
    -video_size 1920x1080 \
	-r 50  \
	-ac 2 -c:a aac -b:a 128k \
    $2