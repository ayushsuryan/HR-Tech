import React, { useContext, useState } from 'react';
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
  IonCol,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonItem,
  IonLabel
} from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, spacing, fontSizes, fontWeights } from '../theme/theme';
import AchievementBadge from '../components/AchievementBadge';

const RewardsPage: React.FC = () => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  
  const [selectedColleague, setSelectedColleague] = useState<string>('');
  const [selectedRecognition, setSelectedRecognition] = useState<string>('');
  const [message, setMessage] = useState<string>('');

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
            Rewards & Recognition
          </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent 
        fullscreen 
        style={{ '--background': themeColors.background }}
      >
        <div style={{ padding: spacing.md }}>
          {/* Achievements Section */}
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
              marginBottom: spacing.md,
              color: themeColors.text,
              display: 'block'
            }}>
              Your Achievements
            </IonText>

            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginBottom: spacing.md
            }}>
              <AchievementBadge 
                title="Team Player" 
                date="Feb 2025" 
                color={["#60A5FA", "#2563EB"]}
              />
              <AchievementBadge 
                title="Innovation Award" 
                date="Dec 2024" 
                color={["#A78BFA", "#7C3AED"]}
              />
              <AchievementBadge 
                title="5 Years Service" 
                date="Oct 2024" 
                color={["#34D399", "#059669"]}
              />
              <AchievementBadge 
                title="Customer Focus" 
                date="Aug 2024" 
                color={["#FBBF24", "#D97706"]}
              />
            </div>

            {/* Reward Points */}
            <div style={{ 
              padding: spacing.md,
              borderRadius: '16px',
              borderWidth: '1px',
              borderColor: themeColors.border,
              borderStyle: 'dashed'
            }}>
              <IonText style={{ 
                fontSize: fontSizes.md,
                fontWeight: fontWeights.medium,
                marginBottom: spacing.sm,
                color: themeColors.text,
                display: 'block'
              }}>
                Reward Points Balance
              </IonText>
              
              <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '4px'
              }}>
                <IonText style={{ 
                  fontSize: fontSizes.xxl,
                  fontWeight: fontWeights.bold,
                  color: 'white'
                }}>
                  2,450
                </IonText>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  marginLeft: spacing.sm,
                  color: '#39FF14'
                }}>
                  points available
                </IonText>
              </div>
              
              <IonButton fill="clear" style={{ '--color': themeColors.text }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  color: themeColors.text
                }}>
                  Redeem Points
                </IonText>
              </IonButton>
            </div>
          </div>

          {/* Recognize Colleague Section */}
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
              marginBottom: spacing.md,
              color: themeColors.text,
              display: 'block'
            }}>
              Recognize a Colleague
            </IonText>

            <div style={{ marginTop: spacing.sm }}>
              {/* Select Colleague */}
              <div style={{ marginBottom: spacing.md }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  marginBottom: spacing.sm,
                  color: themeColors.textSecondary,
                  display: 'block'
                }}>
                  Select a Colleague
                </IonText>
                
                <IonItem style={{ 
                  '--background': themeColors.surfaceSecondary,
                  '--border-color': themeColors.border,
                  '--border-radius': '16px',
                  '--padding-start': '16px',
                  '--padding-end': '16px',
                  '--min-height': '56px'
                }}>
                  <IonSelect 
                    interface="popover" 
                    placeholder="Choose a team member"
                    value={selectedColleague}
                    onIonChange={e => setSelectedColleague(e.detail.value)}
                    style={{ 
                      color: themeColors.textSecondary,
                      width: '100%'
                    }}
                  >
                    <IonSelectOption value="john">John Smith</IonSelectOption>
                    <IonSelectOption value="sarah">Sarah Johnson</IonSelectOption>
                    <IonSelectOption value="mike">Mike Williams</IonSelectOption>
                    <IonSelectOption value="emily">Emily Brown</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </div>

              {/* Recognition Type */}
              <div style={{ marginBottom: spacing.md }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  marginBottom: spacing.sm,
                  color: themeColors.textSecondary,
                  display: 'block'
                }}>
                  Recognition Type
                </IonText>
                
                <IonGrid style={{ padding: 0 }}>
                  <IonRow>
                  <IonCol size="6" style={{ padding: '0 4px 8px 0' }}>
  <IonButton 
    expand="block"
    fill={selectedRecognition === 'Team Player' ? 'solid' : 'outline'}
    onClick={() => setSelectedRecognition('Team Player')}
    style={{ 
      '--background': selectedRecognition === 'Team Player' 
        ? themeColors.primary 
        : themeColors.surfaceSecondary,
      '--color': selectedRecognition === 'Team Player'
        ? themeColors.primaryText
        : themeColors.text,
      '--border-radius': '16px',
      margin: 0,
      height: '40px'
    }}
  >
    Team Player
  </IonButton>
</IonCol>
<IonCol size="6" style={{ padding: '0 0 8px 4px' }}>
  <IonButton 
    expand="block"
    fill={selectedRecognition === 'Problem Solver' ? 'solid' : 'outline'}
    onClick={() => setSelectedRecognition('Problem Solver')}
    style={{ 
      '--background': selectedRecognition === 'Problem Solver' 
        ? themeColors.primary 
        : themeColors.surfaceSecondary,
      '--color': selectedRecognition === 'Problem Solver'
        ? themeColors.primaryText
        : themeColors.text,
      '--border-radius': '16px',
      margin: 0,
      height: '40px'
    }}
  >
    Problem Solver
  </IonButton>
</IonCol>
</IonRow>
<IonRow>
<IonCol size="6" style={{ padding: '8px 4px 0 0' }}>
  <IonButton 
    expand="block"
    fill={selectedRecognition === 'Innovation' ? 'solid' : 'outline'}
    onClick={() => setSelectedRecognition('Innovation')}
    style={{ 
      '--background': selectedRecognition === 'Innovation' 
        ? themeColors.primary 
        : themeColors.surfaceSecondary,
      '--color': selectedRecognition === 'Innovation'
        ? themeColors.primaryText
        : themeColors.text,
      '--border-radius': '16px',
      margin: 0,
      height: '40px'
    }}
  >
    Innovation
  </IonButton>
</IonCol>
<IonCol size="6" style={{ padding: '8px 0 0 4px' }}>
  <IonButton 
    expand="block"
    fill={selectedRecognition === 'Leadership' ? 'solid' : 'outline'}
    onClick={() => setSelectedRecognition('Leadership')}
    style={{ 
      '--background': selectedRecognition === 'Leadership' 
        ? themeColors.primary 
        : themeColors.surfaceSecondary,
      '--color': selectedRecognition === 'Leadership'
        ? themeColors.primaryText
        : themeColors.text,
      '--border-radius': '16px',
      margin: 0,
      height: '40px'
    }}
  >
    Leadership
  </IonButton>
</IonCol>
</IonRow>
</IonGrid>
</div>

{/* Message */}
<div style={{ marginBottom: spacing.md }}>
  <IonText style={{ 
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    marginBottom: spacing.sm,
    color: themeColors.textSecondary,
    display: 'block'
  }}>
    Message
  </IonText>
  
  <IonItem style={{ 
    '--background': themeColors.surfaceSecondary,
    '--border-color': themeColors.border,
    '--border-radius': '16px',
    '--padding-start': '16px',
    '--padding-end': '16px'
  }}>
    <IonTextarea
      placeholder="Write a personalized message..."
      rows={5}
      value={message}
      onIonChange={e => setMessage(e.detail.value!)}
      style={{ 
        color: themeColors.text
      }}
    ></IonTextarea>
  </IonItem>
</div>

<IonButton
  expand="block"
  style={{ 
    '--background': themeColors.primary,
    '--color': themeColors.primaryText,
    '--border-radius': '16px',
    margin: spacing.sm + ' 0 0 0'
  }}
>
  Send Recognition
</IonButton>
</div>
</div>

{/* Bottom spacing for tabs */}
<div style={{ height: '80px' }}></div>
</div>
</IonContent>
</IonPage>
);
};

export default RewardsPage;