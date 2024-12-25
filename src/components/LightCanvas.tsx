import { useEffect, useRef } from 'react';

const LightCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Early return if canvas is not available
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Non-null assertion for context as we've already checked canvas
    const ctx = canvas.getContext('2d')!;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.6;
    };
    setCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        
        const colors = [
          '#FFB3BA', // pastel pink
          '#BAFFC9', // pastel green
          '#BAE1FF', // pastel blue
          '#FFFFBA', // pastel yellow
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particle array with proper canvas reference
    const particleArray: Particle[] = Array.from(
      { length: 100 }, 
      () => new Particle(canvas)
    );

    // Animation function
    const animate = () => {
      // Clear canvas with semi-transparent white
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particleArray.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      // Connect nearby particles
      connectParticles();

      requestAnimationFrame(animate);
    };

    // Connect particles with lines
    const connectParticles = () => {
      for (let i = 0; i < particleArray.length; i++) {
        for (let j = i; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(180, 180, 180, ${1 - distance/100})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Handle window resize
    window.addEventListener('resize', setCanvasSize);
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-50 p-4">
      <canvas 
        ref={canvasRef}
        className="rounded-lg shadow-lg bg-white"
      />
    </div>
  );
};

export default LightCanvas;