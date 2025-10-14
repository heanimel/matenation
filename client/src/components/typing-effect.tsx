import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function TypingEffect() {
  const text = 'mate.';
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 150);
    } else if (isTyping && displayText.length === text.length) {
      setIsTyping(false);
      setBlinkCount(0);
    } else if (!isTyping && blinkCount < 7) {
      timeout = setTimeout(() => {
        setShowCursor(!showCursor);
        if (!showCursor) {
          setBlinkCount(blinkCount + 1);
        }
      }, 500);
    } else if (!isTyping && blinkCount >= 7) {
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsTyping(true);
          setShowCursor(true);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, showCursor, blinkCount, text]);

  return (
    <div className="relative inline-block">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400" style={{ fontFamily: "'Quicksand', 'Rounded', sans-serif", letterSpacing: '-0.02em' }}>
        {displayText}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: showCursor ? 1 : 0 }}
          className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-pink-400 ml-1"
          style={{ fontFamily: "'Quicksand', 'Rounded', sans-serif" }}
        >
        </motion.span>
      </h1>
    </div>
  );
}
