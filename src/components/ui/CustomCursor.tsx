import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Cursor ring */}
      <div
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {cursorText && (
          <span className="cursor-text">{cursorText}</span>
        )}
      </div>

      <style>{`
        .custom-cursor-dot,
        .custom-cursor-ring {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .custom-cursor-dot {
          width: 8px;
          height: 8px;
          background: var(--color-emerald-400);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }

        .custom-cursor-ring {
          width: 40px;
          height: 40px;
          border: 2px solid var(--color-emerald-400);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.5;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-cursor-ring.hovering {
          width: 60px;
          height: 60px;
          opacity: 1;
          background: rgba(0, 255, 136, 0.1);
          backdrop-filter: blur(4px);
        }

        .cursor-text {
          color: var(--color-emerald-400);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Hide default cursor on interactive elements */
        body,
        a,
        button,
        [data-cursor="pointer"] {
          cursor: none !important;
        }

        /* Mobile - show default cursor */
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none;
          }

          body,
          a,
          button,
          [data-cursor="pointer"] {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
