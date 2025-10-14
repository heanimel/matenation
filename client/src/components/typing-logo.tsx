import { useState, useEffect } from "react";

export function TypingLogo() {
  const [displayText, setDisplayText] = useState("");
  const [isBlinking, setIsBlinking] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "mate.";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const animate = async () => {
      // Typing phase
      for (let i = 0; i <= fullText.length; i++) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayText(fullText.slice(0, i));
            resolve(null);
          }, 150);
        });
      }

      // Blinking phase (7 times)
      setIsBlinking(true);
      for (let i = 0; i < 7; i++) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setShowCursor((prev: boolean) => !prev);
            setBlinkCount(i + 1);
            resolve(null);
          }, 300);
        });
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setShowCursor((prev: boolean) => !prev);
            resolve(null);
          }, 300);
        });
      }
      setIsBlinking(false);
      setBlinkCount(0);

      // Wait a bit before deleting
      await new Promise(resolve => {
        timeoutId = setTimeout(resolve, 500);
      });

      // Deleting phase
      for (let i = fullText.length; i >= 0; i--) {
        await new Promise(resolve => {
          timeoutId = setTimeout(() => {
            setDisplayText(fullText.slice(0, i));
            resolve(null);
          }, 100);
        });
      }

      // Wait before restarting
      await new Promise(resolve => {
        timeoutId = setTimeout(resolve, 500);
      });

      // Restart the animation
      animate();
    };

    animate();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      className="text-6xl md:text-8xl lg:text-9xl font-bold text-center"
      style={{ 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.05em'
      }}
      data-testid="text-typing-logo"
    >
      <span className="inline-block" style={{ borderRadius: '1rem' }}>
        {displayText}
      </span>
      <span 
        className={`inline-block w-1 h-16 md:h-24 lg:h-32 bg-white ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          transition: 'opacity 0.1s',
          verticalAlign: 'middle',
          marginBottom: '0.5rem'
        }}
      />
    </div>
  );
}
