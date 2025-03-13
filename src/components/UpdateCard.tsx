import React, { useContext } from 'react';
import { IonCard, IonCardContent, IonText, IonButton } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights, borderRadius } from '../theme/theme';

interface UpdateCardProps {
  title: string;
  description: string;
  action: string;
  borderColor: string;
  onClick?: () => void;
}

export const UpdateCard: React.FC<UpdateCardProps> = ({ 
  title, 
  description, 
  action, 
  borderColor, 
  onClick
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <IonCard
      style={{
        backgroundColor: themeColors.surfaceSecondary,
        borderRadius: borderRadius.xl,
        margin: '0 0 12px 0',
        padding: '0',
        boxShadow: 'none',
        overflow: 'hidden',
        position: 'relative',
        borderLeft: `4px solid ${borderColor}`
      }}
    >
      <IonCardContent style={{ padding: '16px' }}>
        <IonText style={{
          fontSize: fontSizes.md,
          fontWeight: fontWeights.medium,
          color: themeColors.text,
          display: 'block',
          marginBottom: '4px'
        }}>
          {title}
        </IonText>
        
        <IonText style={{
          fontSize: fontSizes.sm,
          color: themeColors.textSecondary,
          display: 'block',
          marginBottom: '8px'
        }}>
          {description}
        </IonText>
        
        <IonButton
          fill="clear"
          color="medium"
          onClick={onClick}
          style={{
            margin: '4px 0 0 0',
            padding: '0',
            height: 'auto'
          }}
        >
          <IonText style={{
            fontSize: fontSizes.sm,
            fontWeight: fontWeights.medium,
            color: themeColors.text
          }}>
            {action}
          </IonText>
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default UpdateCard;