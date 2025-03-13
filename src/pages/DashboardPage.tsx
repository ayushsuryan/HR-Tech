import React, { useContext } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonText, 
  IonBadge, 
  IonGrid, 
  IonRow, 
  IonCol
} from '@ionic/react';
import { notifications, chevronForward } from 'ionicons/icons';
import { AppContext } from '../utils/AppContext';
import { colors, spacing, fontSizes, fontWeights } from '../theme/theme';
import CircularProgress from '../components/CircularProgress';
import CategoryScore from '../components/CategoryScore';
import QuickActionCard from '../components/QuickActionCard';
import UpdateCard from '../components/UpdateCard';

const DashboardPage: React.FC = () => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  const overallScore = 82;

  return (
    <IonPage>
<IonHeader className="ion-no-border">
  <IonToolbar style={{ 
    '--background': themeColors.background,
    '--color': themeColors.text,
    padding: `${spacing.md} ${spacing.md} ${spacing.sm}`
  }}>
             <IonTitle size="large" style={{ 
            fontSize: fontSizes.xxxl, 
            fontWeight: fontWeights.bold 
          }}>
            Dashboard
          </IonTitle>
    <IonButtons slot="end">
      <IonButton style={{ 
        '--background': themeColors.surfaceSecondary,
        '--border-radius': '50%',
        width: '40px',
        height: '40px',
        position: 'relative'
      }}>
        <IonIcon icon={notifications} style={{ color: themeColors.text }} />
        <IonBadge style={{ 
          position: 'absolute', 
          top: '8px', 
          right: '8px',
          width: '8px',
          height: '8px',
          '--background': themeColors.error,
          '--color': themeColors.error
        }}></IonBadge>
      </IonButton>
      <IonButton style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: spacing.sm
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '16px',
          backgroundColor: '#8B5CF6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: spacing.sm
        }}>
          <IonText style={{
            color: 'white',
            fontWeight: fontWeights.bold,
            fontSize: fontSizes.sm
          }}>JD</IonText>
        </div>
        <IonText style={{
          color: themeColors.text,
          fontWeight: fontWeights.medium,
          fontSize: fontSizes.sm
        }}>Jane Doe</IonText>
      </IonButton>
    </IonButtons>
  </IonToolbar>
</IonHeader>
      <IonContent 
        fullscreen 
        style={{ '--background': themeColors.background }}
      >
        <div style={{ padding: spacing.md }}>
          {/* Welcome Section */}
          <div style={{ 
            backgroundColor: themeColors.surfaceSecondary, 
            borderRadius: '16px',
            padding: spacing.lg,
            marginBottom: spacing.md,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ zIndex: 1, position: 'relative' }}>
              <IonText style={{ 
                fontSize: fontSizes.xxl,
                fontWeight: fontWeights.bold,
                marginBottom: spacing.sm,
                color: themeColors.text,
                display: 'block'
              }}>
                Welcome back, Jane!
              </IonText>
              <IonText style={{ 
                fontSize: fontSizes.md,
                marginBottom: spacing.md,
                maxWidth: '80%',
                color: themeColors.textSecondary,
                display: 'block'
              }}>
                Your journey to wellness continues. You've completed 73% of your goals this month.
              </IonText>
              <IonButton style={{ 
                '--background': themeColors.primary,
                '--color': themeColors.primaryText,
                '--border-radius': '16px',
                margin: 0
              }}>
                View My Goals
              </IonButton>
            </div>
          </div>

          {/* Wellness Score Card */}
          <div style={{ 
            backgroundColor: themeColors.surface,
            borderRadius: '16px',
            padding: spacing.md,
            marginBottom: spacing.md,
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: spacing.md
            }}>
              <IonText style={{ 
                fontSize: fontSizes.lg,
                fontWeight: fontWeights.semibold,
                color: themeColors.text
              }}>
                Your Wellness Score
              </IonText>
              <IonButton fill="clear" style={{ '--color': themeColors.textSecondary }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  textDecoration: 'underline',
                  color: themeColors.textSecondary
                }}>
                  View Details
                </IonText>
              </IonButton>
            </div>

            <div style={{ 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <div style={{ marginRight: spacing.lg }}>
                <CircularProgress percentage={overallScore} />
              </div>
              <div style={{ flex: 1 }}>
                <IonGrid style={{ padding: 0 }}>
                  <IonRow>
                    <IonCol size="6" style={{ padding: '0 4px 8px 0' }}>
                      <CategoryScore title="Physical" score="78%" />
                    </IonCol>
                    <IonCol size="6" style={{ padding: '0 0 8px 4px' }}>
                      <CategoryScore title="Mental" score="85%" />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="6" style={{ padding: '8px 4px 0 0' }}>
                      <CategoryScore title="Social" score="90%" />
                    </IonCol>
                    <IonCol size="6" style={{ padding: '8px 0 0 4px' }}>
                      <CategoryScore title="Financial" score="76%" />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ marginBottom: spacing.md }}>
            <QuickActionCard 
              icon="calendar" 
              title="Upcoming Events" 
              subtitle="2 events this week" 
              borderless={true}
              onClick={() => console.log('Events clicked')}
            />
            <QuickActionCard 
              icon="gift" 
              title="Benefits Usage" 
              subtitle="65% utilized" 
              borderless={true}
              onClick={() => console.log('Benefits clicked')}
            />
            <QuickActionCard 
              icon="award" 
              title="Recognition" 
              subtitle="3 kudos received" 
              borderless={true}
              onClick={() => console.log('Recognition clicked')}
            />
          </div>

          {/* Latest Updates */}
          <div style={{ marginBottom: spacing.md }}>
            <IonText style={{ 
              fontSize: fontSizes.lg,
              fontWeight: fontWeights.semibold,
              color: themeColors.text,
              display: 'block',
              marginBottom: spacing.md
            }}>
              Latest Updates
            </IonText>
            <UpdateCard 
              title="New Mental Wellness Program" 
              description="Join our 8-week mindfulness program starting next Monday." 
              action="Learn More" 
              borderColor={themeColors.purple}
              onClick={() => console.log('Mental wellness clicked')}
            />
            <UpdateCard 
              title="Flexible Benefits Enrollment" 
              description="Only 2 weeks left to adjust your benefits package for Q2." 
              action="Review Now" 
              borderColor={themeColors.green}
              onClick={() => console.log('Benefits clicked')}
            />
            <UpdateCard 
              title="Team Building Event" 
              description="Join us for a virtual cooking class on Friday, March 10th." 
              action="RSVP" 
              borderColor={themeColors.yellow}
              onClick={() => console.log('Team building clicked')}
            />
          </div>

          {/* Bottom spacing for tabs */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;