#!/bin/bash

sudo ffmpeg -i $1 \
    -vcodec libx264 -vb 3M \
    -video_size 1280x720 \
	-r 25  \
	-ac 2 -c:a aac -b:a 128k \
    $2