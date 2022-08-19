import React from 'react'
import VerticalGallery from './gallery/VerticalGallery'

const Test = () => {
  return (
    <VerticalGallery videos={[
      {
        src: "https://www.youtube.com/embed/01QbeS4G8FM",
        title: "red family tranquill",
        type: "youtube",
        id: "Reset",
      },
      {
        src: "/images/puntata-10.mp4",
        title: "red radio pt 10",
        type: "project",
        id: "1",
      },
      {
        src: "/images/puntata-9.mp4",
        title: "red radio pt 9",
        type: "project",
        id: "2",
      },
      {
        src: "/images/puntata-8.mp4",
        title: "red radio pt 8",
        type: "project",
        id: "3",
      },
    ]}/>
  )
}

export default Test