import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Youtube from 'react-youtube'
import VideoWrapper from '../components/VideoWrapper'

const VideoContainer = ({ videoId, offset, width, height }) => {
  const playerRef = useRef()

  useEffect(() => {
    if (!videoId) return

    const opts = {
      width,
      height,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        start: offset,
      }
    }

    playerRef.current = (<Youtube
      videoId={videoId}
      opts={opts}
    />)
  }, [videoId, width, height])

  return (<VideoWrapper>{playerRef.current}</VideoWrapper>)
}

VideoContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
  offset: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}

VideoContainer.defaultProps = {
  offset: 0,
  width: 320,
  height: 558,
}


export default VideoContainer
