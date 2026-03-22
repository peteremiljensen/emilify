import React from 'react';
import { html, css } from 'react-strict-dom';
import type { FeaturedClassData } from '@/data/mockData';

interface FeaturedCardProps {
  readonly data: FeaturedClassData;
  readonly onReserve?: () => void;
}

const styles = css.create({
  card: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    height: 300,
    backgroundColor: '#20201f',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to top, #0e0e0e, rgba(14,14,14,0.4), transparent)',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textContent: {
    flex: 1,
  },
  tag: {
    backgroundColor: '#ff7439',
    color: '#3f1100',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 2,
    fontFamily: 'Space Grotesk',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    marginBottom: 12,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Space Grotesk',
    fontSize: 44,
    fontWeight: '900',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: -2,
    lineHeight: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: '#ffffff',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  reserveButton: {
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 9999,
    borderWidth: 0,
    marginLeft: 16,
  },
  reserveText: {
    fontFamily: 'Space Grotesk',
    fontSize: 11,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  data,
  onReserve,
}) => {
  return (
    <html.div style={styles.card}>
      <html.img
        src={data.imageUrl}
        alt={data.imageAlt}
        style={styles.image}
      />
      <html.div style={styles.overlay} />
      <html.div style={styles.content}>
        <html.div style={styles.textContent}>
          <html.span style={styles.tag}>{data.tag}</html.span>
          <html.h3 style={styles.title}>{data.title}</html.h3>
          <html.p style={styles.subtitle}>{data.subtitle}</html.p>
        </html.div>
        <html.button style={styles.reserveButton} onClick={onReserve}>
          <html.span style={styles.reserveText}>{data.ctaLabel}</html.span>
        </html.button>
      </html.div>
    </html.div>
  );
};
