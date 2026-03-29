import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(_req: NextRequest) {
  const logoPng = fs.readFileSync(path.join(process.cwd(), 'public', 'Imagotipo_r_w.png'));
  const logoSrc = `data:image/png;base64,${logoPng.toString('base64')}`;

  const [montserratMedium, montserratSemiBold] = await Promise.all([
    fetch('https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-.ttf').then((r) => r.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-.ttf').then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {/* Glow celeste — arriba izquierda */}
        <div
          style={{
            position: 'absolute',
            top: '-130px',
            left: '-80px',
            width: '620px',
            height: '620px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.32) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        {/* Glow morado — abajo derecha */}
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            right: '-60px',
            width: '560px',
            height: '560px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.35) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* "F" decorativa grande — derecha */}
        <div
          style={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '500px',
            fontWeight: 600,
            color: 'rgba(124,58,237,0.07)',
            lineHeight: 1,
          }}
        >
          F
        </div>

        {/* Contenido */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 90px',
            position: 'relative',
            zIndex: 10,
            width: '100%',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(6,182,212,0.15)',
              border: '1.5px solid rgba(6,182,212,0.4)',
              marginBottom: '40px',
              alignSelf: 'flex-start',
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#06B6D4' }} />
            <span style={{ color: '#67e8f9', fontSize: '15px', fontWeight: 600, letterSpacing: '0.15em' }}>
              CARTELERÍA · GRÁFICA · COMUNICACIÓN VISUAL
            </span>
          </div>

          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={480} height={120} style={{ objectFit: 'contain', objectPosition: 'left', marginBottom: '20px' }} alt="FLAMA" />

          {/* Subtítulo */}
          <div
            style={{
              fontSize: '30px',
              color: '#a3a3a3',
              lineHeight: 1.45,
              maxWidth: '660px',
              marginBottom: '52px',
            }}
          >
            Identidad empresarial para tu negocio. Diseño, producción e instalación.
          </div>

          {/* Barra inferior */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span style={{ color: '#06B6D4', fontSize: '18px', fontWeight: 600 }}>
              flamastudio.ar
            </span>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#525252' }} />
            <span style={{ color: '#525252', fontSize: '16px', fontWeight: 600 }}>
              Mendoza, Argentina
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Montserrat', data: montserratMedium, weight: 500, style: 'normal' as const },
        { name: 'Montserrat', data: montserratSemiBold, weight: 600, style: 'normal' as const },
      ],
    }
  );
}
