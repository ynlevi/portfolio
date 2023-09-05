import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function TypingEffect({
  txt,
  className,
  handleFinish,
  speed,
  cursorStyle,
}) {
  const [hideCursor, setHideCursor] = useState(false);
  const [text] = useTypewriter({
    words: txt,
    loop: 1,
    onLoopDone: () => {
      setHideCursor(true);
      handleFinish && handleFinish();
    },
    typeSpeed: speed,
    delaySpeed: 700,
  });
  return (
    <div className={className}>
      <span>{text}</span>
      <Cursor
        cursorStyle={hideCursor ? "." : "|"}
        cursorBlinking={!hideCursor}
        cursorColor={cursorStyle}
      />
    </div>
  );
}
