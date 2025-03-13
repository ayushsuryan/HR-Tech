import React, { useContext } from 'react';
import { IonItem, IonIcon, IonLabel } from '@ionic/react';
import { 
  barChart, gift, heart, ribbon, chatbubbles,
  chevronForward
} from 'ionicons/icons';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights, borderRadius } from '../theme/theme';

interface NavItemProps {
  icon: string;
  label: string;
  active: boolean;
  onPress?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  active,
  onPress
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  
  // Map React Native Feather icons to Ionic icons
  const iconMap: Record<string, string> = {
    'bar-chart-2': barChart,
    'gift': gift,
    'heart': heart,
    'award': ribbon,
    'message-circle': chatbubbles,
    'chevron-right': chevronForward
  };

  const iconName = iconMap[icon] || barChart;

  return (
    <IonItem 
      lines="none"
      detail={false}
      button
      onClick={onPress}
      style={{
        '--background': active 
          ? (darkMode ? themeColors.surfaceSecondary : themeColors.primary) 
          : 'transparent',
        '--border-radius': borderRadius.xl,
        marginBottom: '8px',
        padding: '0',
        '--inner-padding-end': '0'
      }}
    >
      <IonIcon 
        icon={iconName} 
        slot="start" 
        style={{
          fontSize: '18px',
          color: active 
            ? (darkMode ? themeColors.text : themeColors.primaryText) 
            : themeColors.text
        }}
      />
      
      <IonLabel style={{
        margin: '0',
        fontWeight: fontWeights.medium,
        fontSize: fontSizes.md,
        color: active 
          ? (darkMode ? themeColors.text : themeColors.primaryText) 
          : themeColors.text
      }}>
        {label}
      </IonLabel>
      
      <IonIcon 
        icon={chevronForward} 
        slot="end"
        style={{
          fontSize: '16px',
          color: active 
            ? (darkMode ? themeColors.text : themeColors.primaryText) 
            : themeColors.text
        }}
      />
    </IonItem>
  );
};

export default NavItem;