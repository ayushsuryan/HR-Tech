import React, { useContext } from 'react';
import { IonCard, IonCardContent, IonText, IonButton } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, borderRadius, fontSizes, fontWeights } from '../theme/theme';

interface ProgramCardProps {
  gradient: [string, string]; // Gradient colors array
  title: string;
  description: string;
  status: string;
  action: string;
  onPress?: () => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  gradient,
  title,
  description,
  status,
  action,
  onPress
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <IonCard style={{
      backgroundColor: themeColors.surface,
      borderRadius: borderRadius.xl,
      margin: '0 0 16px 0',
      padding: 0,
      overflow: 'hidden',
      boxShadow: 'none',
      width: 'calc(100% - 16px)',
      minHeight: '200px'
    }}>
      <div style={{
        height: '120px',
        background: `linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})`,
      }} />
      
      <IonCardContent style={{
        padding: '16px',
        flex: 1
      }}>
        <IonText style={{
          fontSize: fontSizes.lg,
          fontWeight: fontWeights.semibold,
          marginBottom: '8px',
          color: themeColors.text,
          display: 'block'
        }}>
          {title}
        </IonText>
        
        <IonText style={{
          fontSize: fontSizes.sm,
          marginBottom: '16px',
          flex: 1,
          color: themeColors.textSecondary,
          display: 'block'
        }}>
          {description}
        </IonText>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <IonText style={{
            fontSize: fontSizes.sm,
            flex: 1,
            marginRight: '8px',
            color: themeColors.textTertiary
          }}>
            {status}
          </IonText>
          
          <IonButton
            size="small"
            onClick={onPress}
            style={{
              padding: '0 16px',
              height: 'auto',
              borderRadius: borderRadius.lg,
              backgroundColor: themeColors.primary,
              color: themeColors.primaryText
            }}
          >
            <IonText style={{
              fontSize: fontSizes.sm,
              fontWeight: fontWeights.medium
            }}>
              {action}
            </IonText>
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProgramCard;