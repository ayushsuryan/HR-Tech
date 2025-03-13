import React, { useContext } from 'react';
import { IonCard, IonCardContent, IonText } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights } from '../theme/theme';

interface CategoryScoreProps {
  title: string;
  score: string;
}

export const CategoryScore: React.FC<CategoryScoreProps> = ({ title, score }) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <IonCard 
      style={{
        backgroundColor: themeColors.surfaceSecondary,
        borderRadius: '16px',
        margin: '4px',
        padding: '8px',
        boxShadow: 'none',
        flex: 1
      }}
    >
      <IonCardContent style={{ padding: '8px' }}>
        <IonText style={{
          color: themeColors.text,
          fontSize: fontSizes.lg,
          fontWeight: fontWeights.medium,
          display: 'block'
        }}>
          {score}
        </IonText>
        <IonText style={{
          color: themeColors.textSecondary,
          fontSize: fontSizes.sm,
          marginTop: '2px',
          display: 'block'
        }}>
          {title}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default CategoryScore;