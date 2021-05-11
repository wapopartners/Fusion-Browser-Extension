import React, { useState, useEffect } from "react";

const useAudio = (tag: string) => {
    // TODO src for the tag's icon
    const audioKeys = {
        canary: { url: "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/canary_GJLcahVO_NWM.mp3", src: "" },
        rc: { url: "", src: "" },
        hotfix: { url: "", src: "" },
        beta: { url: "", src: "" },
        stable: { url: "", src: "" },
    }
    const [audio] = useState(new Audio(audioKeys[tag].url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [playing, toggle];
};

const AudioPlayer = ({ tag }) => {
    const [playing, toggle] = useAudio(tag);

    return (
        <div>
            <button onClick={toggle}>
                {!playing ? "Play" : "Pause"} {tag} sound
            </button>
        </div>
    );
};

export default AudioPlayer