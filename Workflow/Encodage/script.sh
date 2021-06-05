#!/bin/bash

# https://ffmpeg-user.ffmpeg.narkive.com/ioXfMsTJ/does-ffmpeg-support-avc-intra-and-or-x264-with-10bit-bitdepth-yuv422p10le

ffmpeg -i test1080.mp4 \
    -vcodec libx264 -g 1 -pix_fmt yuv422p10le -vb 100M \
    -x264opts avcintra-class=100 -x264opts colorprim=bt709 \
    -x264opts transfer=bt709 -x264opts colormatrix=bt709 \
    -vf "setfield=1" output.mxf

# Need to add progressive frame type transcoding 
# Verify if the bitrate is the right one (100 instead of 110Mbps)


mediainfo output.mxf > output.txt