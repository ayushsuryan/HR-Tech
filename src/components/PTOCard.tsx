import React, { useContext } from 'react';
import { IonText } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights, borderRadius, spacing } from '../theme/theme';

interface PTOCardProps {
  type: string;
  total: string;
  used: string;
  color: [string, string]; // Gradient colors array
}

export const PTOCard: React.FC<PTOCardProps> = ({ 
  type, 
  total, 
  used, 
  color 
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <div style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing.md,
      borderRadius: borderRadius.xl,
      marginRight: '4px',
      marginLeft: '4px',
      backgroundColor: themeColors.surfaceSecondary,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.sm,
        display: 'flex',
        background: `linear-gradient(to bottom right, ${color[0]}, ${color[1]})`
      }}>
        <IonText style={{
          color: 'white',
          fontSize: fontSizes.xl,
          fontWeight: fontWeights.bold
        }}>
          {total}
        </IonText>
      </div>
      <IonText style={{
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.medium,
        marginBottom: '2px',
        color: themeColors.text
      }}>
        {type} Days
      </IonText>
      <IonText style={{
        fontSize: fontSizes.xs,
        color: themeColors.textTertiary
      }}>
        {used} used
      </IonText>
    </div>
  );
};

export default PTOCard;