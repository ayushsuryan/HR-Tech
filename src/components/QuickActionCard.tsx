import React, { useContext } from 'react';
import { IonCard, IonCardContent, IonText, IonIcon } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights, borderRadius } from '../theme/theme';
import { 
  calendar, gift, ribbon, 
  heart, time, wallet 
} from 'ionicons/icons';

interface QuickActionCardProps {
  icon: string;
  title: string;
  subtitle: string;
  borderless?: boolean;
  onClick?: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  borderless = false,
  onClick
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  
  // Map React Native Feather icons to Ionic icons
  const iconMap: Record<string, string> = {
    'calendar': calendar,
    'gift': gift,
    'award': ribbon,
    'heart': heart,
    'clock': time,
    'credit-card': wallet
  };

  return (
    <IonCard 
      onClick={onClick}
      style={{
        backgroundColor: themeColors.surface,
        borderRadius: borderRadius.xl,
        margin: '0 0 16px 0',
        padding: '0',
        boxShadow: 'none',
        border: darkMode || borderless 
          ? 'none' 
          : `1px solid ${themeColors.border}`,
        cursor: 'pointer'
      }}
    >
      <IonCardContent style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: borderRadius.xl,
          backgroundColor: themeColors.surfaceSecondary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <IonIcon 
            icon={iconMap[icon] || calendar} 
            style={{ 
              fontSize: '24px',
              color: themeColors.text
            }}
          />
        </div>
        
        <div style={{ marginLeft: '16px' }}>
          <IonText style={{
            fontSize: fontSizes.md,
            fontWeight: fontWeights.medium,
            color: themeColors.text,
            display: 'block'
          }}>
            {title}
          </IonText>
          <IonText style={{
            fontSize: fontSizes.sm,
            color: themeColors.textSecondary,
            marginTop: '4px',
            display: 'block'
          }}>
            {subtitle}
          </IonText>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default QuickActionCard;