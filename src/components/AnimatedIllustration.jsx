import { Player } from '@lottiefiles/react-lottie-player';
import './AnimatedIllustration.css';

const LOTTIE_ANIMATIONS = {
  team: 'https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json',
  collaboration: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json',
  development: 'https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json',
  contact: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json',
  services: 'https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json',
};

export default function AnimatedIllustration({ type = 'team', className = '', style = {} }) {
  const src = LOTTIE_ANIMATIONS[type] || LOTTIE_ANIMATIONS.team;

  return (
    <div className={`animated-illustration ${className}`} style={style}>
      <Player
        autoplay
        loop
        src={src}
        className="lottie-player"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
