import React, { useContext } from 'react';
import { IonCard, IonCardContent, IonText, IonButton } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, fontSizes, fontWeights, borderRadius, spacing } from '../theme/theme';

interface BenefitItem {
  label: string;
  value: string;
}

interface BenefitCardProps {
  title: string;
  subtitle: string;
  items: BenefitItem[];
  action: string;
  onPress?: () => void;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  subtitle,
  items,
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
      padding: '0',
      boxShadow: 'none',
      border: `1px solid rgba(255, 255, 255, 0.1)`
    }}>
      <IonCardContent style={{ padding: spacing.md }}>
        <IonText style={{
          fontSize: fontSizes.xl,
          fontWeight: fontWeights.semibold,
          marginBottom: spacing.sm,
          color: themeColors.text,
          display: 'block'
        }}>
          {title}
        </IonText>
        
        <IonText style={{
          fontSize: fontSizes.sm,
          marginBottom: spacing.md,
          color: themeColors.textSecondary,
          display: 'block'
        }}>
          {subtitle}
        </IonText>
        
        <div style={{ marginBottom: spacing.md }}>
          {items.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: spacing.sm
            }}>
              <IonText style={{
                fontSize: fontSizes.sm,
                color: themeColors.textSecondary
              }}>
                {item.label}:
              </IonText>
              <IonText style={{
                fontSize: fontSizes.sm,
                fontWeight: fontWeights.medium,
                color: themeColors.text
              }}>
                {item.value}
              </IonText>
            </div>
          ))}
        </div>
        
        <IonButton
  expand="block"
  onClick={onPress}
  className="benefit-card-button"
  style={{
    margin: 0,
    height: 'auto',
    borderRadius: borderRadius.xl,
    backgroundColor: themeColors.primary,
    color: themeColors.primaryText,
    fontWeight: fontWeights.medium,
  }}
>
  {action}
</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default BenefitCard;