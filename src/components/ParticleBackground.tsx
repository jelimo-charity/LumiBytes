import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  originalX: number;
  originalY: number;
  pulseOffset: number;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon' | 'plus' | 'diamond';
  rotation: number;
  rotationSpeed: number;
  glowIntensity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null, radius: 120 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions with high DPI support
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Orchid coder palette; movement and interactions stay theme-independent
    const getThemeColors = () => {
      if (resolvedTheme === 'dark') {
        return {
          particles: [
            'rgba(168, 85, 247, 0.95)',  // vivid violet
            'rgba(244, 114, 182, 0.95)', // neon pink
            'rgba(196, 181, 253, 0.9)',  // lavender
            'rgba(217, 70, 239, 0.9)',   // orchid
            'rgba(103, 232, 249, 0.8)',  // cyan accent
          ],
          connections: 'rgba(196, 181, 253, 0.38)',
          grid: 'rgba(168, 85, 247, 0.1)',
        };
      } else {
        return {
          particles: [
            'rgba(126, 34, 206, 0.9)',   // deep violet
            'rgba(219, 39, 119, 0.85)',  // berry pink
            'rgba(147, 51, 234, 0.85)',  // purple
            'rgba(192, 38, 211, 0.8)',   // orchid
            'rgba(8, 145, 178, 0.75)',   // cyan accent
          ],
          connections: 'rgba(126, 34, 206, 0.3)',
          grid: 'rgba(126, 34, 206, 0.08)',
        };
      }
    };

    // Draw geometric tech shapes
    const drawShape = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const size = particle.size;
      
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'square':
          ctx.fillRect(-size, -size, size * 2, size * 2);
          ctx.strokeRect(-size, -size, size * 2, size * 2);
          break;
          
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -size * 1.2);
          ctx.lineTo(size * 1.1, size * 0.6);
          ctx.lineTo(-size * 1.1, size * 0.6);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
          
        case 'hexagon':
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = Math.cos(angle) * size * 0.9;
            const y = Math.sin(angle) * size * 0.9;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
          
        case 'plus':
          const thickness = size * 0.4;
          ctx.fillRect(-size, -thickness, size * 2, thickness * 2);
          ctx.fillRect(-thickness, -size, thickness * 2, size * 2);
          break;
          
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -size * 1.2);
          ctx.lineTo(size * 1.2, 0);
          ctx.lineTo(0, size * 1.2);
          ctx.lineTo(-size * 1.2, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
      }
      
      ctx.restore();
    };

    // Initialize particles with balanced distribution
    const initParticles = () => {
      particlesRef.current = [];
      const colors = getThemeColors().particles;
      const shapes: Particle['shape'][] = ['circle', 'square', 'triangle', 'hexagon', 'plus', 'diamond'];
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 10000),
        120 // Max 120 particles for performance
      );

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.5 + 1.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          originalX: Math.random() * window.innerWidth,
          originalY: Math.random() * window.innerHeight,
          pulseOffset: Math.random() * Math.PI * 2,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          glowIntensity: Math.random() * 0.5 + 0.5,
        });
      }
    };

    // Mouse interaction handlers
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // Animation loop with optimized rendering
    const animate = () => {
      const { connections, grid } = getThemeColors();
      
      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid pattern for tech feel
      ctx.strokeStyle = grid;
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < window.innerWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }
      for (let y = 0; y < window.innerHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Add subtle pulsing to movement
        const pulse = Math.sin(Date.now() * 0.001 + particle.pulseOffset) * 0.1 + 1;
        particle.x += particle.speedX * pulse;
        particle.y += particle.speedY * pulse;
        particle.rotation += particle.rotationSpeed;
        
        // Screen edge wrapping
        if (particle.x < -20) particle.x = window.innerWidth + 20;
        if (particle.x > window.innerWidth + 20) particle.x = -20;
        if (particle.y < -20) particle.y = window.innerHeight + 20;
        if (particle.y > window.innerHeight + 20) particle.y = -20;

        // Mouse interaction physics with stronger repulsion
        if (mouseRef.current.x && mouseRef.current.y) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            particle.x -= Math.cos(angle) * force * 3;
            particle.y -= Math.sin(angle) * force * 3;
            particle.rotationSpeed += force * 0.01;
          }
        }

        // Draw enhanced glow effect
        const glowSize = particle.size * 4 * particle.glowIntensity;
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        glow.addColorStop(0, particle.color);
        glow.addColorStop(0.5, particle.color.replace(/[\d.]+\)$/g, '0.3)'));
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle shape with stroke
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = particle.color.replace(/[\d.]+\)$/g, '0.8)');
        ctx.lineWidth = 0.5;
        drawShape(ctx, particle);
      });

      // Draw connections between particles with data-flow effect
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.4;
            ctx.strokeStyle = connections.replace(/[\d.]+\)$/g, `${opacity})`);
            ctx.lineWidth = 1 * (1 - distance / 180);
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
            
            // Add pulse dots along connections for data-flow effect
            if (distance < 120 && Math.random() > 0.98) {
              const midX = (particlesRef.current[i].x + particlesRef.current[j].x) / 2;
              const midY = (particlesRef.current[i].y + particlesRef.current[j].y) / 2;
              ctx.fillStyle = connections.replace(/[\d.]+\)$/g, '0.8)');
              ctx.beginPath();
              ctx.arc(midX, midY, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initialize with proper cleanup
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [resolvedTheme]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;
