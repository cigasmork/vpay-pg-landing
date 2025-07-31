
import React, { useRef, useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      opacitySpeed: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
        this.color = `rgba(252, 211, 77, ${Math.random() * 0.5 + 0.5})`; // yellow-400 with random opacity
        this.opacity = Math.random() * 0.5 + 0.2;
        this.opacitySpeed = (Math.random() * 0.01) - 0.005;

      }

      update(canvasWidth: number, canvasHeight: number) {
        if (this.x > canvasWidth || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvasHeight || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Twinkle effect
        this.opacity += this.opacitySpeed;
        if (this.opacity > 0.7 || this.opacity < 0.1) {
            this.opacitySpeed = -this.opacitySpeed;
        }


        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color.replace(/,\s*\d*\.?\d*\)/, `, ${this.opacity})`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
        resizeCanvas();
        particles = [];
        const numParticles = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }
    };
    
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            Math.pow(particles[a].x - particles[b].x, 2) + Math.pow(particles[a].y - particles[b].y, 2)
          );

          if (distance < 120) {
            opacityValue = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(217, 119, 6, ${opacityValue * 0.5})`; // amber-600
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update(canvas.width, canvas.height);
            p.draw();
        });
        connect();
        animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-1" />;
};

export default AnimatedBackground;
