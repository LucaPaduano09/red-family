import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { play, stop } from "../redux/playerSlice";

export default function useGallery(videos) {
  const getId = (videos) => {
    let ids = [];
    if (videos && videos.length > 0) {
      videos.forEach((v) => {
        ids.push(v.id);
      });
      return ids;
    }
  };
  const dispatch = useDispatch();
  const [transform, setTransform] = useState({
    id: "Reset",
    arrayId: [getId(videos)],
  });
  const [dotClicked, setDotclicked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const player = useSelector((state) => state.player.playing);
  const handleArrowClick = (direction) => {
    if (direction === "right") {
      switch (transform) {
        case "Reset":
          setTransform("1");
          break;
        case "1":
          setTransform("2");
          break;
        case "2":
          setTransform("3");
          break;
        case "3":
          setTransform("Reset");
          break;
      }
    } else if (direction === "left") {
      switch (transform) {
        case "Reset":
          setTransform("3");
          break;
        case "3":
          setTransform("2");
          break;
        case "2":
          setTransform("1");
          break;
        case "1":
          setTransform("Reset");
          break;
      }
    }
  };
  const handleDotClick = (id, arrayId) => {
    dispatch(stop());
    setPlaying(false);
    setTransform({id, arrayId});
    // filterArray(id, arrayId)
    setDotclicked(true)
  };
  const handleToggleVideo = (player) => {
    player === false ? dispatch(play()) : dispatch(stop());
    playing === true ? setPlaying(false) : setPlaying(true);
  };

  const [arrayId, setArrayId] = useState(getId(videos));

  const removeFirstId = (arrayId) => {
    arrayId.shift();
    return arrayId;
  };
  const handleTransform = (id, arrayId) => {
    setTransform({ id: id, arrayId: arrayId });
  };

  const resetArrayId = (videos) => {
    let ids = getId(videos);
    ids.unshift("ciao");
    setArrayId(ids);
    // return getId(props.videos).unshift("ciao");
  };
  const filterArray = (id, arrayId) => {
    let newArray = []
    arrayId.forEach(element => {
      if(arrayId[element] !== id){
        newArray = arrayId.filter((id) => 
          id !== id
        )
      } else {
        newArray = arrayId.filter((id) => 
          id !== id
        )
        setArrayId(newArray);
      }
    });
      // setArrayId(arrayId.filter((id)=>
      //   id !== id
      // ));
  };
  // useEffect(() => {
  //   if (player === false && dotClicked === false ) {
  //     if (arrayId.length > 1) {
  //       let newArray = removeFirstId(arrayId);
  //       setArrayId(newArray);
  //       let timer = setTimeout(() => {
  //         handleTransform(arrayId[0], arrayId);
  //       }, 6000);
  //       return () => {
  //         clearTimeout(timer);
  //       };
  //     } else if (arrayId.length === 1 || isNaN(arrayId) || arrayId === null || arrayId === undefined) {
  //       resetArrayId(videos);
  //     }
  //   } else {
  //     let timer = setTimeout(() => {
  //       setDotclicked(false);
  //     }, 8000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [transform, arrayId, dotClicked]);

  return {
    transform,
    getId,
    handleArrowClick,
    handleDotClick,
    arrayId,
    handleTransform,
    resetArrayId,
    handleToggleVideo,
    filterArray,
  };
}
