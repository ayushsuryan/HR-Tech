import React, { useContext } from 'react';
import { IonButton, IonText } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, borderRadius, fontSizes, fontWeights } from '../theme/theme';

interface QuickHelpButtonProps {
  text: string;
  onClick?: () => void;
}

export const QuickHelpButton: React.FC<QuickHelpButtonProps> = ({ 
  text,
  onClick
}) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <IonButton
      expand="block"
      fill="solid"
      onClick={onClick}
      style={{
        margin: '0 0 8px 0',
        '--background': themeColors.surfaceSecondary,
        '--border-radius': borderRadius.xl,
        '--color': themeColors.text,
        height: 'auto',
        padding: '16px'
      }}
    >
      <IonText style={{
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.medium,
        color: themeColors.text
      }}>
        {text}
      </IonText>
    </IonButton>
  );
};

export default QuickHelpButton;