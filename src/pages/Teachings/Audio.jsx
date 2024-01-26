import { useState, useRef } from 'react';
import { FaBackward, FaForward, FaPlay, FaPause } from 'react-icons/fa';


const songs = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const playPauseHandler = () => {
    const handlePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    if (audioRef.current.readyState === 4) {
      // Audio is fully loaded, proceed with play/pause
      handlePlayPause();
    } else {
      // Wait for metadata to load before play/pause
      const loadedMetadataHandler = () => {
        handlePlayPause();
        audioRef.current.removeEventListener('loadedmetadata', loadedMetadataHandler);
      };
  
      audioRef.current.addEventListener('loadedmetadata', loadedMetadataHandler);
    }
  };
  

  // const playPauseHandler = () => {
  //   if (audioRef.current.readyState === 4) {
  //     // Audio is fully loaded, proceed with play/pause
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   } else {
  //     // Wait for metadata to load before play/pause
  //     audioRef.current.addEventListener('loadedmetadata', () => {
  //       if (isPlaying) {
  //         audioRef.current.play();
  //       }
  //     });
  //   }
  // }; 

  const timeUpdateHandler = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.url === audioRef.current.src);
    let newIndex = 0;
  
    if (direction === 'forward') {
      newIndex = (currentIndex + 1) % songs.length;
    } else if (direction === 'backward') {
      newIndex = (currentIndex - 1 + songs.length) % songs.length;
    }
  
    if (newIndex !== currentIndex) {
      audioRef.current.src = songs[newIndex].url;
      setCurrentTime(0);
  
      // Wait for the new audio to be loaded before playing
      audioRef.current.addEventListener('loadedmetadata', () => {
        if (isPlaying) audioRef.current.play();
      });
    }
  };
  

  return (
    <div className="h-fit w-full flex items-center justify-center">
      <div className="bg-my-black w-full p-5 rounded-lg shadow-lg">
        <audio
          ref={audioRef}
          src={songs[currentTime]?.url}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={() => skipTrackHandler('forward')}
          className="w-full mt-4"
        />
        <input
          type="range"
          value={currentTime}
          max={!isNaN(audioRef.current?.duration) ? audioRef.current.duration : 0}
          onChange={dragHandler}
          className="w-full mt-2 bg-red-600"
        />

        <div className="flex justify-center mt-4 space-x-10">
        <button onClick={() => skipTrackHandler('backward')} className="text-white hover:text-gray-300">
            <FaBackward />
          </button>
          <button onClick={playPauseHandler} className="text-white hover:text-gray-300">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={() => skipTrackHandler('forward')} className="text-white hover:text-gray-300">
            <FaForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
