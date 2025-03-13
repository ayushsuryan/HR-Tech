import React, { useContext } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonText,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { AppContext } from '../utils/AppContext';
import { colors, spacing, fontSizes, fontWeights, gradients } from '../theme/theme';
import ProgramCard from '../components/ProgramCard';

const WellnessPage: React.FC = () => {
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
            Wellness Programs
          </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent 
        fullscreen 
        style={{ '--background': themeColors.background }}
      >
        <div style={{ padding: spacing.md }}>
          <IonGrid style={{ padding: 0 }}>
            <IonRow>
              <IonCol size="12">
                <ProgramCard 
                  gradient={gradients.blue}
                  title="Step Challenge"
                  description="Join our company-wide step challenge and win prizes."
                  status="23 participants"
                  action="Join"
                  onPress={() => console.log('Join step challenge')}
                />
              </IonCol>
              <IonCol size="12">
                <ProgramCard 
                  gradient={gradients.green}
                  title="Mindfulness Meditation"
                  description="Weekly guided sessions to reduce stress and improve focus."
                  status="Tuesdays @ 12pm"
                  action="Register"
                  onPress={() => console.log('Register for meditation')}
                />
              </IonCol>
              <IonCol size="12">
                <ProgramCard 
                  gradient={gradients.purple}
                  title="Financial Wellness"
                  description="Workshops on budgeting, investing, and retirement planning."
                  status="Next: March 15"
                  action="RSVP"
                  onPress={() => console.log('RSVP for financial workshop')}
                />
              </IonCol>
              <IonCol size="12">
                <ProgramCard 
                  gradient={gradients.yellow}
                  title="Ergonomic Assessment"
                  description="Get your workspace evaluated by a professional."
                  status="By appointment"
                  action="Schedule"
                  onPress={() => console.log('Schedule assessment')}
                />
              </IonCol>
              <IonCol size="12">
                <ProgramCard 
                  gradient={gradients.red}
                  title="Nutrition Coaching"
                  description="One-on-one sessions with a registered dietitian."
                  status="4 sessions/year"
                  action="Book Now"
                  onPress={() => console.log('Book nutrition coaching')}
                />
              </IonCol>
              <IonCol size="12">
                <ProgramCard 
                  gradient={gradients.teal}
                  title="Mental Health Support"
                  description="Confidential counseling through our EAP program."
                  status="24/7 Access"
                  action="Learn More"
                  onPress={() => console.log('Learn about mental health support')}
                />
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Bottom spacing for tabs */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WellnessPage;