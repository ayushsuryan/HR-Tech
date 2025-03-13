import React, { useContext } from 'react';
import { IonText, IonIcon } from '@ionic/react';
import { ribbon } from 'ionicons/icons';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights } from '../theme/theme';

interface AchievementBadgeProps {
  title: string;
  date: string;
  color: [string, string]; // Gradient colors array
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ 
  title, 
  date, 
  color 
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  
  return (
    <div style={{
      alignItems: 'center',
      width: '23%',
      marginBottom: '16px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8px',
        display: 'flex',
        background: `linear-gradient(to bottom right, ${color[0]}, ${color[1]})`
      }}>
        <IonIcon
          icon={ribbon}
          style={{
            fontSize: '32px',
            color: 'white'
          }}
        />
      </div>
      <IonText style={{
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.medium,
        textAlign: 'center',
        marginBottom: '2px',
        color: themeColors.text
      }}>
        {title}
      </IonText>
      <IonText style={{
        fontSize: fontSizes.xs,
        color: themeColors.textTertiary
      }}>
        {date}
      </IonText>
    </div>
  );
};

export default AchievementBadge;