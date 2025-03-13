import React, { useContext, useState } from 'react';
import { 
  IonContent, 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonText,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { cloudUpload } from 'ionicons/icons';
import { AppContext } from '../utils/AppContext';
import { colors, spacing, fontSizes, fontWeights, borderRadius } from '../theme/theme';
import HRTeamMember from '../components/HRTeamMember';
import QuickHelpButton from '../components/QuickHelpButton';

const ConnectPage: React.FC = () => {
  const { darkMode } = useContext(AppContext);
  const themeColors = darkMode ? colors.dark : colors.light;
  
  const [requestType, setRequestType] = useState<string>('');
  const [priority, setPriority] = useState<string>('');
  const [description, setDescription] = useState<string>('');

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
            Connect with HR
          </IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent 
        fullscreen 
        style={{ '--background': themeColors.background }}
      >
        <div style={{ padding: spacing.md }}>
          {/* Submit a Request Card */}
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
              Submit a Request
            </IonText>

            <div style={{ marginTop: spacing.sm }}>
              {/* Request Type */}
              <div style={{ marginBottom: spacing.md }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  marginBottom: spacing.sm,
                  color: themeColors.textSecondary,
                  display: 'block'
                }}>
                  Request Type
                </IonText>
                
                <IonItem style={{ 
                  '--background': darkMode ? themeColors.surfaceSecondary : 'white',
                  '--border-color': themeColors.border,
                  '--border-radius': '16px',
                  '--padding-start': '16px',
                  '--padding-end': '16px',
                  '--min-height': '56px'
                }}>
                  <IonSelect 
                    interface="popover" 
                    placeholder="Select a category"
                    value={requestType}
                    onIonChange={e => setRequestType(e.detail.value)}
                    style={{ 
                      color: themeColors.textSecondary,
                      width: '100%'
                    }}
                  >
                    <IonSelectOption value="benefits">Benefits Question</IonSelectOption>
                    <IonSelectOption value="payroll">Payroll Issue</IonSelectOption>
                    <IonSelectOption value="leave">Leave Request</IonSelectOption>
                    <IonSelectOption value="policy">Policy Clarification</IonSelectOption>
                    <IonSelectOption value="other">Other</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </div>

              {/* Priority */}
              <div style={{ marginBottom: spacing.md }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  marginBottom: spacing.sm,
                  color: themeColors.textSecondary,
                  display: 'block'
                }}>
                  Priority
                </IonText>
                
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                  <IonButton 
                    fill={priority === 'Low' ? 'solid' : 'outline'}
                    onClick={() => setPriority('Low')}
                    style={{ 
                      '--background': priority === 'Low' 
                        ? themeColors.primary 
                        : darkMode ? themeColors.surfaceSecondary : 'white',
                      '--color': priority === 'Low'
                        ? themeColors.primaryText
                        : themeColors.text,
                      '--border-color': themeColors.border,
                      '--border-radius': '16px',
                      margin: 0,
                      flex: 1,
                      marginRight: '8px'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      paddingLeft: '16px'
                    }}>
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        borderRadius: '8px', 
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: priority === 'Low' 
                          ? themeColors.primaryText 
                          : themeColors.textSecondary,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '6px'
                      }}>
                        {priority === 'Low' && (
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '4px', 
                            backgroundColor: themeColors.primaryText 
                          }}></div>
                        )}
                      </div>
                      <IonText>Low</IonText>
                    </div>
                  </IonButton>
                  
                  <IonButton 
                    fill={priority === 'Medium' ? 'solid' : 'outline'}
                    onClick={() => setPriority('Medium')}
                    style={{ 
                      '--background': priority === 'Medium' 
                        ? themeColors.primary 
                        : darkMode ? themeColors.surfaceSecondary : 'white',
                      '--color': priority === 'Medium'
                        ? themeColors.primaryText
                        : themeColors.text,
                      '--border-color': themeColors.border,
                      '--border-radius': '16px',
                      margin: 0,
                      flex: 1,
                      marginRight: '8px'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      paddingLeft: '16px'
                    }}>
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        borderRadius: '8px', 
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: priority === 'Medium' 
                          ? themeColors.primaryText 
                          : themeColors.textSecondary,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '6px'
                      }}>
                        {priority === 'Medium' && (
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '4px', 
                            backgroundColor: themeColors.primaryText 
                          }}></div>
                        )}
                      </div>
                      <IonText>Medium</IonText>
                    </div>
                  </IonButton>
                  
                  <IonButton 
                    fill={priority === 'High' ? 'solid' : 'outline'}
                    onClick={() => setPriority('High')}
                    style={{ 
                      '--background': priority === 'High' 
                        ? themeColors.primary 
                        : darkMode ? themeColors.surfaceSecondary : 'white',
                      '--color': priority === 'High'
                        ? themeColors.primaryText
                        : themeColors.text,
                      '--border-color': themeColors.border,
                      '--border-radius': '16px',
                      margin: 0,
                      flex: 1
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      paddingLeft: '16px'
                    }}>
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        borderRadius: '8px', 
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: priority === 'High' 
                          ? themeColors.primaryText 
                          : themeColors.textSecondary,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: '6px'
                      }}>
                        {priority === 'High' && (
                          <div style={{ 
                            width: '8px', 
                            height: '8px', 
                            borderRadius: '4px', 
                            backgroundColor: themeColors.primaryText 
                          }}></div>
                        )}
                      </div>
                      <IonText>High</IonText>
                    </div>
                  </IonButton>
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: spacing.md }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  marginBottom: spacing.sm,
                  color: themeColors.textSecondary,
                  display: 'block'
                }}>
                  Description
                </IonText>
                
                <IonItem style={{ 
                  '--background': darkMode ? themeColors.surfaceSecondary : 'white',
                  '--border-color': themeColors.border,
                  '--border-radius': '16px',
                  '--padding-start': '16px',
                  '--padding-end': '16px'
                }}>
                  <IonTextarea
                    placeholder="Please provide details about your request..."
                    rows={5}
                    value={description}
                    onIonChange={e => setDescription(e.detail.value!)}
                    style={{ 
                      color: themeColors.text
                    }}
                  ></IonTextarea>
                </IonItem>
              </div>

              {/* Attachments */}
              <div style={{ marginBottom: spacing.md }}>
                <IonText style={{ 
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.medium,
                  marginBottom: spacing.sm,
                  color: themeColors.textSecondary,
                  display: 'block'
                }}>
                  Attachments (optional)
                </IonText>
                
                <div style={{ 
                  padding: spacing.lg,
                  borderRadius: borderRadius.xl,
                  borderWidth: '1px',
                  borderStyle: 'dashed',
                  borderColor: darkMode ? themeColors.border : themeColors.border,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <IonButton fill="clear" style={{ '--color': themeColors.text }}>
                    <IonIcon slot="start" icon={cloudUpload} />
                    <IonText style={{ 
                      fontWeight: fontWeights.medium,
                      marginBottom: '4px',
                      color: themeColors.text
                    }}>
                      Click to upload
                    </IonText>
                  </IonButton>
                  <IonText style={{ 
                    fontSize: fontSizes.xs,
                    color: themeColors.textTertiary
                  }}>
                    or drag and drop files here
                  </IonText>
                </div>
              </div>

              <IonButton
                expand="block"
                style={{ 
                  '--background': themeColors.primary,
                  '--color': themeColors.primaryText,
                  '--border-radius': '16px',
                  margin: 0
                }}
              >
                Submit Request
              </IonButton>
            </div>
          </div>

          {/* HR Team Card */}
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
              HR Team
            </IonText>

            <div style={{ marginBottom: spacing.md }}>
              <HRTeamMember name="Sarah Thompson" role="HR Director" />
              <HRTeamMember name="David Richards" role="Benefits Specialist" />
              <HRTeamMember name="Jennifer Lee" role="Talent Development" />
            </div>

            <div>
              <IonText style={{ 
                fontSize: fontSizes.md,
                fontWeight: fontWeights.medium,
                marginBottom: spacing.md,
                color: themeColors.text,
                display: 'block'
              }}>
                Quick Help
              </IonText>
              
              <QuickHelpButton text="Employee Handbook" />
              <QuickHelpButton text="Company Policies" />
              <QuickHelpButton text="Career Development Resources" />
              <QuickHelpButton text="FAQ" />
            </div>
          </div>

          {/* Bottom spacing for tabs */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ConnectPage;