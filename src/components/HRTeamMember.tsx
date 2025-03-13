import React, { useContext } from 'react';
import { IonText, IonButton } from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../theme/theme';

interface HRTeamMemberProps {
  name: string;
  role: string;
}

export const HRTeamMember: React.FC<HRTeamMemberProps> = ({ name, role }) => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  
  // Get initials from name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: spacing.md,
      borderRadius: borderRadius.xl,
      marginBottom: spacing.sm,
      backgroundColor: themeColors.surfaceSecondary
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        background: 'linear-gradient(to bottom right, #8B5CF6, #3B82F6)'
      }}>
        <IonText style={{
          color: 'white',
          fontWeight: fontWeights.bold,
          fontSize: fontSizes.md
        }}>
          {initials}
        </IonText>
      </div>
      
      <div style={{
        marginLeft: spacing.md,
        flex: 1
      }}>
        <IonText style={{
          fontWeight: fontWeights.medium,
          marginBottom: '2px',
          color: themeColors.text,
          display: 'block'
        }}>
          {name}
        </IonText>
        
        <IonText style={{
          fontSize: fontSizes.sm,
          marginBottom: '4px',
          color: themeColors.textSecondary,
          display: 'block'
        }}>
          {role}
        </IonText>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <IonButton
            fill="clear"
            size="small"
            style={{
              margin: 0,
              padding: 0,
              height: 'auto'
            }}
          >
            <IonText style={{
              fontSize: fontSizes.xs,
              textDecoration: 'underline',
              marginRight: spacing.md,
              color: themeColors.text
            }}>
              Email
            </IonText>
          </IonButton>
          
          <IonButton
            fill="clear"
            size="small"
            style={{
              margin: 0,
              padding: 0,
              height: 'auto'
            }}
          >
            <IonText style={{
              fontSize: fontSizes.xs,
              textDecoration: 'underline',
              color: themeColors.text
            }}>
              Schedule
            </IonText>
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default HRTeamMember;