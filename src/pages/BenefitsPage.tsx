import React, { useContext } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, spacing, fontSizes, fontWeights } from '../theme/theme';
import BenefitCard from '../components/BenefitCard';
import PTOCard from '../components/PTOCard';

const BenefitsPage: React.FC = () => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ 
          '--background': themeColors.background,
          '--color': themeColors.text,
          padding: `${spacing.md} ${spacing.md} 0`
        }}>
          <IonTitle size="large" style={{ 
            fontSize: fontSizes.xxxl, 
            fontWeight: fontWeights.bold 
          }}>
            My Benefits
          </IonTitle>
        </IonToolbar>
      
      </IonHeader>

      <IonContent 
        fullscreen 
        style={{ '--background': themeColors.background }}
      >
        <div style={{ padding: spacing.md }}>
          {/* Health Insurance */}
          <BenefitCard 
            title="Health Insurance"
            subtitle="Premium Plan - Family Coverage"
            items={[
              { label: 'Annual Deductible', value: '$1,500' },
              { label: 'Out-of-pocket Max', value: '$4,000' },
              { label: 'HSA Balance', value: '$2,350' }
            ]}
            action="View Details"
            onPress={() => console.log('Health insurance details')}
          />

          {/* Retirement Plan */}
          <BenefitCard 
            title="Retirement Plan"
            subtitle="401(k) - 6% Employer Match"
            items={[
              { label: 'Current Contribution', value: '8% of salary' },
              { label: 'YTD Contributions', value: '$6,240' },
              { label: 'Total Balance', value: '$87,430' }
            ]}
            action="Manage Plan"
            onPress={() => console.log('Manage retirement plan')}
          />

          {/* PTO Card */}
          <div style={{ 
            backgroundColor: themeColors.surface,
            borderRadius: '16px',
            padding: spacing.md,
            marginBottom: spacing.md,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <IonText style={{ 
              fontSize: fontSizes.xl,
              fontWeight: fontWeights.semibold,
              marginBottom: spacing.sm,
              color: themeColors.text,
              display: 'block'
            }}>
              Paid Time Off
            </IonText>

            <div style={{ 
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: spacing.md,
  marginBottom: spacing.md
}}>
              <PTOCard 
                type="Vacation" 
                total="15" 
                used="5" 
                color={["#3B82F6", "#2563EB"]} 
              />
              <PTOCard 
                type="Sick" 
                total="7" 
                used="1" 
                color={["#10B981", "#059669"]} 
              />
              <PTOCard 
                type="Personal" 
                total="3" 
                used="0" 
                color={["#8B5CF6", "#7C3AED"]} 
              />
            </div>

            <IonButton 
  expand="block" 
  className="benefit-card-button"
  style={{ 
    '--background': themeColors.primary,
    '--color': themeColors.primaryText,
    '--border-radius': '16px',
    margin: 0
  }}
>
  Request Time Off
</IonButton>
          </div>

          {/* Learning & Development */}
          <div style={{ 
            backgroundColor: themeColors.surface,
            borderRadius: '16px',
            padding: spacing.md,
            marginBottom: spacing.md,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <IonText style={{ 
              fontSize: fontSizes.xl,
              fontWeight: fontWeights.semibold,
              marginBottom: spacing.sm,
              color: themeColors.text,
              display: 'block'
            }}>
              Learning & Development
            </IonText>
            
            <IonText style={{ 
              fontSize: fontSizes.sm,
              marginBottom: spacing.md,
              color: themeColors.textSecondary,
              display: 'block'
            }}>
              Annual budget: $2,000
            </IonText>

            {/* Budget Progress */}
            <div style={{ 
  marginTop: spacing.md,
  marginBottom: spacing.md
}}>
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <IonText style={{ 
                  color: themeColors.textSecondary, 
                  fontSize: fontSizes.sm 
                }}>
                  Budget Used
                </IonText>
                <IonText style={{ 
                  color: themeColors.textSecondary, 
                  fontSize: fontSizes.sm 
                }}>
                  $750 / $2,000
                </IonText>
              </div>
              <div style={{ 
                height: '10px',
                borderRadius: '5px',
                backgroundColor: themeColors.surfaceSecondary,
                overflow: 'hidden'
              }}>
                <div style={{ 
                  height: '100%',
                  width: '37.5%',
                  borderRadius: '5px',
                  background: 'linear-gradient(to right, #3B82F6, #8B5CF6)'
                }}></div>
              </div>
            </div>

            {/* Recent Courses */}
            <div style={{ marginBottom: spacing.md }}>
              <IonText style={{ 
                fontSize: fontSizes.sm,
                fontWeight: fontWeights.medium,
                marginBottom: spacing.sm,
                color: themeColors.text,
                display: 'block'
              }}>
                Recent Courses:
              </IonText>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '6px'
              }}>
                <IonText style={{ 
                  color: themeColors.textSecondary, 
                  fontSize: fontSizes.sm 
                }}>
                  • Advanced Project Management
                </IonText>
                <IonText style={{ 
                  color: themeColors.textSecondary, 
                  fontSize: fontSizes.sm 
                }}>
                  $350
                </IonText>
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '6px'
              }}>
                <IonText style={{ 
                  color: themeColors.textSecondary, 
                  fontSize: fontSizes.sm 
                }}>
                  • Leadership Skills Workshop
                </IonText>
                <IonText style={{ 
                  color: themeColors.textSecondary, 
                  fontSize: fontSizes.sm 
                }}>
                  $400
                </IonText>
              </div>
            </div>
            <IonButton 
  expand="block" 
  className="benefit-card-button"
  style={{ 
    '--background': themeColors.primary,
    '--color': themeColors.primaryText,
    '--border-radius': '16px',
    margin: 0
  }}
>
  Browse Courses
</IonButton>
          </div>

          {/* Bottom spacing for tabs */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BenefitsPage;